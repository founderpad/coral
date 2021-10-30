
const Input = {
    variants: {
        outline: {
            field: {
                border: '1px solid',
                borderColor: 'gray.200',
                borderRadius: 'md',
                _focus: {
                    borderColor: 'gray.400',
                    boxShadow: 'none'
                },
                _hover: {
                    borderColor: 'gray.300'
                },
            }
        },
        filled: {
            field: {
                border: '1px solid',
                borderColor: 'gray.100',
                borderRadius: 'md',
                _focus: {
                    border: '1px solid',
                    borderColor: 'gray.400',
                    boxShadow: 'none'
                }
            }
        }
    },
    defaultProps: {
        variant: 'outline',
        size: 'sm',
        borderRadius: 'md',
        _focus: {
            border: '1px solid',
            borderColor: 'gray.200'
        }
    }
}

export default Input;