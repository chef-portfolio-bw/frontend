import React, { Component } from 'react';

// basic private routes nothing will work *yet*

const PrivateRoute = ({ component: Component, ...rest }) => {
    // const userLogged = useSelector(state => state.userReducer.userLogged);
    return (
        //delete this div when working!!
        <div></div>
        // <Route 
        // {...rest}
        // render={props => {
        //     if(localStorage.getItem("token") && userLogged) {
        //         return <Component {...props} />;
        //     } else {
        //         return <Redirect to="/login" />;
        //     }
        // }}
    );
};

export default PrivateRoute;