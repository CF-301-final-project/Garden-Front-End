import "./Styles/App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import AboutPage from "./Components/pages/AboutPage";
import Container from "react-bootstrap/Container";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Container className='text-center'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
