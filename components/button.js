import React, { Component } from 'react'

class Buttons extends Component {
	constructor(props){
		super(props)
		this.state = {clicked: false}
	}

	handleClick () {
		console.log('Hey, you pushed my button')
		this.setState({clicked: true})
	}

	render () {
		return (
			<div>
				<button onClick={this.handleClick.bind(this)} />
				{this.state.clicked ? (
					<Buttons /> 
				)
				: null}

			</div>
			)
	}
}


export default Buttons

				