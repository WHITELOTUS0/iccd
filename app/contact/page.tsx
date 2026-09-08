import type { Metadata } from "next";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach ICCD at our head office in Tororo or our coordination office in Kampala.",
};

export default function ContactPage() {
  return <ContactForm />;
}
