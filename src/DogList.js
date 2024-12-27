import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div>
      <h1>Meet Our Dogs</h1>
      <div>
        {dogs.map(dog => (
          <div key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              <img src={dog.src} alt={dog.name} />
              <h2>{dog.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
