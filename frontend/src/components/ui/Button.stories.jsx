import React from 'react';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Primary</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline'
};
