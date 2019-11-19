import React from "react";
//import local
//import axios from "axios";
import chefs from "../data/data";

const RecipeList = () => {
  const [data, setdata] = React.useState(chefs);

  // ========
  React.useEffect(() => {
    console.log(data, "1");

    // axios
    //   .post("chefs")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, [chefs]); // end of useEffect make sure to add an array of the dependency

  // =========

  return <div></div>;
};

export default RecipeList;
