import { Text } from "@chakra-ui/react";
import LegalDocument from "./legal-document";

export default function TermsPage() {
  return (
    <LegalDocument
      label="Our Terms"
      title="Terms And Conditions"
      intro={
        <>
          <Text>By accessing or using WasteVest, you agree to these Terms &amp; Conditions.</Text>
          <Text mt={5}>
            WasteVest provides technology-enabled services that may include recycling requests,
            waste collection, rewards, digital wallet services, and connections to recycling and
            waste-management partners.
          </Text>
        </>
      }
      sections={[
        {
          title: "Using WasteVest",
          content: (
            <>
              <Text>Users are responsible for providing accurate, complete, and up-to-date information and for using the platform only for legitimate and lawful purposes.</Text>
              <Text mt={5}>Recyclable materials must be accurately represented and prepared in accordance with requirements communicated by WasteVest or its collection partners.</Text>
              <Text mt={5}>Collection availability, pricing, rewards, acceptance of materials, and other service conditions may vary depending on factors including location, material type, quality, quantity, and operational conditions.</Text>
            </>
          ),
        },
        {
          title: "Payments & Wallet Services",
          content: (
            <>
              <Text>Where payments, wallet services, or other financial services are provided through third-party providers, their applicable terms and conditions may also apply.</Text>
              <Text mt={5}>WasteVest is not responsible for services directed by third-party payment or financial-service providers, except where otherwise required by applicable law.</Text>
            </>
          ),
        },
        {
          title: "Account Restrictions",
          content: <Text>WasteVest may suspend, restrict, or terminate accounts involved in fraud, misuse, false transactions, unlawful activity, or behaviour that compromises the security, integrity, or proper operation of the platform or affects other users.</Text>,
        },
        {
          title: "Changes to These Terms",
          content: (
            <>
              <Text>As WasteVest evolves, we may update these Terms &amp; Conditions from time to time. Where appropriate, we will provide notice of material changes.</Text>
              <Text mt={5}>Continued use of WasteVest after updated terms become effective constitutes acceptance of the revised terms.</Text>
            </>
          ),
        },
      ]}
      contactText="If you have questions about these Terms & Conditions, contact:"
    />
  );
}