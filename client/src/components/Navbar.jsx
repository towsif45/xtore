import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core';
import logo from "../images/logo.png"

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    color: #256D85;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 25px;

`;

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
    align-items: center;
`;

const Logo = styled.div`
    font-family: 'Expletus Sans', cursive;
    font-size: 35px;
    color: #256D85;
`;

const Image = styled.img`
    height: 35px;
    width: 35px;
    margin-right: 3px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #256D85;
`;

const MenuItem = styled.div`
    font-size: 14 px;
    coursor: pointer;
    margin-left: 25px;
    color: #256D85;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    En
                </Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"#256D85", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    <Image src = {logo} />
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
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar