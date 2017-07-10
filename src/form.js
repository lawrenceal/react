import React from 'react';

const NotControlFrom = () => {
    return (<input type="text" placeholder="not in control"/>);
};

const ControlForm = (props) => {
    return (<input type="text" value={props.value}/>);
};

const DefaultControlFrom = () => {
    return (<input type="text" defaultValue="default in control"/>);
};

const TextareaFrom = (props) => {
    return (<textarea value={props.value}/>);
};

const SelectForm = (props) => {
    return (
        <select value={props.value}>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
        </select>
    );
};

const Form = () => {

    return (
        <div>
            <div><ControlForm value="in control"/></div>
            <div><NotControlFrom/></div>
            <div><DefaultControlFrom/></div>
            <div><TextareaFrom value="textarea value"/></div>
            <div><SelectForm value="B"/></div>
        </div>
    );
};

export default Form;