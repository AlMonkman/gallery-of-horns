import React from "react";
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: ''
        }
    }

    handleClick = () => {
        this.setState({ favorites: this.state.favorites + '🖤' });
    }

    render() {
        return (
            <Card>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Img src={this.props.imageUrl}
                    alt={this.props.description}
                    title={this.props.title}
                    onClick={this.handleClick} />
                    <Card.Body>
                <Card.Text>{this.props.description}</Card.Text>
                <Card.Text>Favs: {this.state.favorites}</Card.Text>
                </Card.Body>
            </Card>
        )
    }

}

export default HornedBeast;