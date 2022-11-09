import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const lightBackground = 'linear-gradient(90deg, rgba(65,208,101,1) 0%, rgba(193,213,79,1) 50%, rgba(219,162,23,0.9435924027814251) 100%)';
const darkBackground = 'linear-gradient(90deg, rgba(58,145,80,1) 0%, rgba(129,139,68,1) 50%, rgba(171,123,7,0.9435924027814251) 100%)';

const theme = extendTheme({
    styles: {
        global: (props: StyleFunctionProps) => ({
            html: {
                height: '100%',
            },
            body: {
                bg: mode(lightBackground, darkBackground)(props),
                color: mode('blackAlpha.700', 'whiteAlpha.600')(props),
                margin: 0,
                padding: 0,
            },
            '&::-webkit-scrollbar': {
                width: '1rem',
                borderRadius: '2rem',
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '2rem',
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            components: {
                
            }
        })
    },
});

export default theme;