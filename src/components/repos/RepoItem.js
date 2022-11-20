import React, {Component, Fragment, useEffect, useState} from "react";
import Spinner from "../layout/Spinner";
import {useSearchParams, useParams, Link} from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import Repo from "./Repo";


export const RepoItem = (props) => {

    let {full_name, html_url, description} = props.repos

    return <li>
        <a href={html_url}>
            <strong>{full_name}</strong>
        </a>
        <div>
            <strong>Description: </strong>
            {description};
        </div>
    </li>
}
RepoItem.propTypes = {
    repos: PropTypes.array.isRequired,
}
export default RepoItem












