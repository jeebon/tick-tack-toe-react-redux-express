const initialState = {
  steps: [
    Array(9).fill(null)
  ],
  currentStep: 0,
  isNextX: true
}

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_STEPS':
      state = action.payload
      return state;
    case 'ADD_STEP': 
      state = action.payload
      return state;

    case 'UPDATE_CURRENT_STEP':
      state = action.payload
      return state;
    default:
      return state
  }
}

export default items;