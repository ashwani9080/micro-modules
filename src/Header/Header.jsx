import React from 'react';


export default function Header(props) {
    const { title } = props;
    return (
        <div>
        <div style={{
            margin:"10px",
            padding:"10px",
            textAlign:"center",
            backgroundColor:"blue"
        }}>
            <h1>{title}</h1>
        </div>
        </div>
    )
}
