/** DATA */

import { WVIcons } from "@/components/wv-icons";
import { IconProps } from "@chakra-ui/react";
import { JSX, ReactComponentElement } from "react";

export const ImpactData: {
  label: string;
  value: number;
  unit?: string;
  plus?: boolean;
  icon: (props: IconProps) => JSX.Element;
}[] = [
  {
    value: 40,
    label: "Beneficiaries",
    icon: WVIcons.UsersThree,
  },
  {
    value: 1240,
    label: "Waste diverted",
    unit: "t",
    icon: WVIcons.Trash,
  },
  {
    value: 240,
    label: "Emissions reduced",
    plus: true,
    icon: WVIcons.NuclearPlant,
  },
  {
    value: 500,
    label: "Communities",
    plus: true,
    icon: WVIcons.GlobeSimple,
  },
  {
    icon: WVIcons.Handshake,
    value: 6,
    label: "Partners",
  },
];
