
import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
export default function Details() {
  const {id} = useParams(); 
  const {data, isLoading} = useQuery({queryFn: fetchPet, queryKey:["details", id], }); // if you don't have it in your cache fetch it


  if(isLoading) { 
    return (
      <div className="loading-pane">
        <h2 className="loader">💫</h2>
      </div>
    )
  }

  const pet = data.pets[0]; 

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{pet.animal} - {pet.breed} - {pet.city} - {pet.state}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  )
}
