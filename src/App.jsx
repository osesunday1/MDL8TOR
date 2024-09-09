import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import MainNavigation from './components/Navigation/MainNavigation'
import Home from './pages/Home';
import About from './pages/About';



const StyledMain = styled.main`
  margin-top: 5.3rem;
  margin-bottom: 1rem;
`

function App() {
  

  return (
    <>
      <Router>

      <GlobalStyles/>
      <MainNavigation/>
        <StyledMain>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </StyledMain>

      </Router>
    </>
  )
}

export default App
