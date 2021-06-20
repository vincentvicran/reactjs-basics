import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Contact = () => {
    return (
        <div>
            <Modal />
            <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
                <Link to="/dany" className="ui header">
                    Dany
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam incidunt vitae ipsa repellat
                    minus fugit esse ab? Consequatur deserunt unde hic incidunt. Possimus, adipisci esse corporis beatae
                    eos labore repellendus officiis dicta ad perferendis! Temporibus itaque neque modi voluptas?
                </p>
            </div>
            <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
                <Link to="/alex" className="ui header">
                    Alex
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam incidunt vitae ipsa repellat
                    minus fugit esse ab? Consequatur deserunt unde hic incidunt. Possimus, adipisci esse corporis beatae
                    eos labore repellendus officiis dicta ad perferendis! Temporibus itaque neque modi voluptas?
                </p>
            </div>
        </div>
    );
};

export default Contact;
