import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import headphone from "../images/headphonerbg.png"

const ContainerOuter = styled.div`
    padding: 0px 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

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

`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`

const Image = styled.img`
    height: 75%;
    z-index: 2;

`

const ContainerInner = styled.div`
    flex: 1;
    margin: 5px;
    width: 280px;
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
    margin-top: 275px;
    // background-color: #333333;
    // color: white;

    &:hover{
        background-color: #333333;
        color: white;
        transform: scale(1.1);
        // background-color: black;
    }

`

const Product = () => {
  return (
    <ContainerOuter>

        <ContainerInner>
            <Circle/>
                <Image src = {headphone}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </ContainerInner>

        <ContainerInner>
            <Circle/>
            <Image src = {headphone}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </ContainerInner>

        <ContainerInner>
            <Circle/>
                <Image src = {headphone}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </ContainerInner>

        <ContainerInner>
            <Circle/>
                <Image src = {headphone}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </ContainerInner>

        <ContainerInner>
            <Circle/>
                <Image src = {headphone}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </ContainerInner>

    </ContainerOuter>
    
    
    //     <Image src = {headphone}/>
    //     <Info>
    //         <Icon>
    //             <ShoppingCartOutlined/>
    //         </Icon>
    //         <Icon>
    //             <SearchOutlined/>
    //         </Icon>
    //         <Icon>
    //             <FavoriteBorderOutlined/>
    //         </Icon>
    //     </Info>
    //     <Image src = {headphone}/>
    //     <Info>
    //         <Icon>
    //             <ShoppingCartOutlined/>
    //         </Icon>
    //         <Icon>
    //             <SearchOutlined/>
    //         </Icon>
    //         <Icon>
    //             <FavoriteBorderOutlined/>
    //         </Icon>
    //     </Info>
    //     <Image src = {headphone}/>
    //     <Info>
    //         <Icon>
    //             <ShoppingCartOutlined/>
    //         </Icon>
    //         <Icon>
    //             <SearchOutlined/>
    //         </Icon>
    //         <Icon>
    //             <FavoriteBorderOutlined/>
    //         </Icon>
    //     </Info>
    //     <Image src = {headphone}/>
    //     <Info>
    //         <Icon>
    //             <ShoppingCartOutlined/>
    //         </Icon>
    //         <Icon>
    //             <SearchOutlined/>
    //         </Icon>
    //         <Icon>
    //             <FavoriteBorderOutlined/>
    //         </Icon>
    //     </Info>
    // </Container>
  )
}

export default Product