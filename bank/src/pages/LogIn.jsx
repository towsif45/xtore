import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: #f0e8a1;
`;
const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  margin-top: 10px;
`;
const Logo = styled.a`
  font-family: "Expletus Sans", cursive;
  font-size: 30px;
  color: #614124;
  margin-bottom: 20px;
  text-decoration: none;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 24px;
  // color: #876445;
  font-weight: 300;
  color: #614124;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 0.05px solid #614124;
`;

const Button = styled.button`
  width: 80%;
  border: none;
  margin-top: 20px;
  padding: 15px 10px;
  color: white;
  background-color: #614124;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #614124;
    transform: scale(1.02);
    // ;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const TextContainer = styled.div`
  color: #614124;
  font-size: 14px;
  curson: pointer;
  margin-top: 20px;
`;
const Link = styled.a`
  margin-left: 10px;
`;

// const Error = styled.span`
//   color: red;
// `;

const LogIn = () => {
  const [accountNo, setAccountNo] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { accountNo, password });
  };
  return (
    <Container>
      <LogoContainer>
        {/* <Logo href = "/">
            <Image src={logo} />
          </Logo> */}
        <Logo href="/">Xbank</Logo>
      </LogoContainer>
      {/* <Logo>
          <Image src = {logo}/>
          tore
        </Logo> */}
      <Title>Sign In</Title>
      <Form>
        <Input
          placeholder="A/C no"
          onChange={(e) => setAccountNo(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button onClick={handleClick}>Sign In</Button>
        {/* {error && <Error> Something went wrong... </Error>} */}
        <TextContainer>
          Don't have an account?
          <Link>
            <b>SIGN UP</b>
          </Link>
        </TextContainer>
      </Form>
    </Container>
  );
};

export default LogIn;
