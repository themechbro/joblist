const initialState = {
  items: [],
  darkMode: false,
  loading: false,
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
    case "LOADING_JOBS":
      return { ...state, loading: true };
    case "LOADED_JOBS":
      return { ...state, loading: false };
    default:
      return state;
  }
}
