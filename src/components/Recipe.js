import React from "react";
// the actual chef card.
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";
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
    backgroundColor: red[500]
  }
}));

const Recipe = () => {
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
        title="hello" // {chef.name}
        subheader=" date of creation"
      />
      {/* end of <CardHeader/>  */}
      <CardMedia
        className={classes.media}
        title="img title"
        image="https://picsum.photos/200"
        alt="where the img actually will go"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is Lorem ipsum impressive paella is a perfect party dish and a
          fun meal to cook together with your guests. Add 1 cup of frozen peas
          along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="archive">
          <ArchiveIcon />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon />
        </IconButton>
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
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
            {/* add dynamic instructions */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

///end of card
//probably will need to bring in a chef object in here
// const Chef = () => {
//     return (
//         <div></div>
//     );
// };

export default Recipe;
