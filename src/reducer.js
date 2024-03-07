export const initialState = Array(9).fill(null);

export const appReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_TURN": {
      state.splice(action.payload.index, 1, action.payload.sim);
      return [...state];
    }
    case "NEW_GAME": {
      console.log("NEW GAME");
      return (state = Array.from(initialState));
    }
    default:
      return state;
  }
};
