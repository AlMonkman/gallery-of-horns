import React from "react";
import HornedBeast from './HornedBeast'
import Row from './react-bootstrap'
import Col from './react-bootstrap'

class Main extends React.Component {

    render() {
        return (
            <>
                <Row>
                    {this.props.allBeast.map(beast => (
                        <Col>
                            <HornedBeast
                                key={beast._id}
                                title={beast.title}
                                imageUrl={beast.image_url}
                                description={beast.description}
                            />
                        </Col>
                    ))}
                </Row>
            </>
        )
    }

}

export default Main;

