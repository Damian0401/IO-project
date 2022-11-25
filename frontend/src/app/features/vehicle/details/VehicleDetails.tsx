import { CardHeader } from "@chakra-ui/card";
import { Button, Center, Flex, Grid, GridItem, Heading, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { useParams } from "react-router-dom";
import ContentCard from "../../../common/shared/ContentCard";
import { imagePlaceholder } from "../../../common/utils/constants";
import { VehicleDetails as Vehicle } from "../../../models/Vehicle";


export default function VehicleDetails() {

    const { id } = useParams<{ id: string }>();

    const vehicle: Vehicle = {
        id: id || 'id',
        brand: 'brand',
        fuel: 'fuel',
        imageUrl: imagePlaceholder,
        description: 'description description description description description description description',
        model: 'model',
        price: 1,
        seats: 1,
        status: 'status',
        yearOfProduction: 2000,
        department: 'department',
    }

    const imageStyles: CSSProperties = {
        height: '16rem',
        width: '16rem',
        borderRadius: '0.5rem'
    }

    return (
        <>
            <ContentCard>
                <Grid
                    minHeight='30vh'
                    templateRows='repeat(5, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={3}
                >
                    <GridItem rowSpan={4} colSpan={2}>
                        <img src={vehicle.imageUrl} style={imageStyles} />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={3}>
                        <Heading>
                            {vehicle.model}
                        </Heading>
                        <Text noOfLines={2}>
                            {vehicle.description}
                        </Text>
                        <Text>
                            brand: <b>{vehicle.brand}</b>
                        </Text>
                        <Text>
                            fuel: <b>{vehicle.fuel}</b>
                        </Text>
                        <Text>
                            year of production: <b>{vehicle.yearOfProduction}</b>
                        </Text>
                        <Text>
                            seats: <b>{vehicle.seats}</b>
                        </Text>
                        <Text>
                            status: <b>{vehicle.status}</b>
                        </Text>
                        <Text>
                            price per day: <b>{vehicle.price}$</b>
                        </Text>
                        <Text>
                            department: <b>{vehicle.department}</b>
                        </Text>
                    </GridItem>
                    <GridItem colSpan={5} position='relative'>
                        <Button colorScheme='teal' position='absolute' bottom='0' right='0'>
                            Do something
                        </Button>
                    </GridItem>
                </Grid>
            </ContentCard>
        </>
    )
}