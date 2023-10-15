import Dashboard from "views/Dashboard.js";
import RideManagement from "views/RideManagement.js";
import CustomerManagement from "views/CustomerManagement";
import PriceManagement from "views/PriceManagement.js";
import UserProfile from "views/UserProfile.js";

// Define a mapping of text to icons
const iconMapping = {
  "Dashboard": "tim-icons icon-chart-bar-32",
  "Rides Mangement": "tim-icons icon-bus-front-12",
  "Customer Management": "tim-icons icon-single-02",
  "Pricing Management": "tim-icons icon-coins",
  "Financial Reports": "tim-icons icon-book-bookmark",
};

// Define the routes with dynamically assigned icons
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: iconMapping["Dashboard"],
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/RidesManagement",
    name: "Rides Mangement",
    icon: iconMapping["Rides Mangement"],
    component: <RideManagement />,
    layout: "/admin",
  },
  {
    path: "/CustomerManagement",
    name: "Customer Management",
    icon: iconMapping["Customer Management"],
    component: <CustomerManagement />,
    layout: "/admin",
  },
  {
    path: "/PriceManagement",
    name: "Pricing Management",
    icon: iconMapping["Pricing Management"],
    component: <PriceManagement />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Financial Reports",
    icon: iconMapping["Financial Reports"],
    component: <UserProfile />,
    layout: "/admin",
  },
];

export default routes;
