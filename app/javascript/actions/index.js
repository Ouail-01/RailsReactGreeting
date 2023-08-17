import axios from 'axios';

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/random_greeting');
      dispatch({ type: 'SET_GREETING', payload: response.data.greeting });
    } catch (error) {
      console.error(error);
    }
  };
};
