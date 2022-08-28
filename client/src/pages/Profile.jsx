import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { History } from "@material-ui/icons";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { useState } from "react";

const Container = styled.div`
  // align-items: center;
`;
const ProfileContainer = styled.div`
  // display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 350px;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  ${mobile({ alignItems: "center" })}
`;
const FullInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 200px;
  ${mobile({ flexDirection: "column", margin: "10px" })}
`;

const TitleInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #256d85;
  // justify-content: flex-end;
`;
const Info = styled.div`
  flex: 1;
  margin-left: 40px;
  color: #333333;
`;

const HistoryContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px;
  font-size: 16px;
  color: #256d85;
  position: absolute;
  top: 0;
  right: 0;
`;
const HistoryTitle = styled.a`
  margin-left: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #256d85;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  width: 60%;
  margin-left: 150px;
`;

const Profile = () => {
  const [bankAccount, setBankAccount] = useState({});
  const user = useSelector((state) => state.user.currentUser);
  console.log(user.others);
  useEffect(() => {
    const getBankAccount = async () => {
      try {
        const res = await publicRequest("/bank/find/" + user.others._id);
        console.log(res.data);
        setBankAccount(res.data);
      } catch (err) {}
    };
    getBankAccount();
  }, [user.others._id]);
  return (
    <Container>
      <Navbar />
      <ProfileContainer>
        <InfoContainer>
          <FullInfo>
            <TitleInfo>Name:</TitleInfo>
            <Info>{user.others.display_name}</Info>
          </FullInfo>
          <Hr style={{ align: "center" }} />
          <FullInfo>
            <TitleInfo>Username:</TitleInfo>
            <Info>{user.others.username}</Info>
          </FullInfo>
          <Hr style={{ align: "center" }} />
          <FullInfo>
            <TitleInfo>E-mail:</TitleInfo>
            <Info>{user.others.email}</Info>
          </FullInfo>
          <Hr style={{ align: "center" }} />
          <FullInfo>
            <TitleInfo>Bank Account Number:</TitleInfo>
            <Info>{bankAccount.accountNo}</Info>
          </FullInfo>
          <Hr style={{ align: "center" }} />
          <FullInfo>
            <TitleInfo>Bank Account Balance:</TitleInfo>
            <Info>$ {bankAccount.balance}</Info>
          </FullInfo>
        </InfoContainer>
        <HistoryContainer>
          <Link to="/orders">
            <History style={{ cursor: "pointer", color: "#256D85" }} />
          </Link>
          <HistoryTitle href="/orders">Order History</HistoryTitle>
        </HistoryContainer>
      </ProfileContainer>
      <Footer />
    </Container>
  );
};

export default Profile;
