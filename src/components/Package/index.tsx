import React, { useState } from 'react';
import {
  faCheck,
  faPlusCircle,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

import NumberPicker from '../NumberPicker';

import {
  Container,
  Banner,
  Card,
  Check,
  FeatureList,
  FeatureItem,
  FeatureContent,
  StartingPrice,
  BaseCost,
  Description,
  NumberPickerContainer,
  OptionBox,
  OptionIcon,
  OptionContent,
  OptionName,
  OptionPrice,
  TotalBox,
  TotalText,
  TotalPrice,
  SelectContainer,
  SelectButton,
  CalendarIcon,
} from './styles';

export interface Option {
  /**
   * Name of option
   */
  name: string;
  /**
   * Price of adding option
   */
  price: number;
  /**
   * One time fee or hourly
   */
  type: 'once' | 'hourly';
}
export interface Props {
  /**
   * Name of Package. Example: Wedding
   */
  name: string;
  /**
   * Short description of Package
   */
  description: string;
  /**
   * The base cost of Package
   */
  price: number;
  /**
   * The features that come with the base cost
   */
  features: string[];
  /**
   * Additional options for added cost
   */
  options?: Option[];
}

const calculateTotal = (
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

const createSelectedOptions = (length: number) => {
  const newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push(0);
  }

  return newArray;
};

const Package = ({
  name,
  description,
  price,
  features,
  options = [],
}: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    createSelectedOptions(options.length),
  );

  const total = calculateTotal(price, options, selectedOptions);

  const onClick = (index: number) => {
    const newOptions = [...selectedOptions];
    newOptions[index] = selectedOptions[index] ^ 1;
    setSelectedOptions(newOptions);
  };

  const onChange = (index: number, newValue: number) => {
    const newOptions = [...selectedOptions];
    newOptions[index] = newValue;
    setSelectedOptions(newOptions);
  };

  return (
    <Container>
      <Card>
        <Banner>{name}</Banner>
        <Description>{description}</Description>
        <FeatureList>
          {features.map((feature) => (
            <FeatureItem key={feature}>
              <Check icon={faCheck} />
              <FeatureContent>{feature}</FeatureContent>
            </FeatureItem>
          ))}
        </FeatureList>

        <StartingPrice>
          <BaseCost>Base price</BaseCost>${price}
        </StartingPrice>
        {options.map(({ name, price, type }, index) => (
          <OptionBox
            tabIndex={type === 'hourly' ? -1 : 0}
            key={name}
            type={type}
            selected={type === 'once' && selectedOptions[index] > 0}
            onClick={
              type === 'hourly'
                ? undefined
                : () => {
                    onClick(index);
                  }
            }
          >
            {type === 'hourly' ? (
              <NumberPickerContainer>
                <NumberPicker
                  min={0}
                  max={48}
                  initialValue={0}
                  onChange={(newVal) => {
                    onChange(index, newVal);
                  }}
                />
              </NumberPickerContainer>
            ) : (
              <OptionIcon icon={faPlusCircle} />
            )}
            <OptionContent>
              <OptionName type={type}>{name}</OptionName>
              <OptionPrice>
                +${price}
                {type === 'hourly' && '/hr'}
              </OptionPrice>
            </OptionContent>
          </OptionBox>
        ))}
        <TotalBox>
          <TotalText>Total:</TotalText>
          <TotalPrice key={total}>${total}</TotalPrice>
        </TotalBox>
        <SelectContainer>
          <SelectButton>
            <CalendarIcon icon={faCalendarAlt} />
            Book a date
          </SelectButton>
        </SelectContainer>
      </Card>
    </Container>
  );
};

export default Package;
