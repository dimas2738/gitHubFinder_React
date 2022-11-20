import { useContext, useState} from "react";
import GithubContext from '../context/github/GithubContext'
import AlertContext from '../context/alert/AlertContext'

const UserSearch = ( ) => {
    const githubContext= useContext(GithubContext);
    const alertContext= useContext(AlertContext);
    const {clearUsers,users,searchUsers}=githubContext;
    const {setAlert}=alertContext;
    const [text, setText] = useState('');

    let onChange = (e) => {
        setText(e.target.value);
    }

    let onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('please enter name...', 'light')
        } else {
             searchUsers(text);
            setText('')
        }
    }
    let clearUser = () => {
        clearUsers();
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text"
                       name='text'
                       placeholder='search user...'
                       value={text}
                       onChange={onChange}/>
                <input type={"submit"} value={'Search'} className='btn btn-dark btn-block'/>
            </form>
            {users.length>0 ? (
                <button onClick={clearUser} className='btn btn-light btn-block'>Clear</button>
            ) : ''}

        </div>
    )


}


export default UserSearch;
