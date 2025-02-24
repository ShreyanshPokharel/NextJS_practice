import Image from "next/image";
import Link from "next/link";
import ProductCard from "./Components/ProductCard";

export default function Home() {
  return (
    <main className="p-6 bg-gradient-to-br from-teal-700 to-gray-300 min-h-screen text-gray-900">

    
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">Welcome to Medi-Walk</h1>
        <p className="text-lg text-gray-200 mt-3">
          Your one-stop solution for high-quality medications and healthcare products.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/users" className="p-4 bg-white text-teal-700 text-xl rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            View Our Members
          </Link>
          <Link href="/products" className="p-4 bg-white text-teal-700 text-xl rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            View Products
          </Link>
        </div>
      </section>

  
      <section className="mt-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-teal-700">About Medi-Walk</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          At Medi-Walk, we are dedicated to providing high-quality, affordable, and accessible
          medications. Our mission is to improve global healthcare by offering the best pharmaceutical products.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-teal-700">Our Mission</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          Medi-Walk strives to bridge the gap between innovation and healthcare needs, ensuring
          every patient has access to essential medicines.
        </p>
      </section>

      {/* Meet the Experts */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-white text-center drop-shadow-lg">Meet Our Experts</h2>
        <p className="text-gray-200 text-center mt-3">Our team ensures the highest standards in medicine production.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg text-center transform transition hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-700">Dr. Leane Graham</h3>
            <p className="text-gray-600">Chief Pharmacist</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center transform transition hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-700">Dr. Ervin Howell</h3>
            <p className="text-gray-600">Research Scientist</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center transform transition hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-700">Clementine Bauch</h3>
            <p className="text-gray-600">Quality Control Specialist</p>
          </div>
        </div>

      </section>

    </main>
  );
}

