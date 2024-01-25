import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class ListNode extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showNodeInteract: false,
			value: this.props.value,
			index: this.props.index,
			handleDeleteNode: this.props.handleDeleteNode,
			showNodeEdit: false
		};

		this.showNodeInteractPrompt = this.showNodeInteractPrompt.bind(this);
		this.hideNodeInteractPrompt = this.hideNodeInteractPrompt.bind(this);
		this.deleteNode = this.deleteNode.bind(this);
		this.editNode = this.editNode.bind(this);
		this.nodeEditPrompt = this.nodeEditPrompt.bind(this);
		this.nodeInteractPrompt = this.nodeInteractPrompt.bind(this);
		this.cancelEditNode = this.cancelEditNode.bind(this);
	}

	showNodeInteractPrompt() {
		this.setState({
			showNodeInteract: true
		});
	}

	hideNodeInteractPrompt() {
		this.setState({
			showNodeInteract: false
		});
	}

	deleteNode() {
		this.state.handleDeleteNode(this.state.index);
	}

	editNode() {
		this.setState({
			showNodeEdit: true
		});
	}

	cancelEditNode() {
		this.setState({
			showNodeEdit: false,
			showNodeInteract: false
		});
	}

	nodeInteractPrompt() {
		if(this.state.showNodeEdit) {
			return (
				<span>
					{this.state.showNodeEdit ? this.nodeEditPrompt() : null}
				</span>
			);
		}

		return (
			<span onMouseLeave={this.hideNodeInteractPrompt} className='me-5'>
				<Button onClick={this.deleteNode} className='me-1 btn btn-primary'>Delete node</Button>
				<br />
				<Button onClick={this.editNode} className='me-1 btn btn-primary'>Edit node value</Button>

			</span>
		);
	}
	// When user clicks on edit button, replace interact prompt with edit prompt and only disappear when click cancel
	nodeEditPrompt() {
		return (
			<span>
				<Form>
					<Form.Group>

						<Form.Label>Enter node value</Form.Label>
						<Form.Control type='text' className='mb-1' />
						<span>
							<Button>Add node</Button>
							<Button className='btn-danger' onClick={this.cancelEditNode}>Cancel</Button>
						</span>

					</Form.Group>
				</Form>
			</span>
		);
	}

	render() {
		return (
			<div className='container-fluid mb-2'>
				
				{this.state.showNodeInteract ? this.nodeInteractPrompt() : null}

				<span onMouseOver={this.showNodeInteractPrompt} className='btn btn-primary'>{this.state.value}</span>

			</div>
		);
	}
}
