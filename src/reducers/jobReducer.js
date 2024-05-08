const initialState = {
  items: [],
  darkMode: false,
};

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_JOBS":
      return { ...state, items: action.payload };
    case "APPEND_JOBS":
      return { ...state, items: [...state.items, ...action.payload] };
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}
