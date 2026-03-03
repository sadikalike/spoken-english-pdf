"use client";

// Bundle PDFs list (payment ಆದ್ಮೇಲೆ ಇವು download ಆಗಬೇಕು)
const BUNDLE_PDFS = [
  {
    title: "Advanced Speaking Course",
    file: "/pddfile/advanced-speaking.pdf"
  },
  {
    title: "Vocabulary Builder",
    file: "/pddfile/vocabulary.pdf"
  },
  {
    title: "Daily English Conversation",
    file: "/pddfile/conversation.pdf"
  },
  {
    title: "Business English",
    file: "/pddfile/business-english.pdf"
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

    const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_SMd3bQBiK104zx";

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: pdf.price * 100,
      currency: "INR",
      name: "Spoken English Store",
      description: "English Learning Bundle (4 PDFs)",
      handler: function (response) {
        console.log("Payment success:", response);
        
        // Store bundle info in sessionStorage
        sessionStorage.setItem('bundlePurchased', 'true');
        sessionStorage.setItem('bundlePdfs', JSON.stringify(BUNDLE_PDFS));
        sessionStorage.setItem('paymentId', response.razorpay_payment_id);
        
        // Redirect to download page with ID
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
    paymentObject.open();
    
  } catch (error) {
    console.error("Razorpay Error:", error);
    alert("Something went wrong.");
  }
};