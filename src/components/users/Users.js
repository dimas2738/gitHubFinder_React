import React, {useContext} from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

import GithubContext from "../context/github/GithubContext";

const Users = () => {

    const githubcontext=useContext(GithubContext)
    const {loading,users}=githubcontext
    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div style={UsersStyle}>
                {users.map(user => (
                    <UserItem user={user} key={user.id}/>
                ))}
            </div>

        );
    }

}

const UsersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users;
