const initialState = {
  items: [],
};

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_JOBS":
      return { ...state, items: action.payload };
    case "APPEND_JOBS":
      return { ...state, items: [...state.items, ...action.payload] };
    default:
      return state;
  }
}
