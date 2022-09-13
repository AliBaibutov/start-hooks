import React from "react";
import Card from "../common/Card";

const withFunctions = (Component) => () => {
    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = !!localStorage.getItem("auth");

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
