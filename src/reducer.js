export const initialState = {
  role: null,
  started: false,
  winner: null
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'JOIN':
      return { ...state, role: action.payload, started: false, winner: null };
    case 'START': 
      return { ...state, started: true };
    case 'RESULTS':
      return { ...state, winner: action.payload };
    case 'HELLO':
      return { state };
    default: 
      return state;
  }
}
