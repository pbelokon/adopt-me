import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Carousel from "../Carousel";
import fetchPet from "./fetchPet";
import ErrorBoundary from "../ErrorBoundery";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AdoptedPetContext from "../AdoptedPetContext";
import Model from "../Model";

function Details() {
  const [showModel, setShowModal] = useState(false);
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: fetchPet,
    queryKey: ["details", id],
  }); // if you don't have it in your cache fetch it

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdopetedPet] = useContext(AdoptedPetContext);
  // _, means this can be what ever I don't care about it

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">💫</h2>
      </div>
    );
  }

  const pet = data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModel ? (
          <Model>
            <h1>Would you like to adopt {pet.name}? </h1>
            <div className="buttons">
              {" "}
              <button
                onClick={() => {
                  setAdopetedPet(pet), navigate("/");
                }}
              >
                Yes{" "}
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </Model>
        ) : null}
      </div>
    </div>
  );
}

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
