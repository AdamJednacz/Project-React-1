import React from 'react';

import {style} from "../App";

const Title = ({h1,p}) => {
    return (
        <section className="bg" style={style}>
            <div className="container title_container" >
                <div className="card">
                    <h1>{h1}</h1>
                    <p>{p}</p>
                </div>
            </div>
        </section>
    );
};

export default Title;