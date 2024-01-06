import React from 'react';

export default class ListNode extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showDeleteButton: false,
			value: this.props.nodeVal
		};
	}

	render() {
		return (
			<div>
				<span>{this.state.value}</span>
			</div>
		);
	}
}
