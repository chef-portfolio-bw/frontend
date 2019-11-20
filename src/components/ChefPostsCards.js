import React from "react";
// this page should house a card containing info about the chef posts
// there should be a link that routes to this page
// the link should be implemented in Chefdata

// the actual chef card.
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { blue } from "@material-ui/core/colors";
import {
  Typography,
  IconButton,
  Avatar,
  Collapse,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ArchiveIcon from "@material-ui/icons/Archive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// if we want to import stretch
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";

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
    backgroundColor: blue[500]
  }
}));

const ChefPostsCards = ({ name, location, email, bio, posts }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        title="title"
        subheader="location"
      />
      {/* end of <CardHeader/>  */}
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/200"
        alt="where the img actually will go"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* this is inside the dropdown! */}
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{/* add dynamic instructions */}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ChefPostsCards;
