import React from 'react';
import {connect} from "react-redux";
import {addCard} from "../../../reducers/GameReducer";
import Card from "./Card";
import {NodeGroup} from "react-move";
import {easeBackOut} from 'd3-ease';

class UsedCards extends React.Component {

    render() {
        const width = 400;
        return (
            <div className="container-used-cards">
                <div className="used-cards"
                     onClick={this.props.clickAddCard}
                >
                    <NodeGroup
                        data={this.props.usedCards}
                        keyAccessor={(card) => card.id}

                        start={
                            () => ({
                                x: -500,
                                opacity: 0,
                            })
                        }

                        enter={
                            () => ([
                                {
                                    x: [width * 0.1],
                                    opacity: [1],
                                    timing: {delay: 500, duration: 500, ease: easeBackOut},
                                }
                            ])}

                    >
                        {(nodes) => {
                            console.log(nodes);
                            return (
                                <div className='container-animations-cards'>
                                    {nodes.map(
                                        ({key, state: {x, opacity, color}, data}) => (
                                            <div
                                                className='container-card'
                                                key={key}
                                                style={{
                                                    position: 'absolute',
                                                    transform: `translate(${x}px)`,
                                                    opacity,
                                                    color,
                                                }}
                                            >
                                                <Card
                                                    type={data.type}
                                                    description={data.description}
                                                />
                                            </div>
                                        ))}
                                </div>
                            )
                        }
                        }
                    </NodeGroup>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    usedCards: state.game.usedCards
})

function mapDispatchToProps(dispatch) {
    return {
        clickAddCard: () => {
            dispatch(addCard({type: 'test', id: Math.random()}));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsedCards);