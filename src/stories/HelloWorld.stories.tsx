import type { Meta } from '@storybook/react';
import React from 'react';

import { HelloWorld } from '@/components';

const meta = {
  title: 'Components/HelloWorld',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const Component = () => {
  return <HelloWorld></HelloWorld>;
};

export const HelloWorld_ = {
  render: () => <Component></Component>,
};
