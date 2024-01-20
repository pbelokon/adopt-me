import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../components/fetchBreedList";

export default function useBreeds(animal) { 
    const results = useQuery({queryFn: fetchBreedList, queryKey: ["breeds", animal]})
    
    return [results?.data?.breeds ?? [], results.status]; 
}