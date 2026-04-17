import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Conference BG — call, email or write to us. We provide professional technical support for events in Sofia, Bulgaria.",
  openGraph: {
    title: "Contact | Conference BG",
    description: "Contact Conference BG — call, email or write to us. We provide professional technical support for events in Sofia, Bulgaria.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
