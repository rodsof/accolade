import React, { useReducer } from 'react';

import postContext from './postContext';
import postReducer from './postReducer';
import { 
    POST_FORM, 
    GET_POSTS,
    ADD_POST,
    POST_ERROR,
    VALIDATE_POST,
    CURRENT_POST,
    DELETE_POST,
    GET_CREATOR,
    SPINNER_ON
} from '../../types';

import axiosClient from '../../config/axios';


const PostState = props => {

    const initialState = {
        posts : [],
        form : false,
        errorform: false,
        post: null, 
        message: null,
        creatorInfo: null,
        spinnerpost: null
    }

    // Dispatch 
    const [state, dispatch] = useReducer(postReducer, initialState)

    // CRUD

    const showForm = () => {
        dispatch({
            type: POST_FORM
        })
    }

    // Get posts
    const getPosts = async () => {
        dispatch({
            type: SPINNER_ON
        })
        try {
            const resp = await axiosClient.get('/api/posts');

            dispatch({
                type: GET_POSTS,
                payload: resp.data.posts
            })
        } catch (error) {
            const alert = {
                msg: 'Server error, please try again',
                categoria: 'alert-error'
            }
            
            dispatch({
                type: POST_ERROR,
                payload: alert
            })
        }
    }

    // Get creator info
    const getCreator = async id => {
        try {
            const resp = await axiosClient.get('/api/users', { params: { id }});
            dispatch({
                type: GET_CREATOR,
                payload: resp.data.user
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Add new post
    const addPost = async post => {
        console.log("entra")
        console.log(post);
        try {
            const resp = await axiosClient.post('/api/posts', post);
            console.log(resp);
            // Insertar post into state
            dispatch({
                type: ADD_POST,
                payload: resp.data
            })
        } catch (error) {
            const alert = {
                msg: 'Server error, please try again',
                categoria: 'alert-error'
            }
            
            dispatch({
                type: POST_ERROR,
                payload: alert
            })
        }
    }

    // Validate form 
    const showError = () => {
        dispatch({
            type: VALIDATE_POST
        })
    } 

    // Select Post clicked
    const currentPost = postId => {
        dispatch({
            type: CURRENT_POST,
            payload: postId
        })
    }

    // Delete post
    const deletePost = async postId => {
        try {
            await axiosClient.delete(`/api/posts/${postId}`);
            dispatch({
                type: DELETE_POST,
                payload: postId
            })
        } catch (error) {
            const alert = {
                msg: 'Server error, please try again',
                categoria: 'alert-error'
            }
            
            dispatch({
                type: POST_ERROR,
                payload: alert
            })
        }
    }


    return (
        <postContext.Provider
            value={{
                posts: state.posts,
                form: state.form,
                errorform: state.errorform,
                post: state.post,
                message: state.message,
                creatorInfo: state.creatorInfo,
                spinnerpost: state.spinnerpost,
                showForm,
                getPosts,
                addPost,
                showError,
                currentPost,
                deletePost,
                getCreator
            }}
        >
            {props.children}
        </postContext.Provider>
        
    )
}

export default PostState;