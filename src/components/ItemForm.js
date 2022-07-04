import React, { useState } from 'react';
import { Modal } from './Modal';

const ItemForm = props => {

    const [itemData, setItemData] = useState(null);

    return(

        <Modal modalId={props.modalId} title={props.title} cancelText={props.cancelText} submitText={props.submitText}>
        </Modal>
    )
}

export default ItemForm;