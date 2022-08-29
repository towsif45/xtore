import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  // align-items: center;
  ${mobile({ flexDirection: "column", padding: "10px", alignItems: "center" })}
`;

const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Image = styled.img`
  // justify-content: center;
  width: 400px;
  height: 400px;
  //   object-fit: cover;
  ${mobile({ height: "50vh", width: "50vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 300;
  color: #256d85;
  // color: teal;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 300;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 35px;
`;

// const FilterContainer = styled.div`
//   width: 50%;
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
// `;

// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
//   margin-right: 5px;
// `;

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #256d85;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 5px;
`;

const Button = styled.button`
  padding: 15px;
  width: 20%;
  margin: 20px 0px;
  border: 1px solid #256d85;
  color: #256d85;
  background-color: white;
  cursor: pointer;
  font-weight: 550;
  &:hover {
    //   background-color: #f8f4f4;
    background-color: #256d85;
    color: white;
    font-weight: 600;
  }
`;

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const cartProducts = useSelector((state) => state.cart.products);
  console.log(cartProducts);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest("/products/find/" + id);
        setProduct(res.data);
        //console.log(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    // update cart
    dispatch(addProduct({ ...product, quantity }));
    navigate("/cart")
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title> {product.title} </Title>
          <Desc>{product.description}</Desc>
          <Price>{"$ " + product.price}</Price>

          {/* <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
          </FilterContainer> */}
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleQuantity("dec")}
                style={{ cursor: "pointer", color: "#444444" }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => handleQuantity("inc")}
                style={{ cursor: "pointer", color: "#444444" }}
              />
            </AmountContainer>
          </AddContainer>
          <Button onClick={handleClick}>ADD TO CART</Button>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SingleProduct;
