export type PartnershipType = "general" | "routebeacon" | "service";

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
};

export function getPartnershipMailto(type: PartnershipType = "general") {
  const { subject, body } = partnershipMessages[type];

  return `mailto:hello@wastevest.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
