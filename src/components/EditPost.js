// import React, { useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import { useDispatch } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { editPost } from '../actions';

// const EditPlayer = props => {
//     const classes = useStyles();
//     const [post, setPost] = useState({});
//     const dispatch = useDispatch();
//     const params = useParams();
//     const history = useHistory();

//     const changeHandler = e => {
//         setPost({ ...post, [e.target.name]: e.target.value });
//     }

//     return (
//         <div>
//             <form onSubmit={() => dispatch(editPost())}>

//             </form>
//         </div>
//     )
// }