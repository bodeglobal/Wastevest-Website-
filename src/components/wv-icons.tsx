import { Icon, type IconProps } from "@chakra-ui/react";

const iconPath = "/assets/icons";

function WVIcon(fileName: string, viewBox: string, props: IconProps) {
  return (
    <Icon asChild {...props}>
      <svg viewBox={viewBox} width="1em" height="1em" focusable="false">
        <use href={`${iconPath}/${fileName}.svg`} />
      </svg>
    </Icon>
  );
}

function Asterisk(props: IconProps) {
  return WVIcon("asterisk", "0 0 30 30", props);
}
function BeerBottle(props: IconProps) {
  return WVIcon("beer-bottle", "0 0 30 30", props);
}
function Briefcase(props: IconProps) {
  return WVIcon("briefcase", "0 0 30 30", props);
}
function Buildings(props: IconProps) {
  return WVIcon("buildings", "0 0 30 30", props);
}
function Calendar(props: IconProps) {
  return WVIcon("calendar", "0 0 30 30", props);
}
function ChartLineUp(props: IconProps) {
  return WVIcon("chart-line-up", "0 0 30 30", props);
}
function ChatCenteredText(props: IconProps) {
  return WVIcon("chat-centered-text", "0 0 30 30", props);
}
function CloudSun(props: IconProps) {
  return WVIcon("cloud-sun", "0 0 30 30", props);
}
function Database(props: IconProps) {
  return WVIcon("database", "0 0 30 30", props);
}
function Devices(props: IconProps) {
  return WVIcon("devices", "0 0 30 30", props);
}
function Drop(props: IconProps) {
  return WVIcon("drop", "0 0 30 30", props);
}
function Feather(props: IconProps) {
  return WVIcon("feather", "0 0 30 30", props);
}
function GlobeHemisphereWest(props: IconProps) {
  return WVIcon("globe-hemisphere-west", "0 0 30 30", props);
}
function GlobeSimple(props: IconProps) {
  return WVIcon("globe-simple", "0 0 30 30", props);
}
function Handshake(props: IconProps) {
  return WVIcon("handshake", "0 0 30 30", props);
}
function MapPinSimpleArea(props: IconProps) {
  return WVIcon("map-pin-simple-area", "0 0 30 30", props);
}
function NuclearPlant(props: IconProps) {
  return WVIcon("nuclear-plant", "0 0 30 30", props);
}
function Ranking(props: IconProps) {
  return WVIcon("ranking", "0 0 30 30", props);
}
function Recycle(props: IconProps) {
  return WVIcon("recycle", "0 0 30 30", props);
}
function Storefront(props: IconProps) {
  return WVIcon("storefront", "0 0 30 30", props);
}
function Trash(props: IconProps) {
  return WVIcon("trash", "0 0 30 30", props);
}
function UsersThree(props: IconProps) {
  return WVIcon("users-three", "0 0 30 30", props);
}
function Vector(props: IconProps) {
  return WVIcon("vector", "0 0 29 21", props);
}
function Crosshair(props: IconProps) {
  return WVIcon("Crosshair", "0 0 150 150", props);
}
function Binoculars(props: IconProps) {
  return WVIcon("binoculars", "0 0 150 150", props);
}
function IG(props: IconProps) {
  return WVIcon("ig", "0 0 18 18", props);
}
function LinkedIn(props: IconProps) {
  return WVIcon("linkedin", "0 0 18 18", props);
}
function X(props: IconProps) {
  return WVIcon("x", "0 0 18 18", props);
}

export const WVIcons = {
  Asterisk,
  BeerBottle,
  Briefcase,
  Buildings,
  Calendar,
  ChartLineUp,
  ChatCenteredText,
  CloudSun,
  Crosshair,
  Database,
  Devices,
  Drop,
  Feather,
  GlobeHemisphereWest,
  GlobeSimple,
  Handshake,
  MapPinSimpleArea,
  NuclearPlant,
  Ranking,
  Recycle,
  Storefront,
  Trash,
  UsersThree,
  Vector,
  Binoculars,
  IG,
  LinkedIn,
  X,
};
