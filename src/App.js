
import Pet from "./Pet";
import SearchParams from './SearchParams'
import "./style.css";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havaneees" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Bream" animal="Dog" breed="Wheaten Terrier" /> */}
          <SearchParams />
    </div>
  );
};

export default App;