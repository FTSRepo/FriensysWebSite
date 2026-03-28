import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Careers from "../components/Careers/Careers";
import PrivacyPolicy from "../Privacy/PrivacyPolicy/PrivacyPolicy";
import CancellationPolicy from "../Privacy/CancellationPolicy/cancellationPolicy";
import ComingSoon from "../common/UnderDevelopment/ComingSoon";

//Product Page component
import ProductLayout from "../components/Product/ProductLayout";
import SchoolManagement from "../components/Product/SchoolErp/SchoolManagement";
import SchoolApp from "../components/Product/SchoolApp/SchoolApp";
import Escalation from "../components/Product/EscalationManagement/EscalationManagement";
import ODSAS from "../components/Product/ODSAS/ODSAS";
import CustomerLoyalty from "../components/Product/CustomerLoyalty/CustomerLoyalty";
import Marketplace from "../components/Product/Marketplace/Marketplace";
import CollegeManagement from "../components/Product/CollegeERP/CollegeManagement";

// Services Page Import
import ServicesLayout from "../components/Services/ServicesLayout";
import Services from "../components/Services/Services/Services";
import CloudSolution from "../components/Services/CloudSolution/CloudSolution";
import ItConsulting from "../components/Services/ItConsulting/ItConsulting";
import SoftwareDevelopment from "../components/Services/SoftwareDevelopment/SoftwareDevelopment";
import SoftwareProduct from "../components/Services/SoftwareProducts/SoftwareProduct";
import ProductLanding from "../components/Product/ProductLanding/ProductLanding";
import ApplyForm from "../components/Careers/form/ApplyForm";

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
        element: <ServicesLayout />,
        children: [
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "cloudSolutions",
            element: <CloudSolution />,
          },
          {
            path: "itConsulting",
            element: <ItConsulting />,
          },
          {
            path: "softwareDevelopment",
            element: <SoftwareDevelopment />,
          },
          {
            path: "softwareProduct",
            element: <SoftwareProduct />,
          },
        ],
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
            index: true, 
            element: <ProductLanding />,
          },
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
      {
        path: "underDevelopment",
        element: <ComingSoon />,
      },
      {
        path: "apply",
        element: <ApplyForm />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
