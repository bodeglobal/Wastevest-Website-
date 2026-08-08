import { Text, Box } from "@chakra-ui/react";
import LegalDocument from "./legal-document";

export default function PrivacyPage() {
  return (
    <LegalDocument
      label="Our Privacy"
      title="Privacy Policy"
      intro={
        <>
          <Text>Your data should work for you, not against you.</Text>
          <Text mt={5}>
            WasteVest respects your privacy and is committed to handling your
            personal information responsibly.
          </Text>
          <Text mt={5}>
            We collect only the information reasonably necessary to provide,
            operate, secure, and improve our services. This may include your
            name, contact details, location information, transaction details,
            recycling activity, and other information you voluntarily provide
            when using our platform.
          </Text>
        </>
      }
      sections={[
        {
          title: "How We Use Your Information",
          content: (
            <>
              <Text>We may use your information to:</Text>
              <Box as="ul" mt={4} ps={5} spaceY={3}>
                {[
                  "Process recycling and waste collection requests",
                  "Manage your WasteVest account and wallet",
                  "Communicate with you about our services",
                  "Improve our products and user experience",
                  "Maintain platform security and prevent fraud or misuse",
                  "Comply with applicable legal and regulatory requirements",
                ].map((item) => (
                  <Text as="li" key={item}>
                    {item}
                  </Text>
                ))}
              </Box>
              <Text mt={5}>We do not sell your personal information.</Text>
            </>
          ),
        },
        {
          title: "Information Sharing and Security",
          content: (
            <>
              <Text>
                Where we work with service providers, payment providers,
                technology providers, collection partners, or other third
                parties, we may share relevant information only where reasonably
                necessary to provide the requested service, operate the
                platform, or comply with applicable legal obligations.
              </Text>
              <Text mt={5}>
                We take reasonable technical and organisational measures to
                protect your information. However, no digital system or method
                of transmission can guarantee absolute security.
              </Text>
              <Text mt={5}>
                Your information will be handled in accordance with applicable
                Nigerian data-protection requirements.
              </Text>
            </>
          ),
        },
      ]}
      contactText="For privacy questions, requests, or concerns, contact:"
    />
  );
}
