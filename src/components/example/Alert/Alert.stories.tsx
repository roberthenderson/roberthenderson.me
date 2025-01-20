import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/globals.css';

import { Button } from '../Button/Button';
import { Alert, AlertSize } from './Alert';

const meta = {
  title: 'Base Components/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  open: true,
  showXIcon: true,
  title: 'Test Title',
  size: AlertSize.md,
  onClose: () => null,
};

export const TitleOnly: Story = {
  args,
};

export const TitleAndDescription: Story = {
  args: {
    ...args,
    description: 'This is a test description sentence.',
  },
};

export const TitleDescriptionButtons: Story = {
  args: {
    ...args,
    description: 'This is a test description sentence.',
    buttons: [
      <Button key={1}>Confirm</Button>,
      <Button key={2} plain>
        Cancel
      </Button>,
    ],
  },
};
