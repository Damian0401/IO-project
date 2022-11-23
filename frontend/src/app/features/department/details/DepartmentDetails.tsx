import { Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import VehicleList from "../../vehicle/list/VehicleList";
import { DepartmentDetails as Department } from "../../../models/Department";
import { CardBody, CardHeader } from "@chakra-ui/card";
import ContentCard from "../../../common/shared/ContentCard";
import { imagePlaceholder } from "../../../common/utils/constants";

export default function DepartmentDetails() {

    const { id } = useParams<{ id: string }>();

    const department: Department = {
        id: id || 'id',
        name: 'test',
        address: 'test',
        manager: 'test',
        vehicles: [
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
        ]
    }

    return (
        <>
            <ContentCard backUrl={'/departments'}>
                <CardHeader>
                    <Heading>
                        {department.name}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4' maxHeight='80vh'>
                        <StackDivider />
                        <Text>
                            Address: {department.address}
                        </Text>
                        <Text>
                            Manager: {department.manager}
                        </Text>
                        <VehicleList vehicles={department.vehicles} />
                    </Stack>
                </CardBody>
            </ContentCard>
        </>
    )
}