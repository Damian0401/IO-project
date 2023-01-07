import { CardBody, CardHeader } from "@chakra-ui/card";
import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../../../app/common/providers/UserProvider";
import ContentCard from "../../../app/common/shared/ContentCard";
import { userCanCreateVehicle } from "../../../app/common/utils/helpers";





export default function VehicleCreate() {
    const { departmentId } = useParams<{ departmentId: string }>();
    const { state: user } = useContext(UserContext);

    if (!userCanCreateVehicle(user, departmentId)) return <Navigate to='/' />

    return (
        <>
            <ContentCard>
                <CardHeader>
                    <Heading>
                        Create a vehicle
                    </Heading>
                </CardHeader>
                <CardBody>

                </CardBody>
            </ContentCard>
        </>
    )
}