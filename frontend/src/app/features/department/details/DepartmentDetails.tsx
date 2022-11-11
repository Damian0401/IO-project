import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function DepartmentDetails() {

    const { id } = useParams<{ id: string }>();

    return (
        <>
            <Center height='100vh'>
                This is department with id: {id} 
            </Center>
        </>
    )
}