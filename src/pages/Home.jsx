import HeroCarousel from "../components/HeroCarousel";
import Main from "../components/maine";
import GoldsGym from "../components/GoldsGymFitnessInstitute";
import Testimonials from "../components/Testimonials";
import BookYourFreeTrial2 from "../components/BookYourFreeTrial2";
import BookYourFreeTrial from "../components/BookYourFreeTrial";
import GetInTouchWithUs from "../components/GETINTOUCHWITHUS";
import ComingSoon from "../components/PreSale";
import Programs from "../components/OurPrograms";
import slideLocal from "../assets/slide1.png";
import rbkBanner from "../assets/slide2.png";
import whatsappImg from "../assets/slide3.png";
import statsImg from "../assets/stats1.png";
import goldsGymFitnessInstitute from "../assets/GymFitnessInstitute.jpg";

export default function Home() {
  return (
    <>
      <HeroCarousel
        slides={[rbkBanner, slideLocal, whatsappImg]}
      />
      <Main statsImg={statsImg} />
      <BookYourFreeTrial />
      <ComingSoon />
      <Programs />
      <GoldsGym
        goldsGymFitnessInstitute={goldsGymFitnessInstitute}
      />
      <Testimonials />
      <GetInTouchWithUs />
      <BookYourFreeTrial2 />
    </>
  );
}