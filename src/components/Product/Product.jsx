import React from "react";
import Images from "../../common/BindImages";

const products = [
  {
    name: "SmartSchool ERP",
    description: "A complete school management system for attendance, exams, fees, and reports.",
    image: Images.GMpublic,
    demoLink: "#",
    startLink: "#",
  },
  {
    name: "ProjectHub",
    description: "Task and team management software for agile development teams.",
    image: Images.dawnPublic,
    demoLink: "#",
    startLink: "#",
  },
];

function Product() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-gray-600 mb-12">Explore our proprietary tools built to solve real business problems.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-center gap-4">
                <a href={product.demoLink} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">View Demo</a>
                <a href={product.startLink} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Get Started</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
