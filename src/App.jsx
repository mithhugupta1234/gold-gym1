import './App.css'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import Footer from './components/Footer'
import slideLocal from './assets/slide1.png'
import rbkBanner from './assets/slide2.png'
import whatsappImg from './assets/slide3.png'
import statsImg from './assets/stats1.png'
import goldsGymFitnessInstitute from './assets/GymFitnessInstitute.jpg'
import Main from './components/maine'
import GoldsGym from './components/GoldsGymFitnessInstitute'
import Testimonials from './components/Testimonials'
import BookYourFreeTrial from './components/BookYourFreeTrial'

export default function App() {
  return (

    <div className="app-root">
      <Header />
      <HeroCarousel slides={[
        rbkBanner,
        slideLocal,
        whatsappImg
      ]} />
      
      <Main statsImg={statsImg} />
      <BookYourFreeTrial />
      <GoldsGym goldsGymFitnessInstitute={goldsGymFitnessInstitute} />
      <Testimonials />
      <Footer />
    </div>
  )
}
