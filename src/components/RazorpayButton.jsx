"use client";

// Bundle PDFs list (payment ಆದ್ಮೇಲೆ ಇವು download ಆಗಬೇಕು)
const BUNDLE_PDFS = [
  {
    title: "Advanced Speaking Course",
    file: "/pdffile/advance Level.pdf"  // ನಿಮ್ಮ file name ಗೆ match ಮಾಡಿದೆ
  },
  {
    title: "Communication Skills",
    file: "/pdffile/communication.pdf"
  },
  {
    title: "Grammar Book",
    file: "/pdffile/grammar.book.pdf"
  },
  {
    title: "Vocabulary Builder",
    file: "/pdffile/vocabulary.pdf"
  }
];

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const handlePayment = async (pdf) => {
  try {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Failed to load payment gateway.");
      return;
    }

    // 🔴 IMPORTANT: .env.local ನಿಂದ key ತೆಗೆದುಕೊಳ್ಳಿ
    // Development: .env.local ನಲ್ಲಿ NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_SMd3bQBiK104zx
    // Production: .env.local ನಲ್ಲಿ NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_SMcuFtsC60tbzK
    const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    if (!RAZORPAY_KEY_ID) {
      alert("Payment configuration error. Please contact support.");
      console.error("Razorpay Key ID not found");
      return;
    }

    console.log("Using Razorpay Key:", RAZORPAY_KEY_ID); // Debug log

    const options = {
      key: RAZORPAY_KEY_ID,  // .env.local ನಿಂದ key ಬರುತ್ತೆ
      amount: pdf.price * 100,
      currency: "INR",
      name: "Spoken English Store",
      description: pdf.title === "bundle" ? "English Learning Bundle (4 PDFs)" : pdf.title,
      handler: function (response) {
        console.log("Payment success:", response);
        
        // Store bundle info in sessionStorage
        if (pdf.id === "bundle" || pdf.id === 1) {
          sessionStorage.setItem('bundlePurchased', 'true');
          sessionStorage.setItem('bundlePdfs', JSON.stringify(BUNDLE_PDFS));
          sessionStorage.setItem('paymentId', response.razorpay_payment_id);
        }
        
        // Redirect to download page with ID
        window.location.href = `/download/${pdf.id}?payment_id=${response.razorpay_payment_id}`;
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        pdf_id: pdf.id,
        pdf_title: pdf.title,
      },
      theme: {
        color: "#1e3c72",
      },
      modal: {
        ondismiss: function() {
          console.log("Payment modal closed");
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    
    paymentObject.on('payment.failed', function (response) {
      console.error("Payment failed:", response.error);
      alert("Payment failed: " + response.error.description);
    });

    paymentObject.open();
    
  } catch (error) {
    console.error("Razorpay Error:", error);
    alert("Something went wrong. Please try again.");
  }
};