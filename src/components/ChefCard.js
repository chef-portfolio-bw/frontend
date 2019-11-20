import React from "react";
// the actual chef card.
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
  CardActions,
  Button
} from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";

//import { BrowserRouter as Router, Route } from "react-router-dom";
//import ChefPostsCards from "./ChefPostsCards";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 245
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
    backgroundColor: red[500]
  }
}));

const ChefCard = ({ name, location, bio, post_titles, id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={location}
      />
      {/* end of <CardHeader/>  */}
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/200"
        alt="where the img actually will go"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <h3>Biography: {id}</h3>
          {bio}
          <h4>{post_titles}</h4>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button type="submit" className={classes.button}>
          See Posted Recipes
        </Button>
      </CardActions>
    </Card>
  );
};

export default ChefCard;

// <IconButton aria-label="delete">
//   <DeleteIcon />
// </IconButton>
