import React from 'react';


const Loading = () => {
    return (
        <section className="loading-container">
            <div className="loading-text">
                Loading
                <span className="loading-dot">.</span>
                <span className="loading-dot">.</span>
                <span className="loading-dot">.</span>
            </div>
            <div className="loading-circle"></div>
        </section>
    );
};

export default Loading;
