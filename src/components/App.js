// react design
// - comment app
//   - comment list
//     - comment
// redux design
// - comments reducer
//   - maintains 'comments' state
// - saveComment action


import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         Hi there!
//       </div>
//     );
//   }
// }

export default () => {

	return (
		<div>
			I'm the app component
			<CommentBox />
			<CommentList />
		</div>
	);

};
