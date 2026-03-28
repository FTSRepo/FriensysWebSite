import React from "react";
import { WebsiteImages } from "../../../common/BindImages";
import FormPage from "../../../common/FormPage";
import WhatsAppButton from "../../../common/WhatsApp/WhatsAppButton";

const products = [
  {
    name: "School ERP",
    subtitle: "School ERP",
    description:
      "All-in-one school management system for admin, teachers, and parents. Manage student data, attendance, exams, reports, finances, and HR all in one platform. Designed to make school operations simple, automated, and efficient.",
    image: WebsiteImages.ProductSchoolErp,
    link: "/product/schoolErp",
  },
  {
    name: "School App",
    subtitle: "School App",
    description:
      "Mobile-first app for seamless student-parent-teacher communication.Designed for mobile-first environments, it facilitates instant communication between parents, teachers, and students, including notifications, assignments, and performance tracking.",
    image: WebsiteImages.ConsultingPage,
    link: "/product/schoolApp",
  },
  {
    name: "Escalation System",
    subtitle: "Escalation System",
    description:
      "Automate issue tracking and resolution workflows for institutions.Efficiently manage complaints, service requests, and internal issues with automated workflows, ensuring accountability and timely resolution.",
    image: WebsiteImages.EscalationDashboardImage,
    link: "/product/escalation",
  },
  {
    name: "OD-SAS",
    subtitle: "OD-SAS",
    description:
      "Smart attendance and scheduling system powered by IoT. A smart IoT-based system for managing staff attendance, real-time scheduling, and institutional access — ideal for modern campuses.",
    image: WebsiteImages.ODSASDashboard,
    link: "/product/ODSAS",
  },
  {
    name: "Customer Loyalty",
    subtitle: "Customer Loyalty",
    description:
      "Boost retention with personalized reward programs and analytics. Create customized loyalty campaigns, track engagement metrics, and reward repeat customers — ideal for coaching centers, retail, or educational services.",
    image: WebsiteImages.LoyaltyDashboard,
    link: "/product/customerLoyalty",
  },
  {
    name: "Marketplace",
    subtitle: "Marketplace",
    description:
      "A unified digital marketplace for educational tools and services. Bring together educational vendors, content providers, and institutions into a unified ecosystem where services and tools can be discovered and acquired seamlessly.",
    image: WebsiteImages.MarketplaceDashboard,
    link: "/product/marketplace",
  },
  {
    name: "Education CRM",
    subtitle: "Education CRM",
    description:
      "Advanced CRM tailored for college admissions and student lifecycle. Streamline admissions, manage leads, track follow-ups, and improve conversions. Perfect for higher education institutions and training institutes.",
    image: WebsiteImages.EducationalCRMAdmissionCordinator,
    link: "/product/collegeErp",
  },
];

function ProductLanding() {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-4">
          Our Product
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          At Friensys, we blend innovation with engineering excellence to
          deliver enterprise-grade software, strategic IT consulting, and
          top-tier talent — empowering your digital transformation journey.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((prod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl flex flex-col border border-blue-100 ring-2 ring-green-400 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
            >
              {/* Image */}
              <img
                src={prod.image}
                alt={prod.subtitle}
                className="h-80 w-full object-contain rounded-t-2xl bg-white px-6 pt-6"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="text-blue-600 font-bold mb-2 text-sm uppercase tracking-wide">
                  {prod.subtitle}
                </div>
                <h3 className="font-semibold text-2xl mb-2 text-gray-800">
                  {prod.name}
                </h3>
                <p className="text-gray-600 text-base flex-1 leading-relaxed">
                  {prod.description}
                </p>
                <a
                  href={prod.link}
                  className="mt-6 inline-block px-5 py-2 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition self-start"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <FormPage />
      </section>

      <section className="bg-white py-20 px-6 md:px-12 lg:px-28 text-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Headings */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-green-700">
                Unlock Innovation and Excellence:
              </span>{" "}
              Discover Our Complete Suite of Tech Solutions!
            </h2>
            <p className="text-xl text-gray-800">
              From Education ERP to CRM, LMS, Healthcare, Retail, and Staffing —
              We Power Digital Success Across Industries.
            </p>
          </div>

          {/* Right: Description */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
              At FRIENSYS, each solution is built with cutting-edge technology
              and user-centric design, tailored to empower schools, businesses,
              and organizations with smart digital tools. Our products are
              crafted by experts and refined through real-world implementation
              across diverse sectors.
            </p>
            <p>
              Whether you're streamlining education management, optimizing sales
              funnels, automating staffing, or delivering online learning — we
              offer flexible and scalable platforms to meet every modern
              operational challenge with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left - Image */}
          <div>
            <img
              src={WebsiteImages.friensysImage}
              alt="Friensys Product Suite"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Right - Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              <span className="text-green-600">Unify & Elevate:</span> The
              Friensys Product Ecosystem
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              From smart administration to engagement tools, Friensys offers a
              powerful ecosystem of digital solutions tailored to every
              stakeholder — admins, teachers, students, and parents. Our
              platform is modular, scalable, and cloud-powered.
            </p>
            <p className="text-gray-600 text-base">
              With 24/7 support, dedicated onboarding, and a proven track record
              across schools, colleges, and educational firms, Friensys ensures
              seamless digital transformation for your institution.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}

export default ProductLanding;
