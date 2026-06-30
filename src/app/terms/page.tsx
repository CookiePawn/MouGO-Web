import type { Metadata } from "next";
import { LegalPage } from "../legal-page";
import { termsSections } from "../legal-content";

export const metadata: Metadata = { title: "이용약관" };
export default function TermsPage() {
  return <LegalPage title="이용약관" sections={termsSections} />;
}
