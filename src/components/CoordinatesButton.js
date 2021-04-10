import React from 'react'

class CoordinatesButton extends React.Component {
    constructor () {
        super()
        state = { mouseCoords: [0,0]}
    }

    handleClickEvent = (event) => {
        let x = event.clientX
        let y = event.clientY
        this.props.onReceiveCoordinate([x,y])
    }

    render () {
        return (
            <button onClick={this.handleClickEvent}
            />
        )
    }
}

export default CoordinatesButton
