"use client";
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../../components/Navbar'
// import About from '../../components/About'
import Carousel from '../../components/Carousel'
import Contact from '../../components/Contact'
import Product from '../../components/Product'




export default function Home() {
  return (
    <main>

      <Navbar/>
      <Carousel/>
      <br />
      <br />
      <br />
      <Product/>
      <br />
      <br />
      <br />
      <Contact />
      
    </main>
  )
}
