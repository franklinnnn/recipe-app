import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Pages from "./pages/Pages";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Search />
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
      {/* <div className="border"></div> */}
      <div className="paperOverlay"></div>
    </div>
  );
};

export default App;
