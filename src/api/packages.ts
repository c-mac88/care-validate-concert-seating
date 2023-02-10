import axios, { AxiosResponse } from 'axios';

export const getPackageName = async (packageID: number) => {
  const response = await axios.get<string>(`http://localhost:3000/package/${packageID}`);
  return response.data;
}