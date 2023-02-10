import axios from 'axios';

export const getPackageName = () => {
  const response = axios.get('http://localhost:3000/packages');
  console.log(response);
}