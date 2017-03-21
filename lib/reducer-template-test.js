import reducer from './{name}Reducer';
import expect from 'expect';
//import { SOME_ACTION } from './{name}Actions';

const expectedInitialState = { loading: true, data: [] };

describe('{name} reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(expectedInitialState);
    });

    /*it('should handle SOMETHING', () => {
        const stateAfter = reducer(expectedInitialState, { type: SOME_ACTION, data: {}});
        expect(stateAfter).toEqual({});
    });*/
});