import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import headphone from "../images/headphonerbg.png";
import watch from "../images/smartwatch.png";
import phone from "../images/phone.png";
import axios from "axios";
import { mobile } from "../responsive";

const ContainerOuter = styled.div`
  padding: 0px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ProductInfo = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  jutify-content: center;
  // color: #256D85;
  opacity: 0;
  z-index: 3;
`
const ProductName = styled.div`
  margin-top: 5px;
  font-size: 18px;
  font-weight: 400;
  color: #256D85;
  font-family: 'Expletus Sans', cursive;
`
const ProductPrice = styled.div`
  font-family: 'Expletus Sans', cursive;
  font-weight: 200;
  font-size: 16px;
  color: #444444;
`
const CircleShape = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  z-index:2;
`;

const Image = styled.img`
  height: 75%;
  z-index: 3;
  // ${mobile({height:"30vh"})}
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  // left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  opacity: 0;
  background-color: rgba(156, 180, 204, 0.5);
  transition: all 0.8s ease;

`;
const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333333;
    margin: 5px;
    margin-bottom: 10px;
    transition: all 0.5s ease;
  }

  &:hover {
    transform: scale(1.1);
    background-color: #333333;
    color: white;
  }

`

const ContainerInner = styled.div`
  flex: 1;
  margin: 20px 0px 0px;
  max-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E4FBFF;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.04);
    // z-index: 1;
    transition: all 0.5s ease;
    }

  &:hover ${Image}{
    transform: scale(1.04);
    transition: all 0.5s ease;
    z-index: 3;
  }

  &:hover ${CircleShape}{
    transition: all 0.1s ease;
    z-index: 3;
  }

  &:hover ${Info}{
    z-index: 2;
    opacity: 1;
    transition: all 0.5s ease;
  }

  &:hover ${Icon}{
    z-index: 3;
    transition: all 0.5s ease;
  }

  &:hover ${ProductInfo}{
    // z-index: 2;
    opacity: 1;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`
const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        // console.log(res);
        setProducts(res.data);
      } catch (err) {}
    };
    fetchProducts();
  }, []);

  return (
    <ContainerOuter>
      {products.map((item) => (
        <ContainerInner>
          <ProductInfo>
            <ProductName>
              One Plus Nord n20
            </ProductName>
            <ProductPrice>
              $250
            </ProductPrice>
          </ProductInfo>
          <CircleShape />
          <Image src={phone} />
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
        </ContainerInner>
        
    ))}
    </ContainerOuter>
  );
};

export default Product;
