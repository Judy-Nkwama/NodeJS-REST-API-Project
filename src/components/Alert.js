import React from 'react';

const Alert = props => {
    return (
        <div className={
            `alert alert-danger alert-dismissible fade show position-absolute 
            m-2 end-0 bottom-0 ${!props.show ? "d-none" : ""}`
        } role="alert">

            <>{props.message}</>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        
        </div>
    );
};

export default Alert;