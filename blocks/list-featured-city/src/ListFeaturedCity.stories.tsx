import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ListFeaturedCity from "./ListFeaturedCity";

const meta = {
  title: "List/Featured/City",
  component: ListFeaturedCity,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <React.Fragment>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
        <Story />
      </React.Fragment>
    ),
  ],
} satisfies Meta<typeof ListFeaturedCity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 425, maxWidth: "100%" }}>
      <ListFeaturedCity />
    </div>
  ),
};
