import React, {Fragment} from "react";
import UserSearch from "../users/UserSearch";
import Users from "../users/Users";



const Home=()=> {
        return (
            <Fragment>
                <UserSearch  />
                <Users />
            </Fragment>
          )
    }

export default Home;
