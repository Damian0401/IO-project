import { Flex } from "@chakra-ui/react"
import DepartmentListItem from "./DepartmentListItem"



export default function DepartmentList() {

    const ids = [
        '1',
        '2',
        '3',
    ]

    return (
        <>
            <Flex direction='column'>
                {ids.map(id => (
                    <DepartmentListItem id={id} key={id} />
                ))}
            </Flex>
        </>
    )
}