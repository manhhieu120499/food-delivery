import { HomePage, ContactPage, MenuPage, MobilePage, CartPage, PaymentPage, PlaceOrder } from "../pages";
import DefaultLayout from "../layouts/DefaultLayout";
import OrderTracking from "../components/admin/OrderTracking";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";

const publicRoute = [
  {
    path: "/",
    layout: DefaultLayout,
    page: HomePage,
  },
  {
    path: "/menu",
    layout: DefaultLayout,
    page: MenuPage,
  },
  {
    path: "/mobile",
    layout: DefaultLayout,
    page: MobilePage,
  },
  {
    path: "/contact",
    layout: DefaultLayout,
    page: ContactPage,
  },
  {
    path: "/cart",
    layout: DefaultLayout,
    page: CartPage,
  },
  {
    path: "/payment",
    layout: DefaultLayout,
    page: PaymentPage,
  },
  {
    path: "/myorders",
    layout: DefaultLayout,
    page: PlaceOrder,
  },
];

const privateRoute = [
  {
    path: '/admin/dashboard',
    layout: AdminLayout,
    page: Dashboard
  },
  {
    path: '/admin/orders',
    layout: AdminLayout,
    page: Dashboard
  },
   {
    path: '/admin/list',
    layout: AdminLayout,
    page: Products
  }
]

export { publicRoute, privateRoute };
