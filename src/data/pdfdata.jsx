// src/data/pdfdata.jsx
export const pdfs = [
  {
    id: 1,
    title: "Basic English Grammar",
    description: "Complete guide to English grammar for beginners. Learn parts of speech, tenses, and sentence structure.",
    category: "Grammar",
    free: true,
    pdfUrl: "/pdffile/grfammar.book.pddfile",  // Note: path is /pddfile not /public/pddfile
    image: null, // Add image path if you have
    price: 0
  },
  {
    id: 2,
    title: "Advanced Speaking Course",
    description: "Master English conversation with advanced techniques, idioms, and phrasal verbs.",
    category: "Speaking",
    free: false,
    price: 499,
    originalPrice: 999,
    pdfUrl: "/pddfile/grammar.book.pddfile",
    image: null
  },
  {
    id: 3,
    title: "Vocabulary Builder",
    description: "5000+ essential words with meanings, examples, and exercises.",
    category: "Vocabulary",
    free: false,
    price: 299,
    originalPrice: 599,
    pdfUrl: "/pddfile/vocabulary.pdf",
    image: null
  },
//   {
//     id: 4,
//     title: "Daily English Conversation",
//     description: "100+ real-life conversation scenarios with audio practice.",
//     category: "Speaking",
//     free: true,
//     pdfUrl: "/pddfile/conversation.pdf",
//     image: null,
//     price: 0
//   },
//   {
//     id: 5,
//     title: "Business English",
//     description: "Professional English for emails, meetings, and presentations.",
//     category: "Business",
//     free: false,
//     price: 399,
//     originalPrice: 799,
//     pdfUrl: "/pddfile/business-english.pdf",
//     image: null
//   },
//   {
//     id: 6,
//     title: "IELTS Preparation",
//     description: "Complete guide for IELTS exam with practice tests and tips.",
//     category: "Exam Prep",
//     free: false,
//     price: 599,
//     originalPrice: 1199,
//     pdfUrl: "/pddfile/ielts.pdf",
//     image: null
//   }
];