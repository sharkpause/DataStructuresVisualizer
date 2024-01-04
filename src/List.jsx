import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import LinkedList from './LinkedList.js';

export default class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			LinkedList: new LinkedList(),
			showNewNodePrompt: false,
			addNewNodeValue: 0,
			showDeleteButton: false
		}

		this.addNewNode = this.addNewNode.bind(this);
		this.handleAddNewNode = this.handleAddNewNode.bind(this);
		this.updateAddNewNodeValue = this.updateAddNewNodeValue.bind(this);
		this.addNewNodePrompt = this.addNewNodePrompt.bind(this);
		this.showDeleteButton = this.showDeleteButton.bind(this);
		this.hideDeleteButton = this.hideDeleteButton.bind(this);
		this.getListNodes = this.getListNodes.bind(this);
		this.addDeleteButton = this.addDeleteButton.bind(this);
	}

	updateAddNewNodeValue(event) {
		this.setState({
			addNewNodeValue: event.target.value
		});
	}

	addNewNode(val) {
		const newLinkedList = this.state.LinkedList;
		newLinkedList.addNode(val);

		this.setState({
			LinkedList: newLinkedList,
			showNewNodePrompt: false
		});
	}

	handleAddNewNode() {
		this.setState({
			showNewNodePrompt: true
		});
	}

	addNewNodePrompt() {
		return (
			<Form>
				<Form.Group>

					<Form.Label>Enter node value</Form.Label>
					<Form.Control type='text' onChange={this.updateAddNewNodeValue} />
					<Button onClick={() => this.addNewNode(this.state.addNewNodeValue)}>Add node</Button>

				</Form.Group>
			</Form>
		);
	}

	addDeleteButton() {
		return (
			<Button onMouseOut={this.hideDeleteButton}>Hihihiha</Button>
		);
	}

	getListNodes() {
		return this.state.LinkedList.returnNodes().map((node, index) => <span onMouseOver={this.showDeleteButton} key={index}>{node}</span>);
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

	render() {
		const listNodes = this.getListNodes();
		const showNewNodePrompt = this.state.showNewNodePrompt;
		const showDeleteButton = this.state.showDeleteButton;

		return (
			<div>
				<h1>Test</h1>
				<Button onClick={this.handleAddNewNode}>Add new node</Button>

				<br />

				<p>List size: {this.state.LinkedList.size}</p>

				{showNewNodePrompt ? this.addNewNodePrompt() : null}
				{showDeleteButton ? this.addDeleteButton() : null}
				
				<br />

				{listNodes}
			</div>
		);
	}
}
