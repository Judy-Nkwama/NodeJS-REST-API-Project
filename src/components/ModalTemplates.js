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
                    
                    <div className='col-lg-5 d-flex flex-column align-items-center '>
                        <div className="item-image-block m-3 overflow-hidden rounded bg-light ">
                            <img src="/no-image.png" className='item-image' />
                        </div>
                        <div className="">
                            <input type="file" className="form-control form-control-sm" id="itemImageInput" />
                        </div>
                    </div>

                    <div className='col-lg-7 '>

                        <input className="form-control form-control-sm mb-1" type="text" placeholder="Item title" aria-label="Item title" />
                        
                        <div className="input-group input-group-sm mb-1">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" aria-label="Price of Item" placeholder='0.1' />
                        </div>

                        <div className="mb-1">
                            <textarea className="form-control" id="itemDescription" rows="2" placeholder='Type item description here'></textarea>
                        </div>

                        <div className='mb-1 bg-light p-1 ps-0 rounded'>
                            <input type="color" className="form-control form-control-sm form-control-color" id="itemColours" value="#563d7c" onChange={()=>{}} title="Choose item colors"></input>
                        </div>
                        
                        <div className="input-group input-group-sm mb-1">
                            <span className="input-group-text">#</span>
                            <input type="text" className="form-control" aria-label="Type #tags of the item" placeholder='Type #tags of the item' />
                            <button  type="button" className="btn btn-primary" id="addTag">Add Tag</button>
                        </div>
                        <div className='bg-light rounded p-1'>#dada</div>

                        
                    </div>
                </form>
            </div>
        </Modal>
    );
};
