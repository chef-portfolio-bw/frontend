import React, { useState, useEffect } from "react";
import { useDispatch, connect } from 'react-redux';
//import local
import ChefCard from "./ChefCard";
import NewChefPost from './NewChefPost';
import "./ChefStyling.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { FETCH_POSTS_SUCCESS } from "../actions";

// import { Route, Link } from "react-router-dom";

const ChefData = props => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  // ========
  useEffect(() => {
    // setData(chefs);
    axiosWithAuth()
      .get("/api/posts/all")
      .then(res => {
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data })
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
      <NewChefPost/>
      <div className="Chef-Card">
        {props.chefPosts.map(chef => {
          return (
            <ChefCard
              id={chef.id}
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

const mapStateToProps = (state) => {
  return {chefPosts: state.chefPosts}
}

export default connect(mapStateToProps, {})(ChefData);
