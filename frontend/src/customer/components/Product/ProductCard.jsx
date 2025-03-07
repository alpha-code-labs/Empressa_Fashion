import React, { useEffect } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {user} = useSelector(state=>state.auth);
  const {balance} = useSelector(state=>state.wallet);
 
  return (
    <>
      <div
        onClick={() => (!product.isExclusive || balance > 999)  && navigate(`/product/${product._id}`)}
        className={`relative productCard w-fit transition-all cursor-pointer rounded-sm ${(!product.isExclusive || balance > 999) && 'sm:hover:shadow-md group' }`}
      >
        <div className="h-fit rounded-sm overflow-hidden">
          <img
            className="max-h-[350px] w-fit object-cover mx-auto flex justify-center items-center rounded-sm transition-transform duration-150 ease-in-out transform group-hover:scale-105"
            src={`${product?.imageUrl[product.defaultImageIndex]}@mq`}
            alt="ss"
          />
          {product?.isExclusive && (!user || balance < 1000) && (
                <div className="absolute rounded-sm inset-0 bg-black bg-opacity-10 backdrop-blur-lg z-10 flex items-center justify-center group">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <span className="text-white text-lg font-semibold tracking-wider">EXCLUSIVE</span>
                        <img className="transition-all transition-transform duration-150 ease-in-out transform group-hover:scale-105" src='/images/white_lock.svg' style={{width:'32px', height:'32px'}}/>
                    </div>
                </div>
            )}
        </div>
        <div className="h-[100px] p-3 rounded-md">
          <div>
          {/* <p className="font-text text-red-700 opacity-70 mt-2 text-sm">{product.brand}</p> */}
            <p className="font-sans text-xs text-neutral-700 mt-1">
              {product.title}
            </p>
          </div>
          <div className="flex items-center mt-1 space-x-2">
            <p className="text-md font-text text-neutral-600">{"₹ " + product.discountedPrice}</p>
            {product.price != product.discountedPrice && <div className="flex space-x-2">
              <p className="font-text line-through opacity-70 text-xs text-gray-500">
                {"₹ " + product.price}
              </p>
              <p className="text-blue-500 text-sm font-text">
                {((1 - product.discountedPrice / product.price) * 100).toFixed(0) + "% off"}
              </p>
            </div>}
          </div>
          <div className="flex gap-4 text-xs text-neutral-500 my-1">
            {product.sizes.map(size=><p className={`${size.quantity < 1 && 'line-through'}`}>{size.name}</p>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
