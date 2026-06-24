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
import BookYourFreeTrial2 from './components/BookYourFreeTrial2'
import BookYourFreeTrial from './components/BookYourFreeTrial'
import GetInTouchWithUs from './components/GETINTOUCHWITHUS'
import OurBusinessVerticals from './components/ OurBusinessVerticals'


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
      <OurBusinessVerticals />
      <BookYourFreeTrial />
      <GoldsGym goldsGymFitnessInstitute={goldsGymFitnessInstitute} />
      <Testimonials />
      <GetInTouchWithUs />
      <BookYourFreeTrial2 />
      <Footer />
    </div>
  )
}
