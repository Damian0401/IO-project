import { CardBody, CardHeader } from "@chakra-ui/card";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import ContentCard from "../../../common/shared/ContentCard";
import { imagePlaceholder } from "../../../common/utils/constants";
import { Vehicle } from "../../../models/Vehicle";
import VehicleList from "../list/VehicleList";



export default function VehicleDashboard() {

    const vehicles: Vehicle[] = [
        {
            id: '1',
            imageUrl: imagePlaceholder,
            model: 'test',
            status: 'test'
        },
        {
            id: '2',
            imageUrl: imagePlaceholder,
            model: 'test',
            status: 'test'
        },
        {
            id: '3',
            imageUrl: imagePlaceholder,
            model: 'test',
            status: 'test'
        },
    ];

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