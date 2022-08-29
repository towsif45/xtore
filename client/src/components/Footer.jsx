import styled from "styled-components"
import { Facebook, Instagram, LocationOn, MailOutline, Phone, Twitter } from "@material-ui/icons";

const Container = styled.div`
    display: flex;
    margin: 20px 0px;
    background-color: #E4FBFF;
    height: 250px;
    margin-bottom: 0px;
    justify-content: center;
    width: 100%;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    color: #256D85;
`
const ContactItem = styled.div`
    margin-bottom: ${props => props.marginBottom};
    display: flex;
    // align-items: center;
    justify-content: center;
    color: #256D85;
    font-size: 13px;
`
const TextContainer = styled.div`

`

const SocialContainers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const SocialIcon = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
`
const footer = () => {
  return (
    <Container>
        <Center>
        <Title>CONTACT US</Title><br/>
        <ContactItem marginBottom = "3px"><LocationOn style={{marginRight:"5px", height:"20px", width:"20px"}}/>
            <TextContainer>Elahi 8/B, Surma gate, Akhalia, Sylhet-3114</TextContainer>
        </ContactItem>
        <ContactItem marginBottom = "3px"><Phone style={{marginRight:"5px", height:"20px", width:"20px"}}/>
            <TextContainer>+880 1301 959 115</TextContainer>
        </ContactItem>
        <ContactItem marginBottom = "20px"><MailOutline style={{marginRight:"5px", height:"20px", width:"20px"}}/>
            <TextContainer>tahsinafarina@gmail.com</TextContainer>
        </ContactItem>
        <SocialContainers>
            <SocialIcon color = "3B5999">
                <Facebook style={{height:"18px", width:"18px"}}/>
            </SocialIcon>
            <SocialIcon color = "E4405F">
                <Instagram style={{height:"18px", width:"18px"}}/>
            </SocialIcon>
            <SocialIcon color = "55ACEE">
                <Twitter style={{height:"18px", width:"18px"}}/>
            </SocialIcon>
        </SocialContainers>
        </Center>
    </Container>
  )
}

export default footer