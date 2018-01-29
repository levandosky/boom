
const initialState = {
    currentUser: 'test'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_USER' :
            return action.payload;
    }

    return state;
}