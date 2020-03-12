import React, {useState} from 'react';
import './Layout.css';
import Modal from '../modal/Modal';
import Component from '../component/Component';

const Layout = () => {

    const [modalActive, setModalActive] = useState(false);

    const startClick = () => {
        setModalActive(true);
    };

    const endClick = () => {
        setModalActive(false);
    };

    const modal = modalActive ? <Modal clicked={endClick}><Component /></Modal> : null;

    return (
        <div>
            {modal}
            <div className="Layout">
                <div className="LayoutButton">
                    <button onClick={startClick}>Press</button>
                </div>
            </div>
        </div>
    );
}

export default Layout;