import styled from "styled-components"
import logo from "../images/logo.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #E4FBFF;
  display: flex;
  align-items: center;
  justify-content: center;

`
const LogoContainer = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  align-items: center;
`
const Logo = styled.div`
  font-family: 'Expletus Sans', cursive;
  font-size: 35px;
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
  // height: 40%;
  padding: 20px;
  background-color: #E4FBFF;

`
const Title = styled.div`
  font-size: 24px;
  color: #256D85;
  font-weight: 300;
  // font-family: 'Expletus Sans', cursive;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  // height: 25px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: .1px solid lightgray;
  
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: #256D85;
  cursor: pointer;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: white;
  font-weight: 600;
  background-color: #444444;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #256D85;
    transform: scale(1.02);
  }
`

const Register = () => {
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
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder = "Name"></Input>
          <Input placeholder = "Username"></Input>
          <Input placeholder = "E-mail"></Input>
          <Input type = "password" placeholder="Password"></Input>
          <Input type = "password" placeholder = "Confirm Password"></Input>
          <Input placeholder = "Bank Account"></Input>
          <Agreement>
            By creating an account, I consent to the processing of my personal data
            in accordance with the <u>PRIVACY POLICY</u>
          </Agreement>
          <Button>
            CREATE ACCOUNT
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register