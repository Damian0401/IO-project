import { Flex, Stack, StackDivider } from "@chakra-ui/react"
import { Rent } from "../../../models/Rent"
import RentListItem from "./RentListItem"

interface Props {
    rents: Rent[]
}

export default function RentList({ rents }: Props) {



    return (
        <>
            <Flex direction='column' maxHeight='80vh'>
                <Stack divider={<StackDivider />} spacing='4' overflow='auto'>
                    {rents.map(rent => (
                        <RentListItem rent={rent} key={rent.id} />
                    ))}
                </Stack>
            </Flex>
        </>
    )
}