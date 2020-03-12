import React from 'react'
import Backdrop from './backdrop/Backdrop';
import './Modal.css';

const Modal = props => {
    const styles = ["Modal"]
    if (props.styles) styles.push(props.styles);
    return (
        <React.Fragment>
            <Backdrop clicked={props.clicked}/>
            <div onClick={props.clicked} className={styles.join(' ')}>
                {props.children}
            </div>
        </React.Fragment>
    )
};

export default Modal;