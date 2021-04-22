import React, { useState } from 'react';

import Package from './Package';

import { Container } from './styles';

import offerings from '../../content/offerings.json';
import { calculateTotal } from '../../utils/pricing';

import { PricingProps, Option, PackageProps } from './types';
import Modal from '../Modal';

const Pricing = ({ children }: PricingProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageProps>();
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const createBooking = (index: number, selectedOptions: number[]) => {
    const { basePrice, options } = offerings.packages[index || 0];
    setShowModal(true);
    console.log(
      calculateTotal(basePrice, options as Option[], selectedOptions),
    );
  };

  return (
    <Container>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as JSX.Element, { createBooking, index }),
      )}
    </Container>
  );
};

Pricing.Package = Package;
export default Pricing;
