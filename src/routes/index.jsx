import { HomePage, ContactPage, MenuPage, MobilePage, CartPage, PaymentPage } from "../pages";
import DefaultLayout from "../layouts/DefaultLayout";

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
];

export { publicRoute };
