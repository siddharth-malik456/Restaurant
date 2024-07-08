import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ClerkProvider } from "@clerk/clerk-react";
import CreateCustomer from "./components/CreateCustomer";
import CustomerList from "./components/CustomerList";
import Nav from "./components/Nav";
import EditCustomer from "./components/EditCustomer";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import "./App.css";

const PUBLISHABLE_KEY =
  "pk_test_ZW1pbmVudC1yYW0tOTUuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateCustomer />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/create-customer",
    element: <CreateCustomer />,
  },
  {
    path: "/customer-list",
    element: <CustomerList />,
  },
  {
    path: "/edit-customer/:id",
    element: <EditCustomer />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </div>
);

reportWebVitals();
