import styled from "styled-components"
import { Add, Remove } from "@material-ui/icons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import headphone from "../images/headphonerbg.png"

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
//   object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  color: #256D85;
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

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 5px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

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
  border: 1px solid #256D85;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  margin: 20px 0px;
  border: 1px solid #256D85;
  color: #256D85;
  background-color: white;
  cursor: pointer;
  font-weight: 550;
  &:hover{
    //   background-color: #f8f4f4;
    background-color: #256D85;
    color: white;
    font-weight: 600;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src= {headphone}/>
        </ImgContainer>
        <InfoContainer>
          <Title>Black Headphone</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="#607EAA" />
              <FilterColor color="gray" />
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style = {{cursor:"pointer", color:'#444444'}}/>
              <Amount>1</Amount>
              <Add style = {{cursor:"pointer", color:'#444444'}}/>
            </AmountContainer>
          </AddContainer>
          <Button>ADD TO CART</Button>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product