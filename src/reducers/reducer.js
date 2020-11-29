
const initialState = []

export const reducer = (state = initialState, action) => {
    // handle a particular action type
    if (action.type === 'add') {
      // return the new state
      return action.payload
    }
    // always return state
    return state
  }

