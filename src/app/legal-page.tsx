import Link from "next/link";
import { LegalSection, effectiveDate } from "./legal-content";

export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <main className="legal-shell">
      <header className="legal-header">
        <Link href="/" className="brand">모으고</Link>
        <Link href="/" className="legal-header__back">← 홈으로</Link>
      </header>
      <article className="legal-document">
        <span className="legal-document__eyebrow">Mougo Legal</span>
        <h1>{title}</h1>
        <p className="legal-document__date">시행일: {effectiveDate}</p>
        {sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </article>
    </main>
  );
}
