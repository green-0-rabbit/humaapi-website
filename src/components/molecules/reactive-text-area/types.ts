/* eslint-disable import/no-cycle */
import { MantineSize } from "@mantine/core";
import { CommonProps } from "../types";

export type TextAreaCustomProps = {
  label?: string;
  size?: MantineSize;
  autosize?: boolean;
  minRows?: number;
  maxRows?: number;

  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
} & CommonProps<HTMLInputElement | HTMLTextAreaElement>;
