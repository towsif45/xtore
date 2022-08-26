import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import headphone from "../images/headphonerbg.png";
import axios from "axios";

const ContainerOuter = styled.div`
  padding: 0px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  cursor: pointer;

  &:hover {
    transition: all 0.8s ease;
    opacity: 1;
    background-color: rgba(156, 180, 204, 0.5);
    z-index: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

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


    &:hover{
        transform: scale(1.04);
        transition: all 0.5s ease;
    }

    &:hover ${Image}{
        z-index: 3;
    }

    &:hover ${Circle}{
        z-index: 2;
    }

    // &:hover ${Info}{
    //     opacity: 1;
    // }
`

const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    margin: 5px;
    transition: all 0.5s ease;
  }

  &:hover ${Image} {
    z-index: 3;
  }

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
          <Circle />
          <Image src={headphone} />
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
