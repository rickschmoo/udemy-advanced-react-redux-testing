import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

// redux wiring
import Root from 'Root';



let wrappedAppComponent;
beforeEach(() => {
	wrappedAppComponent = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	wrappedAppComponent.unmount();
});

it('has a text area and a button', () => {

	expect(wrappedAppComponent
		.find('textarea').length
	).toEqual(1);

	expect(wrappedAppComponent
		.find('button').length
	).toEqual(1);

});

describe('the text area', () => {

	const TEST_COMMENT = 'a new comment';
	const mockChangeEvent =	{
		target: { value:  TEST_COMMENT }
	};

	beforeEach(() => {
		wrappedAppComponent.find('textarea')
			.simulate('change', mockChangeEvent);

		wrappedAppComponent.update();
	});
	
	it('has a text area that users can type in', () => {
		expect(wrappedAppComponent.find('textarea')
			.prop('value')
		).toEqual(TEST_COMMENT);
	});


	it('on input submit, test area gets emptied', () => {

		// submit form
		wrappedAppComponent.find('form')
			.simulate('submit');
		wrappedAppComponent.update();

		// check textarea reset
		expect(wrappedAppComponent.find('textarea')
			.prop('value')
		).toEqual('');
	});

});

