import React, { useState } from "react";
// import axios from "axios";
import { useDispatch } from 'react-redux';
import { postChefs } from '../actions';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Cheesecake from '../images/Cheesecake.jpg';
import ChipsAndGuacamole from '../images/ChipsAndGuacamole.jpg';
import KnifeAndSteel from '../images/KnifeAndSteel.jpg';

const useStyles = makeStyles({
        FormContainer: {
        marginTop: "5%",
        display: "flex",
        flexDirection: "row"
    },

    leftDiv: {
        display: "flex",
        flexDirection: "column",
        width: "40%",
        marginTop: "10%",
        marginLeft: "10%"
    },

    username: {
        color: "white",
        marginTop: "25%",
        marginBottom: "5%"
    },

    password: {
        color: "white",
        marginBottom: "5%"
    },


    submitForm: {
        color: "white",
        backgroundColor: "#CA7512",
        marginTop: "10%"
    },

    rightDiv: {
        width: "40%",
    },

    imgOne: {
        width: "40%",
        borderRadius: "10px"
    },

    imgTwo: {
        width: "40%",
        marginLeft: "4%",
        borderRadius: "10px"
    },

    imgThree: {
        width: "84%",
        marginTop: "4%",
        maxHeight: "300px",
        borderRadius: "10px"
    },
})


const NewChefPost = props => {
    const [chef_location, setChefLocation] = useState('');
    const [chef_name, setChefName] = useState('');
    const [recipe_title, setRecipeName] = useState('');
    const [item_ingredients, setIngredients] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(postChefs({
            chef_name, chef_location, recipe_title, item_ingredients}));
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
        <div className={classes.FormContainer}>
            <form onSubmit={handleSubmit} className={classes.leftDiv}>
                <TextField required
                    label="Location"
                    className={classes.location}
                    type="text"
                    name="Location"
                    placeholder="Location"
                    value={chef_location}  //axios call
                    onChange={e => setChefLocation(e.target.value)}
                />

                <TextField required
                    label="Chef Name"
                    className={classes.chefName}
                    type="text"
                    name="Chef Name"
                    placeholder="Chef Name"
                    value={chef_name} //axios call
                    onChange={e => setChefName(e.target.value)}
                />

                <TextField required
                    label="Recipe Name"
                    className={classes.recipeName}
                    type="textarea"
                    name="recipe_name"
                    placeholder="Recipe Name"
                    value={recipe_title} //axios call
                    onChange={e => setRecipeName(e.target.value)}
                />

                <TextField required
                    label="Ingredients"
                    className={classes.ingredients}
                    type="textarea"
                    name="Ingredients"
                    placeholder="Ingredients"
                    value={item_ingredients} // axios call
                    onChange={e => setIngredients(e.target.value)}
                />

                <Button type="submit" className={classes.submitForm}> Post </Button>
            </form>

            <div className={classes.rightDiv}>
                <div className={classes.rightTop}>
                    <img className={classes.imgOne} src={Cheesecake} alt="Cheesecake" />
                    <img className={classes.imgTwo} src={ChipsAndGuacamole} alt="chips and guacamole" />
                </div>
                <img className={classes.imgThree} src={KnifeAndSteel} alt="knife on board" />
            </div>
        </div>
    );
};

export default NewChefPost;
