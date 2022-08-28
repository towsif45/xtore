import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { publicRequest } from "../requestMethods";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../redux/cartRedux";
// import { userRequest } from "../requestMethods";

const Button = styled.button`
    width: 100px;
    padding 10px;
    background-color: #256D85;
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.02);

    }
`;
const Input = styled.input`
  width: 65%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-color: #256d85;
  border: 0.1px solid lightgray;
`;

const Error = styled.span`
  color: red;
`;

const Success = () => {
  const cart = useSelector((state) => state.cart);
  const id = useSelector((state) => state.user.currentUser.others._id);
  const location = useLocation();
  const bank = location.state.bank;
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  //const data = state.data
  console.log(bank);

  const handleClick = async (event) => {
    event.preventDefault();
    console.log(password);
    try {
      if (cart.total <= bank.balance) {
        const res = await publicRequest.post("/transactions", {
          userId: id,
          from_bank_account: bank.accountNo,
          to_bank_account: "421421421",
          amount: cart.total+5.0, // $5.0 for delivery charge
        });
        const updatedAccount = await publicRequest.put("/bank/", {
          accountNo: bank.accountNo,
          amount: cart.total,
          password: password,
        });
        console.log("Cart is", cart);
        console.log("res.data", res.data);
        console.log(updatedAccount.data);
        dispatch(resetCart());
        navigate("/");
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      Your order preview:
      {cart.products.map((product) => {
        return <div> {product.title} </div>;
      })}
      <Input
        placeholder="Enter bank password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleClick}>CONFIRM</Button>
      {error && <Error> Balance is low! </Error>}
    </div>
  );
};

export default Success;
