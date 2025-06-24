//import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/home";
import { Footer } from "./components/footer";
import { ArtistList } from "./components/artistList";
import { Header } from "./components/header";
import { BrowserRouter } from "react-router";
import AppRouter from "./routes/approuter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
  /*
      <Artistpage />
      <Footer />
  
      <Home />
      <Footer />
      */
}

export default App;
