// Import our custom CSS
import "./styles/styles.scss";
import Header from "./components/Header/Header.tsx";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
