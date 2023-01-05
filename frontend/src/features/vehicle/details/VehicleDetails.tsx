import { Button, ButtonGroup, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../../app/api/agent";
import { UserContext } from "../../../app/common/providers/UserProvider";
import ContentCard from "../../../app/common/shared/ContentCard";
import { CLIENT, EMPLOYEE, MANAGER } from "../../../app/common/utils/constants";
import LoadingSpinner from "../../../app/layout/LoadingSpinner";
import { VehicleDetails as Vehicle } from "../../../app/models/Vehicle";


export default function VehicleDetails() {

    const { id } = useParams<{ id: string }>();

    const [vehicle, setVehicle] = useState<Vehicle>();

    const { state: user } = useContext(UserContext);

    const userCanDelete = user?.role === MANAGER && vehicle && user.departmentIds.includes(vehicle.departmentId);
    const userCanEdit = (user?.role === MANAGER || user?.role === EMPLOYEE) && vehicle && user.departmentIds.includes(vehicle.departmentId);
    const userCanRent = user?.role === CLIENT;

    useEffect(() => {
        agent.Vehicle.getById(id!).then(data => setVehicle(data));
    }, [id]);

    const imageStyles: CSSProperties = {
        borderRadius: '0.5rem',
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
                        <img
                            src={vehicle.imageUrl}
                            style={imageStyles}
                            alt='vehicleImage'
                        />
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
                        {user && <ButtonGroup position='absolute' bottom='0' right='0'>
                            {userCanDelete && <Button colorScheme='red'>
                                Delete
                            </Button>}
                            {userCanEdit && <Button colorScheme='blue'>
                                Edit
                            </Button>}
                            {userCanRent && <Button colorScheme='teal'>
                                Rent
                            </Button>}
                        </ButtonGroup>}
                    </GridItem>
                </Grid>
            </ContentCard>
        </>
    )
}