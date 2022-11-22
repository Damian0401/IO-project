import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import VehicleList from "../../vehicle/list/VehicleList";
import {DepartmentDetails as Department} from "../../../models/Department";

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
                imageUrl: 'test',
                model: 'test',
                status: 'test'
            },
            {
                id: '2',
                imageUrl: 'test',
                model: 'test',
                status: 'test'
            },
            {
                id: '3',
                imageUrl: 'test',
                model: 'test',
                status: 'test'
            },
        ]
    }

    return (
        <>
            <Center height='100%'>
                <Flex direction='column'>
                    <Text>
                        This is department with id: {id}
                    </Text>
                    <VehicleList vehicles={department.vehicles} />
                </Flex>
            </Center>
        </>
    )
}