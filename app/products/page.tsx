import React from 'react'
import Image from 'next/image'

const productsPage = () => {
  return (
    <main className="p-6 bg-gradient-to-br from-teal-700 to-gray-300 min-h-screen text-gray-900">
    <section className="mt-12">
    <h2 className="text-3xl font-bold text-white text-center drop-shadow-lg">Our Products</h2>
    <p className="text-gray-200 text-center mt-3"></p>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      
                    {[
                        { name: "Paracetamol", price: "Rs. 100", image: "/images/paracetamol.jpg" },
                        { name: "Sinex", price: "Rs. 80", image: "/images/sinex.jpg" },
                        { name: "Honitus", price: "Rs. 150", image: "/images/honitus.jpg" },
                        { name: "Aspirin", price: "Rs. 120", image: "/images/aspirin.jpg" },    
                        { name: "Ibuprofen", price: "Rs. 90", image: "/images/ibuprofen.jpg" },
                        { name: "Cetirizine", price: "Rs. 70", image: "/images/cetrizine.jpg" },
                        { name: "Amoxicillin", price: "Rs. 250", image: "/images/amoxicillin.jpg" },
                        { name: "Cough Syrup", price: "Rs. 130", image: "/images/cough-syrup.jpg" },
                        { name: "Vitamin C", price: "Rs. 180", image: "/images/vitamin-c.jpg" },
                        { name: "Omeprazole", price: "Rs. 200", image: "/images/omeprazole.jpg" }
                        ].map((products, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center transform transition hover:scale-105">
                            <div className="relative w-full h-40 mb-4">
                                <Image src = {products.image} alt={products.name} layout="fill" objectFit="cover" className="rounded-md"/></div> 
                            <h3 className="text-xl font-semibold text-teal-700">{products.name}</h3>
                            <p className="text-gray-600">{products.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default productsPage

