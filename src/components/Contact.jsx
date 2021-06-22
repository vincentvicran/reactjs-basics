import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './Modal';
import { connect } from 'react-redux';

const Contact = ({ cards }) => {
    // console.table(props.cards);

    return (
        <div>
            {cards.map((card) => {
                return (
                    <div
                        className="ui raised very padded text container segment"
                        style={{ marginTop: '80px' }}
                        key={card.id}
                    >
                        <Link to={`/${card.title}`} className="ui header">
                            {card.title}
                        </Link>
                        <p>{card.body}</p>
                    </div>
                );
            })}
        </div>
        // <div>
        //     <Modal />
        //     <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
        //         <Link to="/dany" className="ui header">
        //             Dany
        //         </Link>
        //         <p>
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam incidunt vitae ipsa repellat
        //             minus fugit esse ab? Consequatur deserunt unde hic incidunt. Possimus, adipisci esse corporis beatae
        //             eos labore repellendus officiis dicta ad perferendis! Temporibus itaque neque modi voluptas?
        //         </p>
        //     </div>
        //     <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
        //         <Link to="/alex" className="ui header">
        //             Alex
        //         </Link>
        //         <p>
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam incidunt vitae ipsa repellat
        //             minus fugit esse ab? Consequatur deserunt unde hic incidunt. Possimus, adipisci esse corporis beatae
        //             eos labore repellendus officiis dicta ad perferendis! Temporibus itaque neque modi voluptas?
        //         </p>
        //     </div>
        // </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
    };
};

export default connect(mapStateToProps)(Contact);
