import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "../../../models/Vehicle";


interface Props {
    vehicle: Vehicle
}

export default function VehicleListItem({ vehicle }: Props) {

    const imageStyles: CSSProperties = {
        height: '3rem',
        width: '3rem',
        borderRadius: '0.5rem'
    }

    return (
        <>
            <Flex p='2' _hover={{ bgColor: 'green.400' }} borderRadius='0.5rem'>
                <img src={vehicle.imageUrl} style={imageStyles} />
                <Box>
                    <Text p='1' as='b'>
                        {vehicle.model}
                    </Text>
                    <Text p='1' pt='0'>
                        {vehicle.status}
                    </Text>
                </Box>
                <Spacer />
                <Flex direction='column'>
                    <Spacer />
                    <Button
                        size='xs'
                        colorScheme='teal'
                        as={Link} to={`/vehicles/${vehicle.id}`}
                    >
                        View
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}