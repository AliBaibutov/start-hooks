import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return !isAuth ? (
        <button onClick={onLogin} className="btn btn-success">
            Войти
        </button>
    ) : (
        <button onClick={onLogOut} className="btn btn-danger">
            Выйти из системы
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;
