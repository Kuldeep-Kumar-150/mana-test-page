import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MyNav from './components/MyNav';
import HeroSection from './components/HeroSection'
import SecondHome from './components/SecondHome';
import Homes from './components/Homes';
import OwnJoy from './components/OwnJoy';
import Slider from './components/Slider';
import MissOut from './components/MissOut';
import AsFeatured from './components/AsFeatured';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='bg_image'>
        <MyNav />
        <HeroSection />
      </div>
      <SecondHome />
      <Homes />
      <OwnJoy />
      <Slider />
      <MissOut />
      <AsFeatured />
      <Footer />
    </>
  );
}

export default App;
