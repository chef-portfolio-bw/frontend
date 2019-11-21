import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux';
//import local
import axios from "axios";
//import chefs from "../data/data";
import ChefCard from "./ChefCard";
import NewChefPost from './NewChefPost';
import "./ChefStyling.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ChefData = () => {
  const [data, setData] = useState([]);
  // const dispatch = useDispatch();

  // ========
  useEffect(() => {
    // setData(chefs);
    axiosWithAuth()
      .get("/api/posts/all")
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
       <NewChefPost />
      {/* {data.map(chef => {
        return (<div key={chef.id}>
          <h1>{chef.chef_name}</h1>
          <p>{chef.chef_location}</p>
          <p>{chef.recipe_title}</p>
          <img src={chef.item_photo} />
          <p>{chef.item_ingredients}</p>
        </div>
        )
      })} */}
      <div className="Chef-Card">
        {data.map(chef => {
          return (
            <ChefCard
              key={chef.id}
              name={chef.chef_name}
              location={chef.chef_location}
              recipe={chef.recipe_title}
              image={chef.item_photo}
              ingred={chef.item_ingredients}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChefData;
