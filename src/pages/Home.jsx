import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/products"
import Slider from "../components/Slider"

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar/>
      <Slider />
      <Categories />
      <Products category="" filters="" sort="" />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
