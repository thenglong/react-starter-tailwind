import classNamesOriginal from "classnames";
import { overrideTailwindClasses } from "tailwind-override";

export const classNames = (...args) => {
  return overrideTailwindClasses(classNamesOriginal(...args));
};
