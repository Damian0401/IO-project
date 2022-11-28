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
        maxHeight: '12rem',
        maxWidth: '12rem',
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
                            <b>Brand:</b> {vehicle.brand}
                        </Text>
                        <Text>
                            <b>Fuel:</b> {vehicle.fuel}
                        </Text>
                        <Text>
                            <b>Year of production:</b> {vehicle.yearOfProduction}
                        </Text>
                        <Text>
                            <b>Seats:</b> {vehicle.seats}
                        </Text>
                        <Text>
                            <b>Status:</b> {vehicle.status}
                        </Text>
                        <Text>
                            <b>Price per day:</b> {vehicle.price}$
                        </Text>
                        <Text>
                            <b>Department:</b> {vehicle.department}
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