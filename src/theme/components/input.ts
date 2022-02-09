const Input = {
	variants: {
		outline: {
			field: {
				border: '1px solid',
				borderColor: 'gray.200',
				borderRadius: 'sm',
				color: '#425068',
				_focus: {
					borderColor: 'gray.400',
					boxShadow: 'none'
				},
				_hover: {
					borderColor: 'gray.300'
				},
				_invalid: {
					borderColor: 'inherit'
				}
			}
		},
		filled: {
			field: {
				border: '1px solid',
				borderColor: 'gray.100',
				borderRadius: 'sm',
				_focus: {
					border: '1px solid',
					borderColor: 'gray.200',
					boxShadow: 'none'
				}
			}
		}
	},
	defaultProps: {
		variant: 'outline',
		size: 'sm',
		borderRadius: 'sm',
		_focus: {
			border: '1px solid',
			borderColor: 'gray.200'
		}
	}
};

export default Input;
