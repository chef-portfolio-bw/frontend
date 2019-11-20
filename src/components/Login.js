import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Cheesecake from '../images/Cheesecake.jpg'
import ChipsAndGuacamole from '../images/ChipsAndGuacamole.jpg'
import KnifeAndSteel from '../images/KnifeAndSteel.jpg'


const useStyles = makeStyles({

    signInContainer: {
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

    checkBox: {
        color: "white",
        marginBottom: "5%"
    },

    logIn: {
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


const Login = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(loginUser(username, password));
    };

    return (
        <div className={classes.signInContainer}>
            <form onSubmit={handleSubmit} className={classes.leftDiv}>
                <TextField
                    className={classes.username}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    className={classes.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <label>
                    <Checkbox
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                        className={classes.checkBox}
                    />Remember Me
                </label>
                <Button type="submit" className={classes.logIn}>Log In</Button>
                <p>
                    Don't have an account? <Link to="/register">Sign up now!</Link>
                </p>
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

export default Login;
