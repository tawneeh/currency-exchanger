export default class CurrencyService {
  static async getExchange(code) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD?q=${code}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}