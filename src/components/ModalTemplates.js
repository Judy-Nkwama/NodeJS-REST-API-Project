import React, { useEffect, useState, useRef } from 'react';
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

const DelBtn = props => {
    return(
        <button className='btn btn-danger btn-sm' onClick={props.onClick} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </button>
    );
};

const Color = props => {
    return(
        <div className="d-inline-flex p-1 rounded border bg-white">
            <div className="p-3 rounded" style={{ background : props.color }}></div>
            <DelBtn onClickonClick={ event => {props.deleteFunction(); event.preventDefault(); } } />
        </div>
    );
};

const Tag = props => {
    return(
        <div className="d-inline-flex p-1 rounded border bg-white">
            <div className="p-1 rounded">{props.tagContent}</div>
            <DelBtn onClick={ event => {props.handleDeleteTag(); event.preventDefault(); } } />
        </div>
    );
};

export const ItemModal = props => {

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState(0.1);
    const [ description, setDescription ] = useState("");
    
    const [ colors, setColors ] = useState([]);
    const [ currentColor, setCurrentColor ] = useState("#39015c");

    const [ currentTag, setCurrentTag ] = useState("");
    const [tags, setTags] = useState([]);



    const handleColorAdd = () => {
        if( !colors.find( color_i => color_i.toString() == currentColor.toString() ) ){
            setColors([...colors, currentColor]);
        }
    };

    const handleTagAdd = () => {
        if( !tags.find( tag_i => tag_i == tag_i ) ){
            setTags([...tags, currentTag]);
            setCurrentTag("");
        }
    };

    const handleColorDelete = color_i => {
        setColors( colors.filter( color => color.toString() != color_i.toString() ) );
    };

    const handleDeleteTag = tag => {
        setColors( tags.filter(tag_i => tag_i != tag) );
    };


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

                        <input className="form-control form-control-sm mb-1" type="text" placeholder="Item title" aria-label="Item title" 
                            value={title} onChange={ event => { setTitle(event.target.value); } } 
                        />
                        
                        <div className="input-group input-group-sm mb-1">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" aria-label="Price of Item" placeholder='0.1' 
                                value={price} onChange={ event => setPrice(event.target.value) }
                            />
                        </div>

                        <div className="mb-1">
                            <textarea className="form-control" id="itemDescription" rows="2" placeholder='Type item description here' 
                                value={description} onChange={ event => setDescription(event.target.value) }
                            /> 
                        </div>

                        <div className='mb-1 bg-light p-1 ps-0 rounded'>
                            <div className="input-group">
                                <input type="color" className="form-control form-control-sm form-control-color" id="itemColours" 
                                    value={currentColor} title="Choose item colors" onChange={ event => {setCurrentColor(event.target.value)}}
                                />
                                <button className="btn btn-primary" type="button" 
                                    onClick={ handleColorAdd }
                                >Add</button>
                            </div>
                            {
                                colors.map( color_i => <Color key={color_i} color={color_i} deleteFunction={ () => handleColorDelete(color_i) } />)
                            }
                        </div>
                        
                        <div className="input-group input-group-sm mb-1">
                            <span className="input-group-text">#</span>
                            <input type="text" className="form-control" aria-label="Type #tags of the item" placeholder='Type #tags of the item' 
                                value={currentTag} onChange={ event => setCurrentTag(event.target.value) }
                            />
                            <button  type="button" className="btn btn-primary" id="addTag" onClick={ handleTagAdd }>Add Tag</button>
                        </div>
                        <div className='bg-light rounded p-1'>
                        {
                            tags.map( tag => <Tag key={tag} handleDeleteTag={ () => handleDeleteTag(tag) } tagContent={tag} />)
                        }</div>

                        
                    </div>
                </form>
            </div>
        </Modal>
    );
};
