import React from 'react';

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class ListNode extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showNodeInteract: false,
			value: this.props.value,
			index: this.props.index,
			handleDeleteNode: this.props.handleDeleteNode
		};

		this.showNodeInteractPrompt = this.showNodeInteractPrompt.bind(this);
		this.hideNodeInteractPrompt = this.hideNodeInteractPrompt.bind(this);
		this.deleteNode = this.deleteNode.bind(this);
		this.NodeInteractPrompt = this.NodeInteractPrompt.bind(this);
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
		;
	}

	NodeInteractPrompt() {
		return (
			<div onMouseLeave={this.hideNodeInteractPrompt}>
				<Button onClick={this.deleteNode} className='me-1 btn btn-primary'>Delete node</Button>
				<br />
				<Button onClick={this.editNode} className='me-1 btn btn-primary'>Edit node value</Button>
			</div>
		);
	}

	render() {
		return (
			<div className='container-fluid'>
				
				{this.state.showNodeInteract ? this.NodeInteractPrompt() : null}

				<span onMouseOver={this.showNodeInteractPrompt}>{this.state.value}</span>

			</div>
		);
	}
}
