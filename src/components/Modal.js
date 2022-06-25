import React from 'react';
/*
Receive : 
    modalId, title, a callBack to execute when submit is press
    submitText, cancelText
*/
const Modal = (props) => {
    return (
        <div className="modal fade" id={props.modalId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Modal Content...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">{props.submitText}</button>
                        <button type="button" className="btn btn-success">{props.cancelText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;