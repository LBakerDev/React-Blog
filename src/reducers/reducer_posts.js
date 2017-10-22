import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
        // turns array of posts into objects
        return _.mapKeys(action.payload.data, 'id');

        default: return state;
    }
}