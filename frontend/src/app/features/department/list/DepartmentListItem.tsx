import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface Props {
    id: string;
}

export default function DepartmentListItem({id}: Props) {


    return (
        <>
            <Button as={Link} to={`/department/${id}`} variant='ghost'>
                This is department with id: {id}
            </Button>
        </>
    )
}