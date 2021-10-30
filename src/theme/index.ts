import { extendTheme } from '@chakra-ui/react';
import { Badge, Button, Divider, Input, Link, Menu, Spinner, Tabs, Tags } from './components';
import { Colors, Fonts } from './foundations';

const overrides = {
    // styles,
    // borders,
    // Other foundational style overrides go here
    colors: Colors,
    fonts: Fonts,
    components: {
        Button,
        Badge,
        Input,
        Select: Input,
        Textarea: Input,
        NumberInput: Input,
        Menu,
        Tags,
        Tabs,
        Spinner,
        Divider,
        Link
    }
}

export default extendTheme(overrides);