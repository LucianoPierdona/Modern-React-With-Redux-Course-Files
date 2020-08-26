// Can't return undefined
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
    // bad
    // document.querySelector('input')
    // axios.get('/')
};