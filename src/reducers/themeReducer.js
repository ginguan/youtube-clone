
const initialState = false;

export const themeReducer = (state = initialState, action) => {
    // handle a particular action type
    if (action.type === 'change_theme') {
      // return the new state
      return action.payload
    }
    // always return state
    return state
  }

