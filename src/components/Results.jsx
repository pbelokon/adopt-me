import Pet from "../Pet";

export default function Results({pets}) {
    return ( 
      <div className="search">
         {pets.length ?  pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
          id={pet.id}
          key={pet.id}
        />
      )) : <h1>No Pets</h1>}
      </div>
    )
}