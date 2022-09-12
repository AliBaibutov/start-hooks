import React from "react";
import Card from "../common/Card";

const withFunctions = (Component) => () => {
    const isAuth = localStorage.getItem("auth");
    const handleLogin = () => {
        if (!isAuth) {
            localStorage.setItem("auth", "token");
        }
    };
    const handleLogOut = () => {
        if (isAuth) {
            localStorage.removeItem("auth");
        }
    };
    return (
        <Card>
            <Component
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
            />
        </Card>
    );
};

export default withFunctions;
