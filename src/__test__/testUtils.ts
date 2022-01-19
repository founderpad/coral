// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

const Providers = ({ children }: { children: any }) => {
	return children;
	// return (
	//   <ThemeProvider theme="light">
	//     <TranslationProvider messages={defaultStrings}>
	//       {children}
	//     </TranslationProvider>
	//   </ThemeProvider>
	// )
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render, userEvent };
