import './App.css'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import Footer from './components/Footer'
import slideLocal from './assets/slide1.png'
import rbkBanner from './assets/slide2.png'
import whatsappImg from './assets/slide3.png'
import statsImg from './assets/stats1.png'
import Main from './components/maine'

export default function App() {
  return (

    <div className="app-root">
      <Header />
      <HeroCarousel slides={[
        rbkBanner,
        slideLocal,
        whatsappImg
      ]} />
      <Footer />
      <Main statsImg={statsImg} />
    </div>
  )
}
