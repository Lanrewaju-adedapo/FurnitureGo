import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Body from "../components/Body"
import Productslist from "../components/Productslist"
import About from "../components/About"
import Contactus from "../components/Contactus"
import Reviews from "../components/Reviews"


const Homepage = () => {
  return (
    <>
      <div className="relative bg-[url('/images/smallbackground2.png')] md:bg-[url('/images/Background.png')] filter brightness-100 bg-cover bg-center bg-no-repeat bg-fixed w-full min-h-screen h-auto" style={{backgroundAttachment: window.innerWidth < 768 ? 'scroll' : 'fixed'}}>
        <Navbar className=""/>       
        <Home  className="container lg:mx-2 mx-auto px-"/>       
      </div>
        <Body />
        <Productslist/>
        <About/>
        <Reviews/>
        <Contactus/>
    </>
  )
}

export default Homepage