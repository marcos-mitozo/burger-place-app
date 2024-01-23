import type { Meta, StoryObj } from '@storybook/react';
import { DrawerMenu } from './DrawerMenu';

const meta = {
  title: 'Example/Drawer Menu',
  component: DrawerMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DrawerMenu>;

type Story = StoryObj<typeof meta>;

export const Opened: Story = {};

export default meta;