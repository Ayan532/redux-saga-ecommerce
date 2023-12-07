import axios from 'axios';


export const loginUser = async (username, password) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username: username,
      password: password,
    });

    const data = response.data;

    if (data.token) {
      return data.token;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Error in Catch:', error);
    throw error;
  }
};
