import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Body from "../components/Body"
import Productslist from "../components/Productslist"
import About from "../components/About"
import Contactus from "../components/Contactus"


const Homepage = () => {
  return (
    <>
      <div className="bg-[url('/images/smallbackground2.png')] md:bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat bg-fixed w-full min-h-screen h-auto"
      style={{backgroundAttachment: window.innerWidth < 768 ? 'scroll' : 'fixed'}}>
          <Navbar />
        <div className="container lg:mx-2 mx-auto px-">
          <Home />
        </div>
      </div>
         <Body />
         <Productslist/>
         <About/>
         {/* <Contactus/> */}
    </>
  )
}

export default Homepage