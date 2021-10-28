import { extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const customTheme = extendTheme({
	colors: {
		fpPrimary: {
			50: '#E6F4F9',
			100: '#BFE4EF',
			200: '#95D2E4',
			300: '#6BBFD9',
			400: '#4BB2D1',
			500: '#2BA4C9',
			600: '#269CC3',
			700: '#2092BC',
			800: '#1A89B5',
			900: '#1078A9'
		},
		fpGrey: {
			50: '#EEF0F2',
			100: '#D4D9E0',
			200: '#B8C0CB',
			300: '#9CA6B6',
			400: '#8693A6',
			500: '#718096',
			600: '#69788E',
			700: '#5E6D83',
			800: '#546379',
			900: '#425068'
		},
		fpLightGrey: {
			50: '#FDFDFD',
			100: '#FAFAFA',
			200: '#F7F7F7',
			300: '#F3F3F3',
			400: '#F1F1F1',
			500: '#EEEEEE',
			600: '#ECECEC',
			700: '#E9E9E9',
			800: '#E7E7E7',
			900: '#E2E2E2'
		}
	},
	fonts: {
		heading: {
			h1: {

			}
		},
		body: 'Hind',
		text: 'Hind',
		menubar: 'Hind',
		button: 'Hind',
		a: 'Montserrat'
	},
	components: {
		Steps,
		Button: {
			baseStyle: {
				fontWeight: 'medium'
			},
			variants: {
				outline: {
					borderColor: 'gray.100',
				}
			}
		},
		Tags: {
			variants: {
				outline: {
					borderColor: 'red.100',
					background: 'red.500'
				}
			}
		},
		Input: {
			variants: {
				outline: {
					field: {
						border: '1px solid',
						borderColor: 'gray.100',
						borderRadius: 'md',
						size: 'sm',
						_focus: {
						  	borderColor: 'gray.300',
							boxShadow: 'none'
						},
						_hover: {
							borderColor: 'gray.300'
						}
					}
				}
			},
			defaultProps: {
				variant: 'outline'
			}
		},
		Tabs: {
			variants: {
				line: {
					tab: {
						color: 'gray.400',
						fontSize: { base: 'xs', sm: 'sm' },
						fontWeight: 'medium',
						borderBottomWidth: 2,
						_selected: {
							color: 'black',
							borderColor: 'black'
						},
						_hover: {
							borderColor: 'currentColor'
						},
						_disabled: {
							opacity: 0.4,
							cursor: 'not-allowed',
						},
						mr: 4,
						px: 0
					},
					tablist: {
						px: 2,
						borderBottomWidth: 1,
						borderBottomColor: 'gray.100'
					}
				}
			}
		},
		MenuItem: {
			baseStyle: {
				bgColor: 'transparent'
			}
		},
		Select: {
			baseStyle: {
				// bgColor: 'red'
			}
		},
		Link: {
			// variants: {
			// 	primary: ({ colorScheme = 'fpGrey' }) => ({
			// 		color: `${colorScheme}.500`,
			// 		_hover: {
			// 			color: `${colorScheme}.600`
			// 		}
			// 	})
			// }
		},
		Badge: {
			sizes: {
				lg: {
					h: 12,
					minW: 12,
					fontSize: 'lg',
					px: 6
				},
				md: {
					h: 10,
					minW: 10,
					fontSize: 'md',
					px: 4
				},
				sm: {
					h: 8,
					minW: 8,
					fontSize: 'sm',
					px: 3
				},
				xs: {
					h: 6,
					minW: 6,
					fontSize: 'xs',
					px: 2
				}
			}
		}
	}
});

export default customTheme;
