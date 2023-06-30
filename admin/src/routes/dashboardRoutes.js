import React from "react";

const Toaster = React.lazy(() =>
  import("../views/notifications/toaster/Toaster")
);
//const Tables = React.lazy(() => import("../views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("../views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("../views/base/cards/Cards"));
const Carousels = React.lazy(() => import("../views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("../views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("../views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("../views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("../views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("../views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("../views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("../views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("../views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("../views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("../views/base/switches/Switches"));

const Tabs = React.lazy(() => import("../views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("../views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("../views/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("../views/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("../views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("../views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("../views/charts/Charts"));
const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("../views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("../views/icons/flags/Flags"));
const Brands = React.lazy(() => import("../views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("../views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("../views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("../views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("../views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("../views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("../views/widgets/Widgets"));
const Users = React.lazy(() => import("../views/users/Users"));
const UserDetail = React.lazy(() => import("../views/users/user-details"));
const EditUser = React.lazy(() => import("../views/users/edit-user"))
const AddUser = React.lazy(() => import("../views/users/add-user"))

const Avatar = React.lazy(() => import("../views/avatar/avatar-list"));  
const AvatarDetail = React.lazy(() => import("../views/avatar/avatar-detail"));
const addAvatar = React.lazy(() => import("../views/avatar/avatar-add"));

const Category = React.lazy(() => import("../views/category/category-list"));  
const CategoryDetail = React.lazy(() => import("../views/category/category-detail"));
const AddCategory = React.lazy(() => import("../views/category/category-add"));
const EditCategory = React.lazy(() => import("../views/category/category-edit"));

const Store = React.lazy(() => import("../views/store/store-list"));  
const StoreDetail = React.lazy(() => import("../views/store/store-detail"));
const AddStore = React.lazy(() => import("../views/store/store-add"));
const EditStore = React.lazy(() => import("../views/store/store-edit"));

const Event = React.lazy(() => import("../views/event/event-list"));  
const EventDetail = React.lazy(() => import("../views/event/event-detail"));
const AddEvent = React.lazy(() => import("../views/event/event-add"));
const EditEvent = React.lazy(() => import("../views/event/event-edit"));


const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },

  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
//  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },  
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/user-details", exact: true, name: "User Details", component: UserDetail }, 
  { path: "/users/edit-user", exact: true, name: "User Edit", component: EditUser },  
  { path: "/users/add-user", exact: true, name: "User Add", component: AddUser }, 
  
  { path: "/avatar", exact: true, name: "Avatar", component: Avatar },    
  { path: "/avatar/avatar-detail", exact: true, name: "Avatar Detail", component: AvatarDetail },
  { path: "/avatar/avatar-add", exact: true, name: "Avatar Detail", component: addAvatar },

  { path: "/category", exact: true, name: "Category", component: Category },    
  { path: "/category/category-detail", exact: true, name: "Category Detail", component: CategoryDetail },  
  { path: "/category/category-add", exact: true, name: "Category Add", component: AddCategory },
  { path: "/category/category-edit", exact: true, name: "Category Add", component: EditCategory },

  { path: "/store", exact: true, name: "Store", component: Store },    
  { path: "/store/store-detail", exact: true, name: "Store Detail", component: StoreDetail },
  { path: "/store/store-add", exact: true, name: "Store Detail", component: AddStore },
  { path: "/store/store-edit", exact: true, name: "Store Detail", component: EditStore },

  { path: "/event", exact: true, name: "Event", component: Event },    
  { path: "/event/event-detail", exact: true, name: "Event Detail", component: EventDetail },
  { path: "/event/event-add", exact: true, name: "Event Detail", component: AddEvent },
  { path: "/event/event-edit", exact: true, name: "Event Detail", component: EditEvent },
];

export default routes;
