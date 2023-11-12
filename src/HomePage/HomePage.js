import Blog from "./Blog";
import Footer from "./Footer";
import Lab from "./Lab";
import Leading from "./Leading";
import Navbar from './Navbar';
import Project from "./Project";
import Section from "./Section";
import Stuff from "./Stuff";
import Subscribe from "./Subscribe";
import Team from "./Team";
import Work from "./Work";
import "../App.css";

function HomePage() {
  return (
    <div HomePage="App">

      <Navbar/>
      <Leading/>
      <Section/>
      <Work/>
      <Stuff/>
      <Team/>
      <Lab/>
      <Project/>
      <Blog/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default HomePage;
