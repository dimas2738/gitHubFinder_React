import React, {useReducer} from "react";
import GithubReducer from './GithubReducer'
import GithubContext from './GithubContext'
import {
    SEARCH_USERS,
    GET_USER,
    GET_USER_REPOS,
    SET_LOADING,
    SET_ALERT,
    CLEAR_USERS,
    REMOVE_ALERT
} from '../types'
import axios from "axios";

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,

    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    //
    let clearUsers = () => {
      dispatch({type: CLEAR_USERS})
    }

//
    let getUserRepos = async username => {
        setLoading( );
        const res = await axios.get(`https://api.github.com/users/${username}/repos `);
        dispatch({type:GET_USER_REPOS, payload:res.data})

    }
    //
    const getUser = async username => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username} `);
        dispatch({
            type:GET_USER,
            payload:res.data})

    }

    //
    const searchUsers = async text => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text} `);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })


    }
    //
    const setLoading = () => dispatch({type: SET_LOADING})

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                alert: state.alert,
                setLoading: state.setLoading,
                searchUsers,
                getUser,
                clearUsers,
                getUserRepos

            }}
        >
            {props.children}


        </GithubContext.Provider>
    )
}
export default GithubState