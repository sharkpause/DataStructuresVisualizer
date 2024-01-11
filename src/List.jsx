import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import LinkedList from './LinkedList.js';
import ListNode from './ListNode.jsx';

export default class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			LinkedList: new LinkedList(),
			showNewNodePrompt: false,
			addNewNodeValue: 0,
		}

		this.addNewNode = this.addNewNode.bind(this);
		this.handleAddNewNode = this.handleAddNewNode.bind(this);
		this.updateAddNewNodeValue = this.updateAddNewNodeValue.bind(this);
		this.addNewNodePrompt = this.addNewNodePrompt.bind(this);
		this.getListNodes = this.getListNodes.bind(this);
		this.handleDeleteNode = this.handleDeleteNode.bind(this);
	}

	updateAddNewNodeValue(event) {
		this.setState({
			addNewNodeValue: event.target.value
		});
	}

	addNewNode(val) {
		const newLinkedList = new LinkedList();
		newLinkedList.copyList(this.state.LinkedList);
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

	handleDeleteNode(index) {
		const newLinkedList = new LinkedList();
		newLinkedList.copyList(this.state.LinkedList);
		newLinkedList.removeAt(index);

		this.setState({
			LinkedList: newLinkedList,
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

	getListNodes() {
		return this.state.LinkedList.returnNodes().map((node, index) => <ListNode key={index} value={node} index={index} handleDeleteNode={this.handleDeleteNode} />);
	}

	render() {
		const listNodes = this.getListNodes();
		const showNewNodePrompt = this.state.showNewNodePrompt;

		return (
			<div>
				<h1>Test</h1>
				<Button onClick={this.handleAddNewNode}>Add new node</Button>

				<br />

				<p>List size: {this.state.LinkedList.size}</p>

				{showNewNodePrompt ? this.addNewNodePrompt() : null}

				{listNodes} // Rerender when a node is deleted

				<span>null</span>
			</div>
		);
	}
}
