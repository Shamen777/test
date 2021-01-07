const initialState = {
    data: [],
  };

  export function getCategoriesById(state = initialState, action) {
    switch (action.type) {
      case 'GET_CATEGORIES_BY_ID':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }