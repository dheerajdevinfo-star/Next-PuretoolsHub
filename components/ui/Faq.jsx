"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";


export default function Faq({ title, description, faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

 

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}

                <span className="faq-icon">
                  {activeIndex === index ? <ChevronUp/> : <ChevronDown/>}
                </span>
              </button>

              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}