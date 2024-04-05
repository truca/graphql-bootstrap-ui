import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ChakraProvider,
  InputProps,
  ThemeProvider,
  theme,
} from "@chakra-ui/react";
import { Form } from "./index";
import { Direction, FieldType } from "./types";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "molecules/Form",
};
export default meta;
type Story = StoryObj<typeof Form>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wrapper = (Story: any) => (
  <ChakraProvider>
    <Story />
  </ChakraProvider>
);

export const FormWithAllTypes: Story = {
  args: {
    direction: Direction.COLUMN,
    commonFieldProps: {
      inputProps: { colorScheme: "red" } as any,
    },
    fields: [
      { id: "username", label: "Username", type: FieldType.TEXT },
      { id: "password", label: "Password", type: FieldType.PASSWORD },
      { id: "email", label: "Email", type: FieldType.EMAIL },
      { id: "tel", label: "Telephone", type: FieldType.TELEPHONE },
      { id: "number", label: "Number", type: FieldType.NUMBER },
      { id: "date", label: "Date", type: FieldType.DATE },
      { id: "time", label: "Time", type: FieldType.TIME },
      {
        id: "datetime-local",
        label: "Datetime Local",
        type: FieldType.DATETIME_LOCAL,
      },
      { id: "month", label: "Month", type: FieldType.MONTH },
      { id: "week", label: "Week", type: FieldType.WEEK },
      { id: "url", label: "URL", type: FieldType.URL },
      { id: "search", label: "Search", type: FieldType.SEARCH },
      { id: "color", label: "Color", type: FieldType.COLOR },
      { id: "textarea", label: "Textarea", type: FieldType.TEXTAREA },
      {
        id: "select",
        label: "Select",
        placeholder: "Select an option",
        type: FieldType.SELECT,
        options: [
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ],
      },
      { id: "checkbox", label: "Checkbox", type: FieldType.CHECKBOX },
      {
        id: "radio",
        label: "Radio",
        type: FieldType.RADIO,
        options: [
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ],
      },
      { id: "file", label: "File", type: FieldType.FILE },
      { id: "hidden", label: "Hidden", type: FieldType.HIDDEN },
      { id: "reset", label: "Reset", type: FieldType.RESET },
      { id: "submit", label: "Submit", type: FieldType.SUBMIT },
    ],
  },
  decorators: [Wrapper],
};
