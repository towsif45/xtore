import React, { useEffect } from "react";
import styled from "styled-components";

import {
  AccountCircle,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import { Badge } from "@material-ui/core";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { useState } from "react";

const Container = styled.div`
  height: 65px;
  background-color: #e4fbff;
  width: 100%;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.a`
  font-family: "Expletus Sans", cursive;
  font-size: 35px;
  color: #256d85;
  align-items: center;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
  text-decoration: none;
`;

const Image = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 3px;
  cursor: pointer;
  margin-top: 5px;
  ${mobile({ height: "24px", width: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: #256d85;
  ${mobile({ flex: 2, justifyContent: "flex-end" })}
`;

const MenuItem = styled.a`
  font-size: 14 px;
  coursor: pointer;
  margin-left: 25px;
  color: #256d85;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  text-decoration: none;
  display: flex;
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartCombined, setCartCombined] = useState([]);
  console.log(cart);
  useEffect(() => {
    const c = Object.values(
      cart.products.reduce((obj, product) => {
        if (obj[product._id]) {
          obj[product._id].quantity += product.quantity;
        } else {
          obj[product._id] = {
            _id: product._id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
          };
        }
        return obj;
      }, {})
    );
    setCartCombined(c);
  }, [cart.products]);
  const handleSignout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "#256D85", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo href="/">
            <Image src={logo} />
          </Logo>
          <Logo href="/">tore</Logo>
        </Center>
        <Right>
          {!user && (
            <>
              <MenuItem href="/register">Register</MenuItem>
              <MenuItem href="/login">Sign In</MenuItem>
            </>
          )}

          {user && (
            <>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={cartCombined.length} color="#256D85">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </Link>
              {/* <Link to="/profile"> */}
              <MenuItem href="/profile">
                <AccountCircle sx={{ alignItems: "flex-end" }} />
              </MenuItem>
              {/* </Link> */}
              <MenuItem onClick={handleSignout}>Sign Out</MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
