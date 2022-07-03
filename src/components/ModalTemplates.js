import React from 'react';
import { Modal } from './Modal';

export const LoginModal = () => {
    return(
        <Modal modalId="loginPopUp" title="Login" cancelText="Cancel" submitText="Login">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="exampleInputEmail1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
            </form>
        </Modal>
    );
};

export const ItemModal = props => {
    return(
        <Modal modalId="itemModal" title={props.title} cancelText="Cancel" submitText={props.subBtnTitle}>
            
        </Modal>
    );
};
