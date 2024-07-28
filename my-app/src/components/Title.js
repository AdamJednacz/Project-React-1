import React from 'react';
import {Link} from "react-router-dom";
import {style} from "../App";

const Title = ({h1,p}) => {
    return (
        <section className="bg" style={style}>
            <div className="container" >
                <div className="card">
                    <h1>{h1}</h1>
                    <p>{p}</p>
                </div>
            </div>
        </section>
    );
};

export default Title;