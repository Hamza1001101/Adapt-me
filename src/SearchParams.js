import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["brid", "cat", "dog", "rabbit", "tiger"];
const SearchParams = () => {
  const [location, setLocation] = useState();
  const [animal, updateAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const [pets, setPets] = useState([]);
  const breads = [];

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
          <button>Submit</button>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="bread">
          Bread
          <select
            id="animal"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {ANIMALS.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          bread={pet.animal}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
