import React from 'react'

function Product() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-600">
        Our Product Offerings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* You can map this if needed */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">School ERP</h2>
          <p className="text-sm text-gray-600">
            Centralized academic & administrative control.
          </p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  )
}

export default Product
