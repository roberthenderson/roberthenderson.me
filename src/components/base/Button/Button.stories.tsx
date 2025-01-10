import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/globals.css';

import { Button } from '../Button/Button';

const meta = {
  title: 'Base Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Confirm',
    color: 'teal',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Cancel',
    color: undefined,
    plain: true,
  },
};
