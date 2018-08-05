import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// global 'it' function
// it ( description , function with test logic )
// expectation
//  expect (value that we want to verify).matcherStatement(expectedValue)

let wrappedAppComponent;
beforeEach(() => {
	wrappedAppComponent = shallow(<App />);

});

it('shows a comment box', () => {

	expect(wrappedAppComponent
		.find(CommentBox).length)
		.toEqual(1);
	// /////////////////////
	// simple noddy approach
	// /////////////////////
	// import ReactDOM from 'react-dom';
	// setup test DOM in jsdom
	// const div = document.createElement('div');
	// ReactDOM.render(<App />, div);
	// console.log(div.innerHTML);
	// expect(div.innerHTML).toContain('Comment Box');
	// cleanup
	// ReactDOM.unmountComponentAtNode(div);

});

it('shows a comment list', () => {
	
	expect(wrappedAppComponent
		.find(CommentList).length)
		.toEqual(1);
});

