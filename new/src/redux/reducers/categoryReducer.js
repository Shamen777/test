const initialState = {
    data: [],
  };

  export function getCategories(state = initialState, action) {
    switch (action.type) {
      case 'GET_CATEGORIES':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }