import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";



export default function VehicleDetails() {

    const { id } = useParams<{ id: string }>();

    return (
        <>
            <Center height='100%'>
                Details of the car with id: {id}
            </Center>
        </>
    )
}