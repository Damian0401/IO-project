import { Center, Stack, Text } from "@chakra-ui/react";
import DepartmentList from "../list/DepartmentList";

export default function DepartmentDashboard() {



    return (
        <>
            <Center height='100vh' display='flex' flex-direction='column'>
                <Stack>
                    <Text>
                        There are departments:
                    </Text>
                    <DepartmentList />
                </Stack>
            </Center>
        </>
    )
}