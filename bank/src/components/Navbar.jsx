import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 50px;
  background-color: #876445;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-family: "Expletus Sans", cursive;
  font-size: 35px;
  color: #f0e8a1;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.a`
  font-size: 14 px;
  coursor: pointer;
  margin-left: 25px;
  color: #f0e8a1;
  cursor: pointer;
  text-decoration: none;
  display: flex;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>XBank</Logo>
        </Left>
        <Right>
          <MenuItem onClick={handleClick}>Sign Out</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
