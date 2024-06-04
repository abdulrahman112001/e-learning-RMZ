import { BiDetail, BiHome, BiUser } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";

import { IconType } from "react-icons/lib";

export type MenuItem_TP = {
  id: string;
  icon: IconType;
  label: string;
  link?: string;
  heading?: string;
  items?: {
    id: string;
    icon: IconType;
    label: string;
    link?: string;
    items?: MenuItem_TP[];
  }[];
};

export const SideBarItems: MenuItem_TP[] = [
  {
    id: crypto.randomUUID(),
    label: `${"Home"}`,
    icon: BiHome,
    link: "/dashboard",
  },
  {
    id: crypto.randomUUID(),
    label: `${"instructors"}`,
    icon: FaRegBuilding,
    link: "/dashboard/instructors",
  },
  {
    id: crypto.randomUUID(),
    label: `${"Clients"}`,
    icon: FaRegBuilding,
    link: "/dashboard/client",
  },
  {
    id: crypto.randomUUID(),
    label: `${"Admins"}`,
    icon: FaRegBuilding,
    link: "/dashboard/admin",
  },
  {
    id: crypto.randomUUID(),
    label: `${"Staff"}`,
    icon: FaRegBuilding,
    link: "/dashboard/staff",
  },
  {
    id: crypto.randomUUID(),
    label: `${"Institute"}`,
    icon: FaRegBuilding,
    link: "/dashboard/institute",
  },
  {
    id: crypto.randomUUID(),
    label: `${"Category"}`,
    icon: FaRegBuilding,
    link: "/dashboard/category",
  },
  {
    id: crypto.randomUUID(),
    label: `${"course"}`,
    icon: FaRegBuilding,
    link: "/dashboard/course",
  },
  {
    id: crypto.randomUUID(),
    label: `${"Lesson"}`,
    icon: FaRegBuilding,
    link: "/dashboard/lesson",
  },
  // {
  //   id: crypto.randomUUID(),
  //   label: `${"Cluster"}`,
  //   icon: FaRegBuilding,
  //   items: [
  //     {
  //       id: crypto.randomUUID(),
  //       label: `${"Srta City Cluster"}`,
  //       icon: FaRegBuilding,
  //       link: "/dashboard/users",
  //     },
  //   ],
  // },
];
