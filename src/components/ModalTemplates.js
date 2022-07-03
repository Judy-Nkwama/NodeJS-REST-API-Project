import React from 'react';
import { Modal } from './Modal';

export const LoginModal = () => {
    return(
        <Modal modalId="loginPopUp" title="Login" cancelText="Cancel" submitText="Login" role="loginModal">
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
        <Modal modalId="itemModal" title={props.title} cancelText="Cancel" role="itemModal" submitText={props.subBtnTitle}>
            <div className='contenair-fluid'>
                <form className='row'>
                    
                    <div className='col-lg-5 d-flex flex-column align-items-center bg-warning'>
                        <div className="item-image m-3 overflow-hidden rounded bg-light "></div>
                        <div className="">
                            <input type="file" className="form-control form-control-sm" id="itemImageInput" />
                        </div>
                    </div>

                    <div className='col-lg-7 bg-info'>
                        <input class="form-control form-control-sm" type="text" placeholder="Item title" aria-label="Item title" />
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" aria-label="Price of Item" />
                        </div>
                        
                    </div>
                </form>
            </div>
        </Modal>
    );
};
