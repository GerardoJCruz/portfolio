
import Navigation from './screens/NavigationBar';
import Particles from './Particles';
import Header from './screens/Header';
import AboutMe from './screens/AboutMe';
import Technologies from './screens/Technologies';
import Portfolio from './portfolio/Portfolio';
import ContactMe from './screens/ContactMe';

const App = () => {
  return (
    <div className="App" >
      <Navigation />
      <Header/>
      <Particles style={{overflow: 'hiden'}}/>
      <AboutMe/>
      <Technologies/>
      <Portfolio/>
      <ContactMe/>
    </div>
  );
}

export default App;
