import { Option } from '../components/Pricing/types';

export const calculateTotal = (
  baseCost: number,
  options: Option[],
  selectedOptions: number[],
) => {
  const totalCost = selectedOptions.reduce((acc, cur, idx) => {
    if (cur > 0) {
      acc += cur * options[idx].price;
    }

    return acc;
  }, baseCost);

  return totalCost;
};

export const createSelectedOptions = (length: number) => {
  const newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push(0);
  }

  return newArray;
};
