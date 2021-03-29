import axios from 'axios';
export const getItems = () => {
  return (dispatch) => {
    axios.get('http://localhost:5000/api/data').then(response => {
      dispatch({
        type: 'INIT_STEPS',
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }
};

export const addItems = items => {
  return(dispatch) => {
    axios.post('http://localhost:5000/api/data', items).then(response => {
      dispatch({
        type: 'ADD_STEP',
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }
};

export const updateCurrentStep = id => {
  return (dispatch) => {
    axios.put('http://localhost:5000/api/data', {id:id}).then(response => {
      dispatch({
        type: 'UPDATE_CURRENT_STEP',
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }
};