import { CardBody, CardHeader } from "@chakra-ui/card";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import agent from "../../../app/api/agent";
import ContentCard from "../../../app/common/shared/ContentCard";
import { Vehicle } from "../../../app/models/Vehicle";
import VehicleList from "../list/VehicleList";



export default function VehicleDashboard() {

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(() => {
        agent.Vehicle.getAll().then(data => setVehicles(data));
    }, []);

    return (
        <ContentCard>
            <CardHeader>
                <Heading>
                    Vehicles
                </Heading>
            </CardHeader>
            <CardBody>
                <Stack maxHeight='80vh'>
                    <Text as='b'>
                        Some filters goes here...
                    </Text>
                    <VehicleList vehicles={vehicles} />
                </Stack>
            </CardBody>
        </ContentCard>
    )
}