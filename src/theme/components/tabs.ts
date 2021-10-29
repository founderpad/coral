const Tabs = {
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
}

export default Tabs;