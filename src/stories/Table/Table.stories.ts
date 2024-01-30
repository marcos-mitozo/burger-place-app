import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta = {
  title: 'Example/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: ['Name', 'Description'],
    fields: ['name', 'description'],
    rows: [
      {
        id: 1,
        name: 'Bun',
        description: 'Brioche hamburger bun'
      }
    ]
  }
};

export default meta;