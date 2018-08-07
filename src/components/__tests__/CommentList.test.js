import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';

// redux wiring
import Root from 'Root';



let wrappedAppComponent;
beforeEach(() => {

	const initialState = {
		comments: ['Comment 1', 'Comment 2']
	};

	wrappedAppComponent = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

afterEach(() => {
	wrappedAppComponent.unmount();
});

// one li per comment
it('creates 1 li per comment', () => {
	expect(wrappedAppComponent
		.find('li').length
	).toEqual(2);
});

// creates li for each comment
it('creates li for each comment', () => {
	// console.log(wrappedAppComponent.render().text())
	expect(wrappedAppComponent.render().text()).toContain('Comment 1');
	expect(wrappedAppComponent.render().text()).toContain('Comment 2');
});
