import React, { useState } from "react";

const faqs = [
  {
    question: "How do I open a Zerodha account?",
    answer: "You can open an account online by completing the KYC process on the signup page."
  },
  {
    question: "How can I reset my password?",
    answer: "Click on 'Forgot Password' on the login page and follow the instructions."
  },
  {
    question: "What are brokerage charges?",
    answer: "Zerodha charges ₹20 or 0.03% per executed order (whichever is lower)."
  },
  {
    question: "How to withdraw funds?",
    answer: "Go to Console → Funds → Withdraw and enter the amount."
  }
];

export default function SupportPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Support Center</h1>
        <p className="text-muted">How can we help you today?</p>
      </div>

      {/* Search */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search for help..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <h5>📂 Account Opening</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <h5>💰 Funds & Withdrawals</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <h5>📊 Trading & Orders</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <h5>🔐 Security & Login</h5>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <h3 className="mb-3">Frequently Asked Questions</h3>
      <div className="accordion mb-5" id="faqAccordion">
        {filteredFaqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}>
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h4 className="mb-3">Still need help? Submit a ticket</h4>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="col-12">
                <textarea className="form-control" rows="4" placeholder="Describe your issue..." required></textarea>
              </div>
              <div className="col-12 text-end">
                <button className="btn btn-primary px-4">Submit Ticket</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
