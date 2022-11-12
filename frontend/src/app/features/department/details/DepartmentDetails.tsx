import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CarList from "../../car/list/CarList";

export default function DepartmentDetails() {

    const { id } = useParams<{ id: string }>();

    return (
        <>
            <Center height='100vh'>
                <Flex direction='column'>
                    <Text>
                        This is department with id: {id}
                    </Text>
                    <CarList />
                </Flex>
            </Center>
        </>
    )
}