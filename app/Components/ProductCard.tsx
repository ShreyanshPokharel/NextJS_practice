import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css';

const ProductCard = () => {

  return (
  
    
    <div className="p-4 m-5 w-fit bg-teal-700 text-white text-xl hover:bg-teal-600 transition duration-300">
        <AddToCart/>
    </div>
   
  )
}

export default ProductCard