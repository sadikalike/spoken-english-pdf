// src/components/RazorpayButton.jsx
"use client";

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
      alert("Failed to load payment gateway. Please check your internet connection.");
      return;
    }

    // For free PDFs, directly download
    if (pdf.free) {
      window.open(pdf.pdfUrl, '_blank');
      return;
    }

    const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_SMd3bQBiK104zx";

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: pdf.price * 100,
      currency: "INR",
      name: "Spoken English Store",
      description: pdf.title,
      handler: function (response) {
        console.log("Payment success:", response);
        
        // 🔴 IMPORTANT: ಇಲ್ಲಿ ನೇರವಾಗಿ download page ಗೆ redirect
        // landing page ಗೆ ಹೋಗೋದಿಲ್ಲ
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
      }
    };

    const paymentObject = new window.Razorpay(options);
    
    paymentObject.on('payment.failed', function (response) {
      alert("Payment failed: " + response.error.description);
    });

    paymentObject.open();
    
  } catch (error) {
    console.error("Razorpay Error:", error);
    alert("Something went wrong. Please try again.");
  }
};