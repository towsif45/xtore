import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headphone from "../images/headphonerbg.png"
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`
    background-color: ;
`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.div`
    // font-family: 'Expletus Sans', cursive;
    font-weight: 300;
    text-align: center;
    font-size: 26px;
    color: #256D85;
    padding: 20px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weigt: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "#256D85" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`

`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`
const Bottom = styled.div`
    display: flex;
    jystify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 400;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.div`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`
const SummaryItemText = styled.div`

`
const SummaryItemPrice = styled.div`

`
const Button = styled.button`
    width: 100%;
    padding 10px;
    background-color: #256D85;
    color: white;
    font-weight: 600;
    border: none;
`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton>
                    CONTINUE SHOPPING
                </TopButton>
                
                {/* <TopTexts>
                    <TopText>
                        Your Shopping Bag
                    </TopText>
                    <TopText>
                        Your Wishlist
                    </TopText>
                </TopTexts> */}
                
                <TopButton type="filled">
                    CHECKOUT NOW
                </TopButton>
            </Top>
            <Bottom>

                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src = {headphone} />
                            <Details>
                                <ProductName><b>Product: </b>Black Headphone</ProductName>
                                <ProductId><b>ID: </b>12345678</ProductId>
                                <ProductColor color = "black"/>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>
                                    3
                                </ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ 30
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src = {headphone} />
                            <Details>
                                <ProductName><b>Product: </b>Black Headphone</ProductName>
                                <ProductId><b>ID: </b>12345678</ProductId>
                                <ProductColor color = "black"/>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>
                                    3
                                </ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ 30
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>
                        ORDER SUMMARY
                    </SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Bank Account Balance</SummaryItemText>
                        <SummaryItemPrice>$ 1000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Sub-total</SummaryItemText>
                        <SummaryItemPrice>$ 60</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Cost</SummaryItemText>
                        <SummaryItemPrice>$ 5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type = "total">
                        <SummaryItemText>Total Cost</SummaryItemText>
                        <SummaryItemPrice>$ 65</SummaryItemPrice>
                    </SummaryItem>
                    <Button>
                        CHECKOUT NOW
                    </Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart