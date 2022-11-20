import React, {Fragment} from "react";
import spinner from './spiner.gif'


const Spinner=()=> {

        return (
            <Fragment>

                   <img alt='img' src={spinner} style={{width:'200px', margin:'auto',
                   display:'block'}}/>

            </Fragment>)
    }


export default Spinner;
