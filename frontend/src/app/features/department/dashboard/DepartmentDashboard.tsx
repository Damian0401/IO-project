import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Box, Button, Center, Container, Heading, Stack, StackDivider, Text, useColorMode } from "@chakra-ui/react";
import ContentCard from "../../../common/shared/ContentCard";
import { Department } from "../../../models/Department";
import DepartmentList from "../list/DepartmentList";

export default function DepartmentDashboard() {

    const { colorMode } = useColorMode();

    const departments: Department[] = [
        {
            id: '1',
            name: 'test',
            address: 'test'
        },
        {
            id: '2',
            name: 'test',
            address: 'test'
        },
        {
            id: '3',
            name: 'test',
            address: 'test'
        },
        {
            id: '4',
            name: 'test',
            address: 'test'
        },
        {
            id: '5',
            name: 'test',
            address: 'test'
        },
    ]

    return (
        <>
            <ContentCard>
                <CardHeader>
                    <Heading size='lg' p='2'>
                        Available departments:
                    </Heading>
                </CardHeader>
                <CardBody>
                    <DepartmentList departments={departments} />
                </CardBody>
            </ContentCard>
        </>
    )
}