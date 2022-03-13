import { useState, useEffect} from "react";
import { json } from "stream/consumers";

function usePersistedState(key: string, initialState: any){
  const [state, setState] = useState(initialState)

  useEffect(() =>{
    localStorage.setItem(key, JSON.stringify(setState));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;