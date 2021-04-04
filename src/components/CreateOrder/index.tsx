import React from 'react';

import { Button, Icon } from './styles';

import { faVideo } from '@fortawesome/free-solid-svg-icons';

const CreateOrder = () => {
  return (
    <Button to="/order">
      <Icon icon={faVideo} />
      Create Order
    </Button>
  );
};

export default CreateOrder;
