import { createBrowserRouter } from "react-router-dom";
import SignInForm from "../components/signInForm/SignInForm";
import Registration from "../components/registration/Registration";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SignInForm />,
    },
    {
      path: "registration",
      element: <Registration />,
    },
  ],
  { basename: "/" }
);

export default router;
