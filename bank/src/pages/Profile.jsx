import styled from "styled-components"
import { Box } from "@material-ui/core"
import SimpleCard from "../components/Card"
import Navbar from "../components/Navbar"


const Container = styled.div`
    align-items: center;
    justify-content: flex-end;
    background-color: #F6E6CB;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`

const OrderHistory = () => {
  return (
    <Container>
      <Navbar/>
      <Box sx = {{minWidth:'80%', padding: '50px 0px 0px 0px', flex: 1}}>
        <SimpleCard />
      </Box>
      <Box sx = {{minWidth:'80%', padding: '0px 0px 0px 0px', flex: 1}}>
        <SimpleCard/>
      </Box>
    </Container>
  )
}

export default OrderHistory