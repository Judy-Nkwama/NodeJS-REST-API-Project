import React from 'react';

const Tag = props => {
    return(
        <span className="badge rounded-pill bg-outline-secondary">Secondary</span>
    );
};


const Item = props => {
    return (  
        <tr key={props.key}>
            <th scope="row">{ props.id }</th>
            <td>{ props.image }</td>
            <td>{ props.title }</td>
            <td>{ props.description }</td>
            <td>{ props.tagLine.map( tag => <Tag title={`#${tag}`} />) }</td>
            <td>{ props.colors.map( hexaColor => <span 
                class="p-2 border border-light rounded-circle"
                style={{background : hexaColor}} 
                ></span>) }
            </td>
            <td>{ props.price }$</td>
            <td></td>
        </tr>
    );
}

export default Item;