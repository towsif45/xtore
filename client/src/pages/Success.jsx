import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { publicRequest, userRequest } from "../requestMethods";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../redux/cartRedux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
// import { userRequest } from "../requestMethods";

const Container = styled.div`
  // background-color: #E4FBFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleText = styled.div`
  color: #256d85;
  font-weight: 400;
  font-size: 20px;
  margin: 30px;
`;
const DescText = styled.p`
  margin: 0px 0px 10px 0px;
  color: #256d85;
`;

const Button = styled.button`
    width: 120px;
    margin: 30px;
    padding 12px;
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
  width: 20%;
  height: 25px;
  margin: 20px 0px 0px 0px;
  padding: 10px;
  border-color: #256d85;
  border: 0.1px solid lightgray;
  ${mobile({ width: "50%" })}
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
  const [address, setAddress] = useState("");
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
          amount: cart.total + 5.0, // $5.0 for delivery charge
        });
        const updatedAccount = await publicRequest.put("/bank/", {
          accountNo: bank.accountNo,
          amount: cart.total,
          password: password,
        });
        const newOrder = await userRequest.post("/orders", {
          userId: id,
          products: cart.combinedProducts,
          amount: cart.total,
          address: address,
        });
        console.log("Cart is", cart.combinedProducts);
        console.log("res.data", res.data);
        console.log(updatedAccount.data);
        console.log(newOrder.data);
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
    <Container>
      <Navbar />
      <TitleText>Your order preview</TitleText>
      {/* <DescText> */}
      {cart.products.map((product) => {
        return <DescText> {product.title} </DescText>;
      })}
      {/* </DescText> */}
      {/* <div> */}
      {/* Your order preview: */}
      {/* {cart.products.map((product) => {
        return <div> {product.title} </div>;
      })} */}
      {/* <InputContainer></InputContainer> */}

      <Input
        sx={{ display: "flex", justifyContent: "center" }}
        placeholder="Enter Shipping Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <Input
        sx={{ display: "flex", justifyContent: "center" }}
        placeholder="Enter Bank Pin"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleClick}>CONFIRM</Button>
      {error && <Error> Balance is low! </Error>}
      {/* </div> */}
      <Footer />
    </Container>
  );
};

export default Success;
