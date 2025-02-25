import { useState } from "react";
export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        console.log('Logged In');
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log('Logged Out');
    }
    return (
        <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {isLoggedIn ? 'logged in':'is not logged in'}</div>       
        </div>
    )
}