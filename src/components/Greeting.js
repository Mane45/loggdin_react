import Guest from "./Guest";
import User from "./User";

function Greeting(props) {
    console.log(props.isLoggedIn);
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <User />
    }
    return <Guest val={isLoggedIn}/>
}

export default Greeting;