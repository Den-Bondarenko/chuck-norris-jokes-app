import './App.scss';
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {HeroSectionComponent} from "./components/HeroSectionComponent/HeroSectionComponent";

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <HeroSectionComponent/>
    </div>
  );
}

export default App;
