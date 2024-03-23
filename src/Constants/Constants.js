import Analytics from "../Screens/Analytics";
import Appearance from "../Screens/Appearance";
import Audience from "../Screens/Audience";
import Discounts from "../Screens/Discounts";
import Home from "../Screens/Home";
import Marketing from "../Screens/Marketing";
import Orders from "../Screens/Orders";
import Payments from "../Screens/Payments/Payments";
import Plugins from "../Screens/Plugins";
import Tools from "../Screens/Tools";

export const RoutesValues = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/order",
    component: Orders,
  },
  {
    path: "/marketing",
    component: Marketing,
  },
  {
    path: "/analytic",
    component: Analytics,
  },
  {
    path: "/payment",
    component: Payments,
  },
  {
    path: "/tool",
    component: Tools,
  },
  {
    path: "/discount",
    component: Discounts,
  },
  {
    path: "/audience",
    component: Audience,
  },
  {
    path: "/appearance",
    component: Appearance,
  },
  {
    path: "/plugin",
    component: Plugins,
  },
];

export const SelectFilter = [
  {
    label: "Today",
    value: "Today",
  },
  {
    label: "Yesterday",
    value: "Yesterday",
  },
  {
    label: "This Week",
    value: "This Week",
  },
  {
    label: "This Month",
    value: "This Month",
  },
  {
    label: "This Year",
    value: "This Year",
  },
  {
    label: "Last Year",
    value: "Last Year",
  },
  {
    label: "All",
    value: "All",
  },
];

export const dashboardData = {
  orders: "231",

  amount: "23,92,312.19",
};
