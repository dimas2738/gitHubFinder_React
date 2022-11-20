import React, {useState, useEffect, useContext} from "react";
import Spinner from "../layout/Spinner";
import {useParams} from 'react-router-dom';
import RepoItem from "./RepoItem";
import GithubContext from "../context/github/GithubContext";

export const Repo = (props) => {
    let param = useParams()
    const username = param.username
    const githubContext = useContext(GithubContext)

    const {loading, repos, getUserRepos} = githubContext
    useEffect(() => {
        getUserRepos(username)
    }, [])

    if  (loading) {
        return <Spinner/>
    }

    return (repos.map(rep => <RepoItem repos={rep}/>))
}

export default Repo












