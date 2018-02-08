// Primitive Types

type DynamicString = string | null | undefined;

// Pages
type PageState = { id?: string; appState };

// Organisms

type LocalItem = {
	category: string;
	count: number;
	price: number;
	addCategory: boolean;
};

// Molecules

// Atoms

type Button = {
	children: string;
	className?: string;
	ref?: Function;
	danger?: boolean;
	default?: boolean;
	disabled?: boolean;
	success?: boolean;
	warn?: boolean;
};

// Classes

type APIOptions = {
	data: FormData;
	headers?: Headers;
	method: string;
};

// Functions

export { APIOptions, Button, DynamicString, LocalItem, PageState };
