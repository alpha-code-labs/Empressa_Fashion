import React from "react";
import { useLocation } from "react-router-dom";
import CartItem from "../CartEcom/CartItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import AdressCard from "../AdressCard/AdressCard";
import { createPayment, updatePayment } from "../../../State/Payment/Action";
import Button from "../Button/Index";
import { useNavigate } from "react-router-dom";
import Loading from "../Loader/Index";

const OrderSummary = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const order = useSelector(state => state.order)
  const navigate = useNavigate();
  console.log("orderId ", order)
  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])

  // const handleCreatePayment = async () => {
  //   const data = { orderId: order.order?._id, jwt }
  //   dispatch(createPayment(data))
  //   //await dispatch(updatePayment({}))
  //   navigate(`/payment/${order.order?._id}`)
  // }

  const handleCreatePayment = () => {
    const data = { orderId: order.order?._id, jwt }
    dispatch(createPayment(data))
  }

  const discount = order.order
    ? order.order.totalPrice - order.order.totalDiscountedPrice
    : 0;


  return ( <>
    {!order.loading && < div className="bg-white px-2 sm:px-4">
      <div className="flex justify-center items-center p-4 w-full bg-white ">
          <p className="font-heading text-[#5f6368] px- text-2xl sm:text-3xl">
            Order Summary
          </p>
      </div>
    
      <div className="p-6 rounded-md border bg-white font-text">
      <span className="font-sans text-lg">Shipping Details:</span>
      <div className="">
        <AdressCard address={order.order?.shippingAddress} />
      </div>
      </div>
      <div className="lg:grid grid-cols-3 relative justify-between pb-12">
        <div className="lg:col-span-2">
          <div className="space-y-3 font-text">
            {order.order?.orderItems.map((item) => (
              <div className="p-2">
                <CartItem className="bg-red-500" item={item} showButton={false} />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:mt-0 lg:ml-5 font-roboto text-neutral-700">
          <div className="border border-gray-200 mt-2 px-5 py-4 rounded-md bg-white">
            <p className="text-center p-2">Price Details</p>
            <hr className="border-gray-100 p-2" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="">Price ({order.order?.totalItem} item)</span>
                <span className="">₹{order.order?.totalPrice}</span>
              </div>
              {discount > 0 && <div className="flex justify-between">
                <span className="">Discount</span>
                <span className="text-green-700  ">-₹{discount.toFixed(2)}</span>
                {order?.referralDiscountPercentage > 0 && <span className="text-xs font-thin text-green-700">{`(includes referral discount of ${order?.referralDiscountPercentage}%)`}</span>}
              </div>}
              <div className="flex justify-between">
                <span className="" >Delivery Charges</span>
                <span className="text-green-700 ">Free</span>
              </div>
              <hr className="py-2 border-gray-100" />

              <div className="flex justify-between font-bold text-lg">
                <span className="">Total Amount</span>
                <span className="text-green-700 ">₹{order.order?.totalDiscountedPrice}</span>
              </div>
            </div>

            <Button text='Place Order' classname={'mt-2'} onClick={handleCreatePayment} type='submit'/>
          </div>
        </div>
      </div>
    </div>}

    {order.loading && <div className="flex w-full items-center justify-center">
      <Loading /> 
    </div>}

    </>);
};

export default OrderSummary;
