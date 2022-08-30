import { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e4fbff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoContainer = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  align-items: center;
`;
const Logo = styled.a`
  font-family: "Expletus Sans", cursive;
  font-size: 35px;
  color: #256d85;
  margin-bottom: 20px;
  text-decoration: none;
`;
const Image = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 5px;
  margin-top: 5px;
`;
const Wrapper = styled.div`
  width: 40%;
  // height: 40%;
  padding: 20px;
  background-color: #e4fbff;
`;
const Title = styled.div`
  font-size: 24px;
  color: #256d85;
  font-weight: 300;
  // font-family: 'Expletus Sans', cursive;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  // height: 25px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 0.1px solid lightgray;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: #256d85;
  cursor: pointer;
`;
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
    background-color: #256d85;
    transform: scale(1.02);
  }
`;

const Register = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(inputs)
    const register = async () => {
      const res = await publicRequest.post("/auth/register", inputs);
      console.log(res.data);
      const bank = await publicRequest.post("/bank", {
        userId: res.data._id,
        accountNo: inputs.bank_account,
        password: inputs.bank_pin,
      });
      console.log(bank.data);
    };
    register();
    navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo href="/">
            <Image src={logo} />
          </Logo>
          <Logo href="/">tore</Logo>
        </LogoContainer>
        <Title>Create An Account</Title>
        <Form>
          <Input
            name="display_name"
            onChange={handleChange}
            placeholder="Name"
          ></Input>
          <Input
            name="username"
            onChange={handleChange}
            placeholder="Username"
          ></Input>
          <Input
            name="email"
            onChange={handleChange}
            placeholder="Email"
          ></Input>
          <Input
            name="bank_account"
            onChange={handleChange}
            placeholder="Bank Account Number"
          ></Input>
          <Input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
          ></Input>
          <Input
            name="bank_pin"
            onChange={handleChange}
            type="password"
            placeholder="Enter Bank PIN"
          ></Input>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <u>PRIVACY POLICY</u>
          </Agreement>
          <Button onClick={handleClick}>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
