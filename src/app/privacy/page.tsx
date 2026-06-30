import type { Metadata } from "next";
import { LegalPage } from "../legal-page";
import { privacySections } from "../legal-content";

export const metadata: Metadata = { title: "개인정보처리방침" };
export default function PrivacyPage() {
  return <LegalPage title="개인정보처리방침" sections={privacySections} />;
}
