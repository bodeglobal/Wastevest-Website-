export type PartnershipType =
  | "general"
  | "routebeacon"
  | "service"
  | "school"
  | "business";

const partnershipMessages: Record<
  PartnershipType,
  { subject: string; body: string }
> = {
  general: {
    subject: "WasteVest Partnership Enquiry",
    body: "Hello WasteVest team,\n\nI would like to discuss a partnership with WasteVest.\n\nOrganisation:\nName:\nPartnership interest:\n\nThank you.",
  },
  routebeacon: {
    subject: "RouteBeacon Partnership Enquiry",
    body: "Hello WasteVest team,\n\nI would like to discuss a partnership with WasteVest through RouteBeacon.\n\nOrganisation:\nName:\nPartnership interest:\n\nThank you.",
  },
  service: {
    subject: "RouteBeacon Service Partner Enquiry",
    body: "Hello WasteVest team,\n\nI would like to become a RouteBeacon service partner.\n\nOrganisation:\nName:\nService area:\nServices offered:\n\nThank you.",
  },
  school: {
    subject: "WasteVest School Enquiry",
    body: "Hello WasteVest team,\n\nI would like to bring climate literacy into our classroom through WasteVest's teacher toolkit.\n\nSchool:\nName:\nGrade levels:\n\nThank you.",
  },
  business: {
    subject: "RouteBeacon Business Onboarding Enquiry",
    body: "Hello WasteVest team,\n\nI would like to onboard our team onto RouteBeacon.\n\nOrganisation:\nName:\nTeam size:\n\nThank you.",
  },
};

export function getPartnershipMailto(type: PartnershipType = "general") {
  const { subject, body } = partnershipMessages[type];

  return encodeURI(
    `mailto:hello@wastevest.com?subject=${subject}&body=${body}`,
  );
}
