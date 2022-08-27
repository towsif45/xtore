import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const state = location.state;
  console.log(state);
  //const data = state.data
  
  return (
    <div>
      Success
      
    </div>
  );
};

export default Success;
