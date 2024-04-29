import Banner from "./components/Banner"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {
  return (
    <> 
    <NavBar />
    <Carousel />
    <ItemListContainer mensaje={"Si realizas dos mudanzas te hacemos promo !! 2 al precio de 1"} />
    <Banner />
    <Footer />
       </>
    ) 

}

export default App
