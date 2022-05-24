import { HeadSwiper } from "../../../../types/swipert";
import icon_cart_svg from "../../../../assets/images/icons/premium-service/icon_cart.svg";
import icon_bluet_svg from "../../../../assets/images/icons/premium-service/icon_bluet.svg";
import icon_home_svg from "../../../../assets/images/icons/premium-service/icon_home.svg";
import icon_refri_svg from "../../../../assets/images/icons/premium-service/icon_refri.svg";
import icon_refriblue_svg from "../../../../assets/images/icons/premium-service/icon_refriblue.svg";
import icon_rack_svg from "../../../../assets/images/icons/premium-service/icon_rack.svg";
import icon_checklist_svg from "../../../../assets/images/icons/premium-service/icon_checklist.svg";

import {
  rf_step_1,
  rf_step_2,
  rf_step_3,
  rf_step_4,
  rf_step_1_mobile,
  rf_step_2_mobile,
  rf_step_3_mobile,
  rf_step_4_mobile,
  tv_step_1,
  tv_step_2,
  tv_step_3,
  tv_step_4,
  tv_step_1_mobile,
  tv_step_2_mobile,
  tv_step_3_mobile,
  tv_step_4_mobile,
  ws_step_1,
  ws_step_2,
  ws_step_3,
  ws_step_1_mobile,
  ws_step_2_mobile,
  ws_step_3_mobile,
  ck_step_1,
  ck_step_1_mobile,
  ck_step_2,
  ck_step_2_mobile,
} from "../../../../assets/images/premium-service";

export const washElements: HeadSwiper[] = [
  {
    image: ws_step_1,
    image_mobile: ws_step_1_mobile,
    title: "THE FRAME",
    category: "THE FRAME",
    alt: "",
    icon: icon_cart_svg,
  },
  {
    image: ws_step_2,
    image_mobile: ws_step_2_mobile,
    title: "QLED",
    category: "QLED",
    alt: "",
    icon: icon_home_svg,
  },
  {
    image: ws_step_3,
    image_mobile: ws_step_3_mobile,
    title: "televisores",
    category: "NEO QLED",
    alt: "",
    icon: icon_checklist_svg,
  },
];

export const cookElements: HeadSwiper[] = [
  {
    image: ck_step_1,
    image_mobile: ck_step_1_mobile,
    title: "QLED",
    category: "QLED",
    alt: "",
    icon: icon_cart_svg,
  },
  {
    image: ck_step_2,
    image_mobile: ck_step_2_mobile,
    title: "televisores",
    category: "NEO QLED",
    alt: "",
    icon: icon_checklist_svg,
  },
];
export const refriElements: HeadSwiper[] = [
  {
    image: rf_step_1,
    image_mobile: rf_step_1_mobile,
    title: "THE FRAME",
    category: "THE FRAME",
    alt: "",
    icon: icon_cart_svg,
  },
  {
    image: rf_step_2,
    image_mobile: rf_step_2_mobile,
    title: "televisores",
    category: "NEO QLED",
    alt: "",
    icon: icon_refri_svg,
  },
  {
    image: rf_step_3,
    image_mobile: rf_step_3_mobile,
    title: "QLED",
    category: "QLED",
    alt: "",
    icon: icon_refriblue_svg,
  },
  {
    image: rf_step_4,
    image_mobile: rf_step_4_mobile,
    title: "televisores",
    category: "NEO QLED",
    alt: "",
    icon: icon_checklist_svg,
  },
];

export const TvElements: HeadSwiper[] = [
  {
    image: tv_step_1,
    image_mobile: tv_step_1_mobile,
    title: "Samsung Qled Q80 4K 55",
    category: "TV",
    alt: "primer paso",
    icon: icon_bluet_svg,
  },
  {
    image: tv_step_2,
    image_mobile: tv_step_2_mobile,
    title: "QLED",
    category: "QLED",
    alt: "segundo paso",
    icon: icon_cart_svg,
  },
  {
    image: tv_step_3,
    image_mobile: tv_step_3_mobile,
    title: "televisores",
    category: "NEO QLED",
    alt: "tercer paso",
    icon: icon_home_svg,
  },
  {
    image: tv_step_4,
    image_mobile: tv_step_4_mobile,
    title: "televisores",
    category: "AAA QLED",
    alt: "cuarto paso",
    icon: icon_rack_svg,
  },
];
