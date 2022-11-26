import { ArrowForwardIcon, AtSignIcon, CalendarIcon, ChevronRightIcon, EditIcon, HamburgerIcon, Search2Icon, ViewIcon } from "@chakra-ui/icons";
import { Center, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <Flex p='3' bgColor='blackAlpha.800' fontFamily='fantasy' width='100%' zIndex='1' height='7vh'>
                <HStack as={Link} to='/' >
                    <Icon as={CalendarIcon} w='8' h='8' color='whiteAlpha.800' />
                    <Text fontSize='3xl' noOfLines={1} color='whiteAlpha.800'>
                        Carrot Rent
                    </Text>
                </HStack>
                <Spacer />
                <Center height='100%'>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon boxSize={6} color='whiteAlpha.800' />}
                            variant='navbar-menu'
                        />
                        <MenuList fontFamily='sans-serif'>
                            <MenuItem icon={<Search2Icon />} as={Link} to='/map'>
                                Map
                            </MenuItem>
                            <MenuItem icon={<AtSignIcon />} as={Link} to='/departments'>
                                Departments
                            </MenuItem>
                            <MenuItem icon={<ViewIcon/>} as={Link} to='/vehicles'>
                                Vehicles
                            </MenuItem>
                            <MenuItem icon={<CalendarIcon/>} as={Link} to='/rents'>
                                Rents
                            </MenuItem>
                            <MenuItem icon={<ArrowForwardIcon />} as={Link} to='/login'>
                                Login
                            </MenuItem>
                            <MenuItem icon={<EditIcon />} as={Link} to='/register'>
                                Register
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Center>
            </Flex>
            <Outlet />
        </>
    )
}