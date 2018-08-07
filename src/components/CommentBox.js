import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

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
		this.props.saveComment(this.state.comment);

		// and save the comment
		this.setState({
			comment: ''
		})
	};

	render() {
		return(
			<div>
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
				<button onClick={this.props.fetchComments}>Fetch contents</button>
			</div>
		);
	}
};

export default connect(null, actions)(CommentBox);
