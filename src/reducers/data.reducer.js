export const GET_DATA = 'data/GET_DATA'

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        items: action.payload.items,
      }
    default:
      return state
  }
}
