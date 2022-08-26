import React from 'react'
import styled from 'styled-components'
import { AccountCircle, Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core';
import logo from "../images/logo.png"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 65px;
    background-color: #E4FBFF;
    ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 10px"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.div`
    font-family: 'Expletus Sans', cursive;
    font-size: 35px;
    color: #256D85;
    align-items: center;
    cursor: pointer;
    ${mobile({fontSize:"24px"})}
`;

const Image = styled.img`
    height: 35px;
    width: 35px;
    margin-right: 3px;
    cursor: pointer;
    margin-top: 5px;
    ${mobile({height:"24px", width:"24px"})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #256D85;
    ${mobile({flex: 2, justifyContent:"flex-end"})}
`;

const MenuItem = styled.div`
    font-size: 14 px;
    coursor: pointer;
    margin-left: 25px;
    color: #256D85;
    cursor: pointer;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder = "search"/>
                    <Search style={{color:"#256D85", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    <Image src = {logo} />
                    {/* <LogoText>tore</LogoText> */}
                </Logo>
                <Logo>
                    tore
                </Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="#256D85">
                    <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
                <MenuItem>
                    <AccountCircle/>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar