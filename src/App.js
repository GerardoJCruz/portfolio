
import Navigation from './screens/NavigationBar';
import Header from './screens/Header';
import AboutMe from './screens/AboutMe';
import Technologies from './screens/Technologies';
import Portfolio from './portfolio/Portfolio';
import ContactForm from './screens/ContactForm';
import Footer from './screens/Footer';

const App = () => {
  return (
    <div className="App" >
      <Navigation />
      <Header/>
      <AboutMe/>
      <Technologies/>
      <Portfolio/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
