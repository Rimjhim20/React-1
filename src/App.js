import "./App.css";
import Image from "./Image";
import Heading from "./Heading";
import Pic from "./img/a.jpg";
import Pic1 from "./img/b.png";


function App() {
  return (
    <div>
      {/* <Heading name="ABC" school="Amity" city="Patna" />
      <Heading name="DCA" school="BIT" city="Patna" /> */}
      <Heading name="Rimjhim"></Heading> 
      <h1>Props Homework</h1>
      <Image poster ={Pic}/>
      <Image poster ={Pic1}/>
  
    </div>
  );
}
export default App;