import React from 'react';

const Button = (props) => {
    const {submit, loading, children} = props;
    return (<button onClick={submit} disabled={ loading ? "disabled" : null } className="rt-dg">
        { loading && <i className="loading"></i> }
        { children }
    </button>);
};

export default Button;