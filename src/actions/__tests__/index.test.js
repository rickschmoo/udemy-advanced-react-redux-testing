import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

const TEST_COMMENT = 'Hello 123';

describe('saveComment', () => {

	it('has the correct type', () => {

		const action = saveComment();

		expect(action.type).toEqual(SAVE_COMMENT);

	});

	it('has the correct payload', () => {

		const action = saveComment(TEST_COMMENT);

		expect(action.payload).toEqual(TEST_COMMENT);

	});

});