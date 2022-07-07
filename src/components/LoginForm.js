import React, { useState } from 'react';
import { Modal } from './Modal';

const LoginModal = props => {

    const [ loginFormData, setLoginFormData ] = useState({});
    
    const handleEmailChange = email => {
        setLoginFormData({...loginFormData, email : email.target.value });
    };

    const handlePasswordChange = password => {
        setLoginFormData({...loginFormData, password : password.target.value });
    };

    const handleRememberMeChange = rememberMe => {
        setLoginFormData({...loginFormData, rememberMe : rememberMe.target.value });
    };

    const handleOnSubmit = () => {
        //fetch({}, {})
    };

    const handleOnCancel = () => {
        setLoginFormData({...loginFormData, email : "", password : "", rememberMe : false });
    }

    //props.actifUserSetHandeler();
    

    return(
        <Modal modalId="loginPopUp" title="Login" cancelText="Cancel" submitText="Login" role="loginModal" 
            onSubmit={handleOnSubmit} onCancel={handleOnCancel} 
        >
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="exampleInputEmail1" 
                        value={loginFormData.email} onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" 
                        value={loginFormData.password} onChange={handlePasswordChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" 
                        checked={loginFormData.rememberMe} onClick={handleRememberMeChange}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
            </form>
        </Modal>
    );
};

export default LoginModal;