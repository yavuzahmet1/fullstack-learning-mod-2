import React, { createContext, useState } from "react";
import axios from "axios";

//!context alanı aç

export const RecipeContext = createContext();

const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

// https://developer.edamam.com/admin/applications

const RecipeProvider = ({ children }) => {
  //! login ve privateRouter için stateler

  const [user, setUser] = useState(localStorage.getItem("username") || "");
  const [pass, setPass] = useState(localStorage.getItem("password") || "");

  //! header home ve recipecard comp. için
  const [yemekler, setYemekler] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getirData = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(url);
      // console.log(data.hits);
      setYemekler(data.hits);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };


if(error){
  return <p>Herhangi bir hata var...</p>
}

if(loading){
  return <p>loading......</p>
}


  return (
    <RecipeContext.Provider
      value={{
        setQuery,
        setMealType,
        getirData,
        yemekler,
        setUser,
        setPass,
        user,
        pass,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
