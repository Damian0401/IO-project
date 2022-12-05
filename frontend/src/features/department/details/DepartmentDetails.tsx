import { Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import VehicleList from "../../vehicle/list/VehicleList";
import { DepartmentDetails as Department } from "../../../app/models/Department";
import { CardBody, CardHeader } from "@chakra-ui/card";
import ContentCard from "../../../app/common/shared/ContentCard";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../app/layout/LoadingSpinner";
import agent from "../../../app/api/agent";

export default function DepartmentDetails() {

    const { id } = useParams<{ id: string }>();

    const [department, setDepartment] = useState<Department>();

    useEffect(() => {
        agent.Department.getById(id!).then(data => setDepartment(data));
    }, [id]);

    if (!department) return <LoadingSpinner />;

    return (
        <>
            <ContentCard>
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