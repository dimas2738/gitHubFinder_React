import './App.css';
import React, {Fragment, useState} from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import UserSearch from "./components/users/UserSearch";
import Alert from "./components/layout/Alert";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./components/layout/About";
import User from "./components/users/User";
import {Repo} from "./components/repos/Repo";
import GithubState from "./components/context/github/GithubState";
import AlertState from "./components/context/alert/AlertState";
import Home from "./components/layout/Home";
import NotFound from "./components/layout/NotFound";


const App = () => {

    return (
        <GithubState>
            <AlertState>
            <BrowserRouter>
                <div className="App">
                    <Navbar title='GitHub Finder' icon='fab fa-github'/>
                    <Alert alert={alert}/>
                    <div className="container">
                        <Routes>
                            <Route exact path='/' element={<Home/>}  />
                            <Route exact path='/about' element={<About/>}/>
                            <Route exact path="/user/:username" element={<User/>}/>
                            <Route exact path="/users/:username/repos" element={<Repo/>}/>
                            <Route   path="*" element={<NotFound/>} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
            </AlertState>
        </GithubState>
    )
}

export default App;
