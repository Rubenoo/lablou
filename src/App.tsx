// Import our custom CSS
import "./styles/styles.scss";
import Header from "./components/Header/Header.tsx";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
