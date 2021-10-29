
const Input = {
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
}

export default Input;