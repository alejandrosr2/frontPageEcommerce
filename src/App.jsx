
import { useEffect } from 'react'
import './App.css'
import BestSeller from './components/bestSeller/BestSeller'
import BgPage from './components/bgPage'
import BlogNews from './components/blogNews/BlogNews'
import Description from './components/descriptionServices/Description'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import ProductCategory from './components/product-category/ProductCategory'
import AOS from "aos"
import "aos/dist/aos.css"
import { CartProvider } from './context/CartContext'
import { Toaster } from './components/ui/sonner'


function App() {

  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    )
    AOS.refresh();
  }, [])

  return (
    <>
        <div>
          <CartProvider>
            <BgPage/>
            <Navbar/>
            <Hero/>
            <Description/>
            <ProductCategory/>
            <BestSeller/>
            <BlogNews/>
            <Footer/>
            <Toaster/>
          </CartProvider>
        </div>
    </>
  )
}

export default App
