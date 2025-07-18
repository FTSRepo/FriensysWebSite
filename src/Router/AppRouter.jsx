import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import ProductLayout from "../components/Product/ProductLayout";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Careers from "../components/Careers/Careers";
import PrivacyPolicy from "../Privacy/PrivacyPolicy/PrivacyPolicy";
import CancellationPolicy from "../Privacy/CancellationPolicy/cancellationPolicy";

//Product Page component
import SchoolManagement from "../components/Product/SchoolErp/SchoolManagement";
import SchoolApp from "../components/Product/SchoolApp/SchoolApp";
import Escalation from "../components/Product/EscalationManagement/EscalationManagement";
import ODSAS from "../components/Product/ODSAS/ODSAS";
import CustomerLoyalty from "../components/Product/CustomerLoyalty/CustomerLoyalty";
import Marketplace from "../components/Product/Marketplace/Marketplace";
import CollegeManagement from "../components/Product/CollegeERP/CollegeManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "privacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "cancellationPolicy",
        element: <CancellationPolicy />,
      },
      {
        path: "product",
        element: <ProductLayout />,
        children: [
          {
            path: "schoolErp",
            element: <SchoolManagement />,
          },
          {
            path: "schoolApp",
            element: <SchoolApp />,
          },
          {
            path: "escalation",
            element: <Escalation />,
          },
          {
            path: "ODSAS",
            element: <ODSAS />,
          },
          {
            path: "customerLoyalty",
            element: <CustomerLoyalty />,
          },
          {
            path: "marketplace",
            element: <Marketplace />,
          },
          {
            path: "collegeErp",
            element: <CollegeManagement />,
          },
        ],
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
