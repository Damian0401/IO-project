import { Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { CSSProperties, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../../app/api/agent";
import ContentCard from "../../../app/common/shared/ContentCard";
import LoadingSpinner from "../../../app/layout/LoadingSpinner";
import { VehicleDetails as Vehicle } from "../../../app/models/Vehicle";


export default function VehicleDetails() {

    const { id } = useParams<{ id: string }>();

    const [vehicle, setVehicle] = useState<Vehicle>();

    useEffect(() => {
        agent.Vehicle.getById(id!).then(data => setVehicle(data));
    }, [id]);

    const imageStyles: CSSProperties = {
        maxHeight: '12vw',
        maxWidth: '12vw',
        borderRadius: '0.5rem'
    }

    if (!vehicle) return <LoadingSpinner />

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
                        <img src={vehicle.imageUrl} style={imageStyles} alt='vehicleImage' />
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