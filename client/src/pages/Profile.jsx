import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { History } from "@material-ui/icons";

const Container = styled.div`
    // align-items: center;
`
const ProfileContainer = styled.div`
    // display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 350px;
`

const InfoContainer = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`
const FullInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 200px;   
`

const TitleInfo = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    color: #256D85;
    // justify-content: flex-end;
`
const Info = styled.div`
    flex: 1;
    margin-left: 40px;
    color: #333333;
`

const HistoryContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px;
    font-size: 16px;
    color: #256D85;
    position: absolute;
    top: 0;
    right: 0;
`
const HistoryTitle = styled.div`
    margin-left: 5px;
    cursor: pointer;
`

const Profile = () => {
  return (
    <Container>
        <Navbar/>
        <ProfileContainer>
            <InfoContainer>
                <FullInfo>
                    <TitleInfo>
                        Name:
                    </TitleInfo>
                    <Info>
                        Farina Tahsin Chowdhury
                    </Info>
                </FullInfo>
                <FullInfo>
                    <TitleInfo>
                        Username:
                    </TitleInfo>
                    <Info>
                        Farina1103
                    </Info>
                </FullInfo>
                <FullInfo>
                    <TitleInfo>
                        E-mail:
                    </TitleInfo>
                    <Info>
                        abcde@gmail.com
                    </Info>
                </FullInfo>
                <FullInfo>
                    <TitleInfo>
                        Bank Account Number:
                    </TitleInfo>
                    <Info>
                        0123456789
                    </Info>
                </FullInfo>
                <FullInfo>
                    <TitleInfo>
                        Bank Account Balance:
                    </TitleInfo>
                    <Info>
                        $10000
                    </Info>
                </FullInfo>
            </InfoContainer>
            <HistoryContainer>
                <History style = {{cursor: "pointer"}}/>
                <HistoryTitle>
                    Order History
                </HistoryTitle>
            </HistoryContainer>
        </ProfileContainer>
        <Footer/>
    </Container>
  )
}

export default Profile