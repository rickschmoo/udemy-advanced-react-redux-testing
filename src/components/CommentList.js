import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

 	makeid() {
  		var randomText = "";
  		// var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < 5; i++) {
    		// text += possible.charAt(Math.floor(Math.random() * possible.length));
    		randomText = (i + Math.random()).toString(36).replace(/[^a-z]+/g, '').substr(i, i+5);

		}
		// console.log('random string ' + randomText);
  		return randomText;
	}

	renderComments() {
		
		return this.props.comments.map(comment => {
			const randomId = this.makeid();
			return(
				<li key={comment + randomId}>{comment}</li>
			);
		});
	}

	render() {
		return(
			<div>
				<ul>
					{ this.renderComments() }
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return({
		comments: state.comments 
	});
}

export default connect(mapStateToProps)(CommentList);
