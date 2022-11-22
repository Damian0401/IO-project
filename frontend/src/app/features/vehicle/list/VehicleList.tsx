import { Center, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Vehicle } from "../../../models/Vehicle";

interface Props {
    vehicles: Vehicle[]
}

export default function VehicleList({vehicles}: Props) {

    return (
        <>
            <Text>
                List of cars of department
            </Text>
        </>
    )
}