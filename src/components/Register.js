import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Cheesecake from '../images/Cheesecake.jpg'
import ChipsAndGuacamole from '../images/ChipsAndGuacamole.jpg'
import KnifeAndSteel from '../images/KnifeAndSteel.jpg'

const useStyles = makeStyles({

    signUpContainer: {
        marginTop: "5%",
        display: "flex",
        flexDirection: "row",
    },

    leftDiv: {
        display: "flex",
        flexDirection: "column",
        width: "40%",
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

    email: {
        color: "white",
        marginBottom: "5%"
    },

    location: {
        color: "white",
        marginBottom: "5%"
    },

    checkBox: {
        color: "white",
        marginBottom: "5%"
    },

    signUp: {
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

const Register = () => {
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        email: "",
        location: ""
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    // const state = useSelector(state => state.reducer);

    const changeHandler = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(registerUser(newUser));
    };

    return (
        <div className={classes.signUpContainer}>
            <form onSubmit={handleSubmit} className={classes.leftDiv}>
                <TextField
                    className={classes.username}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={changeHandler}
                />
                <TextField
                    className={classes.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={changeHandler}
                />
                <TextField
                    className={classes.email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={changeHandler}
                />
                <TextField
                    className={classes.location}
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={newUser.location}
                    onChange={changeHandler}
                />
                <Button type="submit" className={classes.signUp}>Sign Up</Button>
                <p>
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </form>

            <div className={classes.rightDiv}>
                <div className={classes.rightTop}>
                    <img className={classes.imgOne} src={Cheesecake} alt="Cheesecake" />
                    <img className={classes.imgTwo} src={ChipsAndGuacamole} alt="Chips and Guacamole" />
                </div>
                <img className={classes.imgThree} src={KnifeAndSteel} alt="Knife on board" />
            </div>
        </div>
    );
};

export default Register;