import React from 'react'
import { Modal } from './Modal'
import { useState } from 'react'

const ItemForm = props => {

    const {itemData, setItemData } = useState(null)


    return(




        <Modal modalId={props.modalId} title={props.title} cancelText={props.cancelText} submitText={props.submitText}>
            


        </Modal>


    )
}

export default ItemForm

fc