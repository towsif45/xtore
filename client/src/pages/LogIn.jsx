import styled from "styled-components"
import logo from "../images/logo.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E4FBFF;

`
const LogoContainer = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  align-items: center;
`
const Logo = styled.div`
  font-family: 'Expletus Sans', cursive;
  font-size: 30px;
  color: #256D85;
  margin-bottom: 20px;
`
const Image = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 5px;
  margin-top: 5px;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #E4FBFF;

`
const Title = styled.div`
  font-size: 24px;
  color: #256D85;
  font-weight: 300;
`

const Form = styled.form`
   display: flex;
   flex-direction: column;

`
const Input = styled.input`
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
  background-color: #444444;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #256D85;
    transform: scale(1.02);
  }
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
        <LogoContainer>
          <Logo>
            <Image src = {logo}/>
          </Logo>
          <Logo>
            tore
          </Logo>
        </LogoContainer>
        {/* <Logo>
          <Image src = {logo}/>
          tore
        </Logo> */}
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