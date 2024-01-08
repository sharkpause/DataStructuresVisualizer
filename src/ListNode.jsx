import React from 'react';

import Button from 'react-bootstrap/Button';

export default class ListNode extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showDeleteButton: false,
			value: this.props.value,
			index: this.props.index,
			LinkedList: this.props.LinkedList
		};

		this.showDeleteButton = this.showDeleteButton.bind(this);
		this.hideDeleteButton = this.hideDeleteButton.bind(this);
		this.deleteNode = this.deleteNode.bind(this);
		this.deleteButtonPrompt = this.deleteButtonPrompt.bind(this);

		console.log(this.props);
	}

	showDeleteButton() {
		this.setState({
			showDeleteButton: true
		});
	}

	hideDeleteButton() {
		this.setState({
			showDeleteButton: false
		});
	}

	deleteNode() {
		const newList = this.state.LinkedList;
		newList.removeAt(this.state.index);

		this.setState({
			LinkedList: newList
		});
	}

	deleteButtonPrompt() {
		return (
			<div>
				<Button onClick={this.deleteNode} onMouseOut={this.hideDeleteButton}>Delete Node</Button>
			</div>
		);
	}

	render() {
		return (
			<span>
				<span onMouseOver={this.showDeleteButton}>{this.state.value}-></span>

				{this.state.showDeleteButton ? this.deleteButtonPrompt() : null}
			</span>
		);
	}
}
