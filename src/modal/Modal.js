import React from 'react'
import './Modal.css';

const Modal = props => {
    const styles = ["Modal"]
    if (props.styles) styles.push(props.styles);
    return (
        <React.Fragment>
            <div className="Backdrop" onClick={props.clicked} />
            <div onClick={props.clicked} className={styles.join(' ')}>
                {props.children}
            </div>
        </React.Fragment>
    )
};

export default Modal;