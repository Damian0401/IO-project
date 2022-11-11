import { CalendarIcon, HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import { Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <Flex p='3' bgColor='blackAlpha.800' fontFamily='fantasy' position='absolute' top='0' zIndex={1} width='100%'>
                <HStack as={Link} to='/' >
                    <Icon as={CalendarIcon} w='8' h='8' color='whiteAlpha.800' />
                    <Text fontSize='3xl' noOfLines={1} color='whiteAlpha.800'>
                        Carrot Rent
                    </Text>
                </HStack>
                <Spacer />
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon boxSize={6} color='whiteAlpha.800' />}
                        variant='navbar-menu'
                    />
                    <MenuList>
                        <MenuItem icon={<Search2Icon />} as={Link} to ='/map'>
                            Map
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Outlet />
        </>
    )
}