import styled from "styled-components";
import DoorDesigner from "../components/home/DoorDesigner";


const StyledContainer = styled.section`
width: 80%;
height: 100vh;
margin: 0 auto;
background: var(--gold0);
border: 2px solid var(--brown0);
`

const Home = () => {
  return (
    <StyledContainer>
      <DoorDesigner/>
    </StyledContainer>
  );
}

export default Home;