/* eslint-disable import/no-cycle */
import { CommonProps } from "../types";

export type RecaptchaCustomProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  label?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
} & CommonProps<HTMLInputElement>;
