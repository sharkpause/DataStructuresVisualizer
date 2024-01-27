import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default class ListNode extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showNodeInteract: false,
			value: this.props.value,
			index: this.props.index,
			handleDeleteNode: this.props.handleDeleteNode,
			handleEditNode: this.props.handleEditNode,
			handleInsertNode: this.props.handleInsertNode,
			showNodeEdit: false,
			editPromptValue: 0,
			insertPromptValue: 0,
			showInsertNode: false,
			showInsertNodeForm: false
		};

		this.showNodeInteractPrompt = this.showNodeInteractPrompt.bind(this);
		this.hideNodeInteractPrompt = this.hideNodeInteractPrompt.bind(this);
		this.deleteNode = this.deleteNode.bind(this);
		this.editNode = this.editNode.bind(this);
		this.insertNode = this.insertNode.bind(this);
		this.showEditNode = this.showEditNode.bind(this);
		this.nodeEditPrompt = this.nodeEditPrompt.bind(this);
		this.nodeInteractPrompt = this.nodeInteractPrompt.bind(this);
		this.cancelEditNode = this.cancelEditNode.bind(this);
		this.updateEditPromptValue = this.updateEditPromptValue.bind(this);
		this.updateInsertPromptValue = this.updateInsertPromptValue.bind(this);
		this.showInsertNodePrompt = this.showInsertNodePrompt.bind(this);
		this.hideInsertNodePrompt = this.hideInsertNodePrompt.bind(this);
		this.insertNodePrompt = this.insertNodePrompt.bind(this);
		this.showInsertNodeForm = this.showInsertNodeForm.bind(this);
		this.hideInsertNodeForm = this.hideInsertNodeForm.bind(this);
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

	showInsertNodePrompt() {
		this.setState({
			showInsertNode: true
		});
	}

	hideInsertNodePrompt() {
		this.setState({
			showInsertNode: false
		});
	}

	showInsertNodeForm() {
		this.setState({
			showInsertNodeForm: true,
		});
	}

	hideInsertNodeForm() {
		this.setState({
			showInsertNodeForm: false,
			showInsertNode: false
		});
	}

	deleteNode() {
		this.state.handleDeleteNode(this.state.index);
	}

	editNode() {
		this.state.handleEditNode(this.state.index, this.state.editPromptValue);
	}
	
	insertNode() {
		this.state.handleInsertNode(this.state.index, this.state.insertPromptValue);
	}

	showEditNode() {
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
				<Button onClick={this.showEditNode} className='me-1 btn btn-primary'>Edit node value</Button>

			</span>
		);
	}

	updateEditPromptValue(event) {
		this.setState({
			editPromptValue: event.target.value
		});
	}

	updateInsertPromptValue(event) {
		this.setState({
			insertPromptValue: event.target.value
		});
	}

	nodeEditPrompt() {
		return (
			<span>
				<Form>
					<Form.Group>

						<Form.Label>Enter node value</Form.Label>
						<Form.Control type='text' className='mb-1' onChange={this.updateEditPromptValue} />
						<span>
							<Button className='btn-primary btn' onClick={this.editNode}>Add node</Button>
							<Button className='btn-danger btn' onClick={this.cancelEditNode}>Cancel</Button>
						</span>

					</Form.Group>
				</Form>
			</span>
		);
	}

	insertNodePrompt() {
		if(this.state.showInsertNodeForm) {
			return (
				<span>
					<Form>
						<Form.Group>

							<Form.Label>Enter node value</Form.Label>
							<Form.Control type='text' className='mb-1' onChange={this.updateInsertPromptValue} />
							<span>
								<Button className='btn-primary btn' onClick={this.insertNode}>Insert node</Button>
								<Button className='btn-danger btn' onClick={this.hideInsertNodeForm}>Cancel</Button>
							</span>

						</Form.Group>
					</Form>
				</span>
			);
		}
		return (
			<div className='mt-3'>
				<Button className='btn-primary btn' onClick={this.showInsertNodeForm} onMouseLeave={this.hideInsertNodePrompt}>Insert node</Button>
			</div>
		);
	}

	render() {
		return (
			<div className='container-fluid mb-2'>
				
				{this.state.showNodeInteract ? this.nodeInteractPrompt() : null}

				<div onMouseOver={this.showNodeInteractPrompt} className='btn btn-primary'>{this.state.value}</div>

				<br />

				{this.state.showInsertNode ? this.insertNodePrompt() : null}

				<FontAwesomeIcon icon={faArrowDown} className='mt-3 mb-3' onMouseOver={this.showInsertNodePrompt} />

			</div>
		);
	}
}
