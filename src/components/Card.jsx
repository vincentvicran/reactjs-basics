import React, { Component } from 'react';

class Card extends Component {
    state = { user: '' };

    componentDidMount() {
        let user = this.props.match.params.user;
        this.setState({ user: user });
    }

    render() {
        const { user } = this.state;
        return (
            <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
                <h3 className="ui header">{user}</h3>
            </div>
        );
    }
}

export default Card;
