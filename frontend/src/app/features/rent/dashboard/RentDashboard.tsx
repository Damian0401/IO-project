import { CardBody, CardHeader } from "@chakra-ui/card";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ContentCard from "../../../common/shared/ContentCard";
import { Rent } from "../../../models/Rent";
import RentList from "../list/RentList";



export default function RentDashboard() {

    const rents: Rent[] = [
        {
            id: '1',
            startDate: new Date(),
            status: 'active',
            vehicle: 'vehicle'
        },
        {
            id: '2',
            startDate: new Date(),
            status: 'active',
            vehicle: 'vehicle'
        },
        {
            id: '3',
            startDate: new Date(),
            status: 'active',
            vehicle: 'vehicle'
        },
    ]

    return (
        <>
            <ContentCard>
                <CardHeader>
                    <Heading size='lg' p='2'>
                        All rents:
                    </Heading>
                </CardHeader>
                <CardBody>
                    <RentList rents={rents} />
                </CardBody>
            </ContentCard>
        </>
    )
}