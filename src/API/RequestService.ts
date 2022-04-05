import axios from 'axios';

export default class RequestService {
  static async getRequest(url :string) {
    try {
      const response = await axios.get(url);
      return (response.data) ? response.data : response;
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

  static async postRequest(url: string, data: object) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
}
