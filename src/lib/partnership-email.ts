export type PartnershipType =
  | "general"
  | "routebeacon"
  | "service"
  | "volunteer"
  | "school"
  | "business"
  | "custom-quote"
  | "circular-economy"
  | "community-engagement";

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
  volunteer: {
    subject: "WasteVest Volunteer Enquiry",
    body: "Hello WasteVest team,\n\nI would like to volunteer with WasteVest and contribute to your work. I am interested in exploring opportunities such as community cleanups, climate education and school visits, waste sorting and recycling activities, community outreach and events, research and storytelling, or contributing my professional skills.\n\nName:\nLocation:\nAvailability:\nAreas of interest or skills:\n\nThank you.",
  },
  school: {
    subject: "WasteVest School Enquiry",
    body: "Hello WasteVest team,\n\nI would like to bring climate literacy into our classroom through WasteVest's teacher toolkit.\n\nSchool:\nName:\nGrade levels:\n\nThank you.",
  },
  business: {
    subject: "RouteBeacon Business Onboarding Enquiry",
    body: "Hello WasteVest team,\n\nI would like to onboard our team onto RouteBeacon.\n\nOrganisation:\nName:\nTeam size:\n\nThank you.",
  },
  "circular-economy": {
    subject: "Circular Economy Solutions Enquiry",
    body: "Hello WasteVest team,\n\nI would like to discuss how WasteVest can support our organisation with circular economy solutions.\n\nOrganisation:\nName:\nCurrent waste or resource challenge:\nPartnership interest:\n\nThank you.",
  },
  "community-engagement": {
    subject: "Community Engagement Solutions Enquiry",
    body: "Hello WasteVest team,\n\nI would like to discuss a community engagement project with WasteVest.\n\nOrganisation or community:\nName:\nLocation:\nEngagement goals:\n\nThank you.",
  },
  "custom-quote": {
    subject: "Request for a Custom Quote",
    body: "Hello WasteVest team,\n\nI would like to schedule a meeting to discuss a custom quote for carbon literacy training.\n\nOrganisation:\nName:\nPreferred meeting time:\nTraining requirements:\n\nThank you.",
  },
};

export function getPartnershipMailto(type: PartnershipType = "general") {
  const { subject, body } = partnershipMessages[type];

  return encodeURI(
    `mailto:hello@wastevest.com?subject=${subject}&body=${body}`,
  );
}
