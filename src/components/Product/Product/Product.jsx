import React from "react";
import { Link } from "react-router-dom";

// Replace these URLs with your actual image paths or import from WebsiteImages
const productList = [
  {
    title: "School ERP",
    description: "Complete administrative and academic control in one platform.",
    image: "https://via.placeholder.com/300x200?text=School+ERP",
    path: "/product/schoolErp",
  },
  {
    title: "School Mobile App",
    description: "Seamless parent-teacher communication and attendance tracking.",
    image: "https://via.placeholder.com/300x200?text=Mobile+App",
    path: "/product/schoolApp",
  },
  {
    title: "Escalation Management",
    description: "Manage and resolve issues efficiently with smart workflows.",
    image: "https://via.placeholder.com/300x200?text=Escalation",
    path: "/product/escalation",
  },
  {
    title: "OD-SAS",
    description: "Smart Attendance System integrated with online leave requests.",
    image: "https://via.placeholder.com/300x200?text=OD-SAS",
    path: "/product/ODSAS",
  },
  {
    title: "Customer Loyalty Program",
    description: "Boost engagement and retain parents/students with rewards.",
    image: "https://via.placeholder.com/300x200?text=Customer+Loyalty",
    path: "/product/customerLoyalty",
  },
   {
    title: "Marketplace",
    description: "Boost engagement and retain parents/students with rewards.",
    image: "https://via.placeholder.com/300x200?text=Customer+Loyalty",
    path: "/product/marketplace",
  },
];

function ProductLandingPage() {
  return (
    <section className="bg-gradient-to-br from-white via-slate-100 to-gray-200 py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          Our Product Offerings
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {productList.map((product, index) => (
            <Link to={product.path} key={index} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductLandingPage;
