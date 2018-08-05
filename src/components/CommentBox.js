import React, { Component } from 'react';

// export default () => {

// 	return(
// 		<div>
// 			Comment Box
// 		</div>
// 	);
// };

class CommentBox extends Component {

	state = { comment: ''};

	handleChange = event => {
		this.setState({
			comment: event.target.value 
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		// call an action creator
		// and save the comment
		this.setState({
			comment: ''
		})
	};

	render() {
		return(
			<form onSubmit={this.handleSubmit} >
				<div>
					<textarea
						onChange={this.handleChange}
						value={this.state.comment}
					/>
					<div>
						<button>Submit content</button>
					</div>
				</div>
			</form>
		);
	}
};

export default CommentBox;