import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Box } from "@material-ui/core"
import SimpleCard from "../components/Card"


const Container = styled.div`
    align-items: center;
    justify-content: center;
`

const OrderHistory = () => {
  return (
    <Container>
        <Navbar/>
        <Box sx = {{margin: 50}}>
            <SimpleCard />
        </Box>
        <Box sx = {{margin: 50}}>
            <SimpleCard/>
        </Box>
        <Box sx = {{margin: 50}}>
            <SimpleCard/>
        </Box>
        <Footer/>
    </Container>
  )
}

export default OrderHistory