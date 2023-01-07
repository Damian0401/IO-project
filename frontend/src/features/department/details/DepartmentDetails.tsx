import { Button, ButtonGroup, Flex, Heading, IconButton, Spacer, Stack, StackDivider, Text, Tooltip } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import VehicleList from "../../vehicle/list/VehicleList";
import { DepartmentDetails as Department } from "../../../app/models/Department";
import { CardBody, CardHeader } from "@chakra-ui/card";
import ContentCard from "../../../app/common/shared/ContentCard";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../../../app/layout/LoadingSpinner";
import agent from "../../../app/api/agent";
import { AddIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { userCanCreateVehicle, userCanManageEmployees, userCanManageRents } from "../../../app/common/utils/helpers";
import { UserContext } from "../../../app/common/providers/UserProvider";

export default function DepartmentDetails() {

    const { id } = useParams<{ id: string }>();
    const [department, setDepartment] = useState<Department>();
    const { state: user } = useContext(UserContext);

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
                        <Flex>
                            <ButtonGroup>
                                {userCanCreateVehicle(user, department) && <Tooltip label='Add a new vehicle' >
                                    <IconButton aria-label="add-button" icon={<AddIcon />} />
                                </Tooltip>}
                                {userCanManageEmployees(user, department) && <Tooltip label='Manage employees' >
                                    <IconButton aria-label="manage-button" icon={<EditIcon />} />
                                </Tooltip>}
                                {userCanManageRents(user, department) && <Tooltip label='Manage rents' >
                                    <IconButton aria-label="rents-button" icon={<CalendarIcon />} />
                                </Tooltip>}
                            </ButtonGroup>
                        </Flex>
                        <VehicleList vehicles={department.vehicles} />
                    </Stack>
                </CardBody>
            </ContentCard>
        </>
    )
}