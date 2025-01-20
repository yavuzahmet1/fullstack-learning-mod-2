import React from "react";
import AppRouter from "./router/AppRouter";
import RecipeProvider from "./context/RecipeProvider";




const App = () => {
 

   return (
     <RecipeProvider>
       <AppRouter />
     </RecipeProvider>
   );
   
  
  
};

export default App;
