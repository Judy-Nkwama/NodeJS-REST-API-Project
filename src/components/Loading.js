import React from 'react';

const Loading = props => {

    //props.main_block.style={ background : "blue" };

    return(
        <div className={`loading position-absolute ${ !props.data || props.data.length < 1 ? "d-flex" : "d-none" } 
            w-100 h-100 flex-column justify-content-center align-items-center border border-dark bg-light opacity-75`}
        >
            <div className="spinner-border text-primary mb-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <span>Loading...</span>
        </div>
    );
}

export default Loading;