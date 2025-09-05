// Centralized route definitions for the app
import HomePage from "./pages/HomePage";
import ProviderPage from "./pages/ProviderPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    label: "Home", // can be used for nav
  },
  {
    path: "/provider/:id",
    element: <ProviderPage />,
    label: "Provider Details",
  },
  {
    path: "/book/:id",
    element: <BookingPage />,
    label: "Booking",
  },
  {
    path: "/login",
    element: <LoginPage />,
    label: "Login",
  },
];

export default routes;
