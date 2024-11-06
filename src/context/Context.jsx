import react, { createContext, useState } from "react";
import { acteurs, projets, actualites } from "../assets/assets";

export const Context = createContext()

const ContextProvider = (props) => {

  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const value = {
    acteurs,
    projets,
    actualites,
    search, setSearch, showSearch, setShowSearch
  }

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider