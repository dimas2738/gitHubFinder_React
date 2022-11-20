import React, {Fragment, useContext, useEffect, useState} from "react";
import Spinner from "../layout/Spinner";
import {  useParams, Link} from 'react-router-dom';
import GithubContext from "../context/github/GithubContext";




export const User = (props) => {
    const githubContext=useContext(GithubContext)
    const {getUser,user,loading}=githubContext
    const param = useParams()
    const username=param.username
    useEffect(()=>{
        getUser(username)
        },[]

    )
    let {
        login,
        avatar_url,
        html_url,
        name,
        company,
        blog,
        location,
        email,
        hireable,
        bio,
        twitter_username,
        public_repos,
        public_gists,
        followers,
        following
    } = user

    if (loading){
        return <Spinner/>
    }

    return (



        <Fragment>
            <Link className='btn btn-light' to='/'>Back to search</Link>

            <div className='card grid-2'>

                <div className='all-center'>
                    <img src={avatar_url}
                         className='round-img'
                         alt=''
                         style={{width: '150px'}}
                    />

                    <h1>{name}</h1>
                    {location && (<p>Location:{location}</p>)}
                    Hireable: {hireable ? (<i className='fas fa-check text-success'/>) :
                    (<i className='fas fa-times-circle text-danger'/>)}
                </div>


                <div>
                    {bio && (
                        <Fragment>
                            <h3> Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className='btn btn-dark my-1'>
                        Visit GitHub
                    </a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username:</strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company:</strong> {company}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website:</strong> {blog}
                            </Fragment>}
                        </li>
                        <li>
                            {twitter_username && <Fragment>
                                <strong>Twitter:</strong> {twitter_username}
                            </Fragment>}
                        </li>
                        <li>
                            {email && <Fragment>
                                <strong>Mail:</strong> {email}
                            </Fragment>}
                        </li>

                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">
                    Followers:{followers}
                </div>
                <div className="badge badge-success">
                    Following:{following}
                </div>
                <div className="badge badge-light">
                    <Link to={`/users/${login}/repos`} >Public Repos:{public_repos}</Link>
                </div>
                <div className="badge badge-dark">
                   Public Gists:{public_gists}
                </div>
            </div>
        </Fragment>
            )
            }

            export default User












