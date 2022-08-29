// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4fbff;
`;
const LogoContainer = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  align-items: center;
`;
const Logo = styled.a`
  font-family: "Expletus Sans", cursive;
  font-size: 30px;
  color: #256d85;
  margin-bottom: 20px;
  text-decoration: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #e4fbff;
`;
const Title = styled.div`
  font-size: 24px;
  color: #256d85;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 65%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-color: #256d85;
  border: 0.1px solid lightgray;
`;

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
    background-color: #256d85;
    transform: scale(1.02);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const TextContainer = styled.div`
  color: #256d85;
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
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   login(dispatch, { username, password });
  // };
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo>Supplier</Logo>
        </LogoContainer>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="Username"
            // onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            // onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button>
          {/* // onClick={handleClick} disabled={isFetching}> */}
            Sign In
          </Button>
          {/* {error && <Error> Something went wrong... </Error>} */}
          <TextContainer>
            Don't have an account?
            <Link>
              <b>SIGN UP</b>
            </Link>
          </TextContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LogIn;
