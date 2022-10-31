import { useState} from 'react';

const users = [
    {
        username: 'Admin',
        password: '456'
    },
    {
        username: 'User1',
        password: '123'
    },
    {
        username: 'User2',
        password: '789'
    }
];

function Guest(props) {
    //console.log(props)
    const [propsval, setPropsval] = useState(props);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username,
            password
        }
        console.log(user);
        users.forEach(item => {
            console.log(item);
            if(item.username === user.username && item.password === user.password){
                console.log(true);
                //console.log(props);
                //props.val = !props.val
                setPropsval(!props.val);
                console.log(propsval);
            } else console.log(false);
        }) 

    }

    return (
        <>
        <h1>LogIn</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" name="username" onChange={e => handleChangeUsername(e)} required/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={e => handleChangePassword(e)} required/>
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Guest;