import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import DelevryAdressForm from "./DelevryAdressForm";
import OrderSummery from "./OrderSummery";
import { useSelector, useDispatch } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const [step, setStep] = useState(searchParams.get('step'));
  const [addNewAddres, setAddNewAddress] = useState();

  useEffect(()=>{
    setStep(searchParams.get('step'));
  },[location]);
  const orderId = searchParams.get("order_id");
  const order = useSelector(state => state.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [orderId]);

  const handleNext = useCallback(() => {
    if (step === '0') {
      setAddNewAddress(false);
      navigate('/checkout?step=1');
    }
  },[])

  const handleBack = () => {
    if (step == 1) {
      navigate('/checkout?step=0');
    }else if(step == 0){
      navigate('/cart')
    }
  };

  return (
    <div className="min-h-screen">
      <Box className="sm:px-30 lg:px-32" sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2, pl:4 }}>
          {/* <button
            onClick={handleBack}
            sx={{ mr: 1 }}
            className={`text-blue bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-400 ${step === '0' ? 'opacity-50' : 'opacity-100'}`}
          >
            Back
          </button> */}
        {!addNewAddres && <p className={`${step === -1? 'text-gray-400 border-gray-100 cursor-not-allowed' : 'text-blue-800 border-blue-500 hover:bg-blue-100 hover:text-white cursor-pointer'} mt-10  px-4 py-2 border border-sm`} onClick={handleBack}>Back</p>}
        </Box>
        <div className="my-5">
          {step === '0' && <DelevryAdressForm handleNext={handleNext} addNewAddres={addNewAddres} setAddNewAddress={setAddNewAddress} />}
          {step === '1' && <OrderSummery />}
        </div>
      </Box>
    </div>
  );
}
