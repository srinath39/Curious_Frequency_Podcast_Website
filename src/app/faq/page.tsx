import type { Metadata } from "next";
import { faqItems } from "@/content/podcast";

export const metadata: Metadata = {
  title: "FAQ",
  description: "A few quick answers about Curious Frequency and this episode archive.",
};

export default function FaqPage() {
  return (
    <div className="page-width faq-page">
      <div className="faq-layout">
        <header className="faq-heading">
          <p className="page-kicker">The small print</p>
          <h1>
            Good
            <br />
            <em>questions.</em>
          </h1>
          <p>A few things you might be wondering about the show.</p>
          <p className="faq-count">{String(faqItems.length).padStart(2, "0")} answers, give or take</p>
        </header>

        <section aria-label="Frequently asked questions" className="faq-list">
          {faqItems.map((item, index) => (
            <article className="faq-item" key={item.id}>
              <h2>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.question}
              </h2>
              <p>{item.answer}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
