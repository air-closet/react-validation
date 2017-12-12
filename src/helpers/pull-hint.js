import React, {Component} from 'react';

// TODO: Rework React.element appearance
module.exports = (error, value, rules, props) => {
    if (error) {
        error = React.isValidElement(error) ? error : error.split && error.split(':')[0];
    }

    return (error && rules[error] && rules[error].hint(value, props.states[props.name])) || error;
};