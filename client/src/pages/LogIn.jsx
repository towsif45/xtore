import styled from "styled-components"
import logo from "../images/logo.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #93B5C6;
  display: flex;
  align-items: center;
  justify-content: center;

`
const Wrapper = styled.div`
  width: 40%;
  // height: 40%;
  padding: 20px;
  background-color: #E4FBFF;
  // display: flex;
  // align-items: center;
  // justify-content: center;

`
const Logo = styled.div`
  font-family:'Expletus Sans', cursive;
  // text-align: center;
  color: #256D85;
  font-size: 30px;
  margin-bottom: 20px;
`

const Image = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 3px;
  cursor: pointer;
`

const Title = styled.div`
  font-size: 20px;
  color: #256D85;
  font-weight: 300;
`

const Form = styled.form`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
`
const Input = styled.input`
  // flex: 1;
  width: 60%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 10px;
  color: white;
  // font-weight: 600;
  background-color: #444444;
  cursor: pointer;
  margin-top: 15px;
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
      <Wrapper>
        <Logo>
          <Image src = {logo} />
          tore
        </Logo>
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