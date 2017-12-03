import chalk from "chalk";

// extract colors
const { green, red, white } = chalk;

// extract text variants
const { bold, inverse, underline } = chalk;

const text = content => text(content);
const notify = content => green(content);
const error = content => red(content);

export { green, red, white, bold, inverse, underline, text, notify, error };
