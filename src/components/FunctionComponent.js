import React from 'react'

const FunctionComponent = (props) => {
    // const fendi = props.name;

    return (
        <div>
            <ul>
            {props.name.map(el => (
                <li key={el.id}>{el.title}</li>
            ))}
            </ul>

      </div>
    )
}

export default FunctionComponent;

