import React from "react";
//import local
//import axios from "axios";
import chefs from "../data/data";
import ChefCard from "./ChefCard";

const RecipeList = () => {
  const [data, setData] = React.useState([]);

  // ========
  React.useEffect(() => {
    setData(chefs);

    //     // axios
    //     //   .post("chefs")
    //     //   .then(res => {
    //     //     console.log(res);
    //     //   })
    //     //   .catch(err => {
    //     //     console.log(err);
    //     //   });
  }, []); // end of useEffect make sure to add an array of the dependency

  // =========

  return (
    <div>
      {data.map(chef => {
        return (
          <ChefCard
            name={chef.name}
            location={chef.location}
            email={chef.email}
            bio={chef.bio}
            posts={chef.posts}
            post_titles={chef.posts.map(post => {
              return post.title;
            })}
          />
        );
      })}
      <h1> RecipeList</h1>
    </div>
  );
};

export default RecipeList;
