import React from 'react';

function FancyCheckbox(props) {
    var { checked, ...other } = props;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    return (
        <div {...other} className={fancyClass} />
    );
}

export default FancyCheckbox;

