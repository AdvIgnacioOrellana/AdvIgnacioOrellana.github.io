import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel } from "../components/MyLabel";

//* DOC http://localhost:6006/?path=/settings/guide#renderComponent

const meta = {
  // 👇 The component you're working on
  //[agrupacion]/[agrupacion]?/[componente]
  //   title: "Demo/Labels/MyLabel",
  title: "Example/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      description: "Text to display",
      table: { type: { summary: "string" }},
      control: "text",
    },
    size: {
      description: "Size of the label",
      table: { type: { summary: "normal | h1 | h2 | h3" }},
      control: "select",
      options: ["normal", "h1", "h2", "h3"],
    },
    color: {
      description: "Color of the label",
      table: { type: { summary: "text-primary | text-secondary" }},
      control: "select",
      options: ["text-primary", "text-secondary"],
    },
    fontColor: {
      description: "Color of the font",
      table: { type: { summary: "string" }},
      control: "color",
    }
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

// 👇 A story named Primary that renders `<MyLabel />`
export const Primary: Story = {
  args: {
    label: "MyLabel",
    color: "text-primary",
    size: "h3"
  },
};

export const Secondary: Story = {
  args: {
    label: "MyLabel",
    color: "text-secondary"
  },
};

export const Custom: Story = {
  args: {
    label: "MyLabel",
    fontColor: "#01f688"
  },
};
