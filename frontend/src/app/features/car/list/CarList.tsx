import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";



export default function CarList() {

    const { id } = useParams<{ id: string }>();

    console.log(id);

    return (
        <>
            <Center height='100vh'>
                List of cars with id: {id}
            </Center>
        </>
    )
}