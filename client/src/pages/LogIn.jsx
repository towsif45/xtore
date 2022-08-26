import styled from "styled-components"
import logo from "../images/logo.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  // background-color: #93B5C6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #E4FBFF;

`
const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 150px 0px 0px 390px;
  // margin-top: 150px;
  font-family: 'Expletus Sans', cursive;
  font-size: 30px;
  color: #256D85;
`
const Image = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 5px;
`

const Wrapper = styled.div`
  width: 40%;
  // height: 40%;
  padding: 20px;
  background-color: #E4FBFF;
  // text-align: center;

`
const Title = styled.div`
  font-size: 24px;
  color: #256D85;
  font-weight: 300;
`

const Form = styled.form`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
  //  align-items: center;
`
const Input = styled.input`
  // flex: 1;
  width: 65%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-color: #256D85;
  border: 0.1px solid lightgray;
`

const Button = styled.button`
  width: 40%;
  border: none;
  margin-top: 30px;
  padding: 15px 10px;
  color: white;
  // font-weight: 600;
  background-color: #444444;
  cursor: pointer;
  // margin-top: 15px;
  font-size: 15px;
`
const TextContainer = styled.div`
  color: #256D85;
  font-size: 14px;
  curson: pointer;
  margin-top: 20px ;
`
const Link = styled.a`
  margin-left: 10px;
`
const LogIn = () => {
  return (
    <Container>
      <Logo>
        <Image src = {logo}/>
        tore
      </Logo>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder = "E-mail"></Input>
          <Input type = "password" placeholder = "Password"></Input>
          <Button>
            Sign In
          </Button>
          <TextContainer>
            Don't have an account?
            <Link>
              <b>SIGN UP</b>
            </Link>
          </TextContainer>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default LogIn