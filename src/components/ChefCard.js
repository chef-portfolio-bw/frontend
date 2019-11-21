import React from "react";
// the actual chef card.
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions';
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import {
  Typography,
  IconButton,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";

import { Route, Link } from "react-router-dom";
import ChefPostsCards from "./ChefPostsCards";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "1% auto",
    width: 300,
    height: 450,
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500],
    fontSize: 10
  }
}));

const ChefCard = ({ name, location, recipe, image, ingred, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removePost = id => {
    console.log('this is the id', id)
    dispatch(deletePost(id));
  }
  const editPost = id => {
    dispatch(editPost(name, location, recipe, ingred));
  }
  return (
    <div className="card-container">
      <Card id={id} className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              Chef
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => editPost(name, location, recipe, ingred)}>
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={location}
        />
        {/* end of <CardHeader/>  */}
        <CardMedia
          className={classes.media}
          image={image}
          alt="where the img actually will go"
        />
        <CardContent>
          <h3>{recipe}</h3>

          <Typography paragraph>Ingredients: {ingred}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
          <IconButton onClick={() => removePost(id)}>
            <DeleteIcon />
          </IconButton>
          <Link to="/path" type="submit" className={classes.button}>
            See Posted Recipes
          </Link>
        </CardActions>
      </Card>
      <Route path="/path" component={ChefPostsCards} />
    </div>
  );
};

export default ChefCard;
