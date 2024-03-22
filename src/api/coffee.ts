import axios from 'axios';

// React Query 샘플입니다
interface CoffeeType {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
}

export const getCoffee = async (
  type: 'iced' | 'hot'
): Promise<CoffeeType[]> => {
  const res = await axios.get(`https://api.sampleapis.com/coffee/${type}`);
  return res.data;
};
