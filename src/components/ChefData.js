import React, { useState, useEffect } from "react";
//import local
import axios from "axios";
//import chefs from "../data/data";
import ChefCard from "./ChefCard";
import "./ChefStyling.css";

const ChefData = () => {
  const [data, setData] = useState([]);

  // ========
  useEffect(() => {
    // setData(chefs);
    axios
      .get("http://localhost:5000/api/chefs")
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // end of useEffect make sure to add an array of the dependency

  // =========

  return (
    <div>
      <div className="Chef-Card">
        {data.map(chef => {
          return (
            <ChefCard
              id={chef.id}
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
      </div>
      <h1> RecipeList</h1>
    </div>
  );
};

export default ChefData;
