"use client";

// Bundle PDFs list
const BUNDLE_PDFS = [
  {
    title: "Advanced Speaking Course",
    file: "/pdffile/advance Level.pdf"
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

    // 🔴 LIVE KEY - ನೇರವಾಗಿ ಇಲ್ಲಿ ಹಾಕಿ (ತಾತ್ಕಾಲಿಕ)
    const RAZORPAY_KEY_ID = "rzp_live_SMcuFtsC60tbzK";

    console.log("Using Razorpay Key:", RAZORPAY_KEY_ID);

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: pdf.price * 100,
      currency: "INR",
      name: "Spoken English Store",
      description: pdf.title === "bundle" ? "English Learning Bundle (4 PDFs)" : pdf.title,
      handler: function (response) {
        console.log("Payment success:", response);
        
        if (pdf.id === "bundle" || pdf.id === 1) {
          sessionStorage.setItem('bundlePurchased', 'true');
          sessionStorage.setItem('bundlePdfs', JSON.stringify(BUNDLE_PDFS));
          sessionStorage.setItem('paymentId', response.razorpay_payment_id);
        }
        
        window.location.href = `/download/${pdf.id}?payment_id=${response.razorpay_payment_id}`;
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#1e3c72",
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