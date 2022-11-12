import { Center, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";



export default function CarList() {

    const { id } = useParams<{ id: string }>();

    console.log(id);

    return (
        <>
            <Text>
                List of cars of department with id: {id}
            </Text>
        </>
    )
}