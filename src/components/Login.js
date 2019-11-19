import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({

    signInContainer: {
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
        color: "white"
    },

    password: {
        color: "white"
    },

    checkBox: {
        color: "white"
    },

    logIn: {
        color: "white",
        backgroundColor: "#CA7512"
    },

    rightDiv: {
        width: "40%"
    },

    imgOne: {
        width: "40%"
    },

    imgTwo: {
        width: "40%"
    },

    imgThree: {
        width: "80%"
    },

})


const Login = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('', {
                username: username,
                password: password
            })
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('');
            })
            .catch(err => console.log(err));
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
            </form>

            <div className={classes.rightDiv}>
                <div className={classes.rightTop}>
                    <img className={classes.imgOne} src="https://source.unsplash.com/random" />
                    <img className={classes.imgTwo} src="https://source.unsplash.com/random" />
                </div>
                <img className={classes.imgThree} src="https://source.unsplash.com/random" />
            </div>
        </div>
    );
};

export default Login;


import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div className="user-form">
            <Form>
                <Field type="text" name="name" placeholder="name" />
                {touched.name && errors.name && (
                    <p className="errors">{errors.name}</p>
                )}
                <Field type="text" name="email" placeholder="email" />
                {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}

                <Field type="text" name="password" placeholder="password" />
                {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}

                <label className="checkbox-container">
                    Terms Of Service
          <Field required type="checkbox" name="terms" checked={values.terms} />
                    <span className="checkmark" />
                </label>
                <Field as="button" type="submit" name="submit">Submit!</Field>
            </Form>
            {users.map(u => (
                <ul key={u.id}>
                    <li>Name: {u.name}</li>
                    <li>Email: {u.email}</li>
                </ul>
            ))}
        </div>
    );
};
const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, terms }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required()
    }),
    handleSubmit(values, { setStatus }) {
        // values is our object with all our data on it
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => {
                setStatus(res.data);
                console.log(res);
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);
export default FormikUserForm;