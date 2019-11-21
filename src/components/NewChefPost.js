import React, { useState, useEffect } from "react";
import axios from "axios";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({})


const NewChefPost = props => {
    const [chefLocation, setChefLocation] = useState('');
    const [chefName, setChefName] = useState('');
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        // Redux Action performed here.
        // export const POST_CHEFS_START = 'POST_CHEFS_START';
        // export const POST_CHEFS_SUCCESS = 'POST_CHEFS_SUCCESS';
        // export const POST_CHEFS_FAILURE = 'POST_CHEFS_FAILURE';
        // export const postChefs = data => dispatch => {
        //     dispatch({ type: POST_CHEFS_START });
        //     axios
        //         .post('https://chef-portfoliosis.herokuapp.com/api/posts', data)
        //         .then(res => console.log('New Chef Post Created', res))
        //         .catch(err => dispatch({ type: POST_CHEFS_FAILURE, payload: err.response }));
        // };
    };

    return (
        <div className={classes.signInContainer}>
            <form onSubmit={handleSubmit} className={classes.leftDiv}>
                <TextField
                    label="Location"
                    className={classes.location}
                    type="text"
                    name="Location"
                    placeholder="Location"
                    value={chefLocation}  //axios call
                    onChange={e => setChefLocation(e.target.value)}
                />

                <TextField
                    label="Chef Name"
                    className={classes.chefName}
                    type="text"
                    name="Chef Name"
                    placeholder="Chef Name"
                    value={chefName} //axios call
                    onChange={e => setChefName(e.target.value)}
                />

                <TextField
                    label="Recipe Name"
                    className={classes.recipeName}
                    type="textarea"
                    name="recipe_name"
                    placeholder="Recipe Name"
                    value={recipeName} //axios call
                    onChange={e => setRecipeName(e.target.value)}
                />

                <TextField
                    label="Ingredients"
                    className={classes.ingredients}
                    type="textarea"
                    name="Ingredients"
                    placeholder="Ingredients"
                    value={ingredients} // axios call
                    onChange={e => setIngredients(e.target.value)}
                />

                <Button type="submit" className={classes.submitForm}> Post </Button>
            </form>

            {/* <div className={classes.rightDiv}>
                <div className={classes.rightTop}>
                    <img className={classes.imgOne} src={Cheesecake} alt="Cheesecake" />
                    <img className={classes.imgTwo} src={ChipsAndGuacamole} alt="chips and guacamole" />
                </div>
                <img className={classes.imgThree} src={KnifeAndSteel} alt="knife on board" />
            </div> */}
        </div>
    );
};

export default NewChefPost;
