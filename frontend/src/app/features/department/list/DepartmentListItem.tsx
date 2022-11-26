import { Button, Flex, Heading, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Department } from "../../../models/Department";


interface Props {
    department: Department;
}

export default function DepartmentListItem({ department }: Props) {


    return (
        <>
            <Stack
                _hover={{ bgColor: 'green.400' }}
                p='3' borderRadius='0.5rem'
                >
                <Heading size='sm'>
                    {department.name}
                </Heading>
                <Flex>
                    <Text>
                        {department.address}
                    </Text>
                    <Spacer />
                    <Button
                        size='sm'
                        colorScheme='teal'
                        as={Link}
                        to={`/departments/${department.id}`}
                    >
                        View
                    </Button>
                </Flex>
            </Stack>
        </>
    )
}