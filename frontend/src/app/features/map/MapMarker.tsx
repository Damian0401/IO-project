import { Button } from "@chakra-ui/react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { Department } from "../../models/Department";

interface Props {
    department: Department
}

export default function MapMaker({ department }: Props) {

    const url = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F135-1359965_transparent-carrots-png-vegetable-carrot-png-download.png&f=1&nofb=1&ipt=d95e94cc1dc182d7d2f2c327ace0bf6d0fed497ed581fd97a994774904245647&ipo=images';

    return (
        <>
            <Marker position={[department.x, department.y]} key={`${department.x} ${department.y}`}>
                <Popup>
                    {department.location}
                    <img src={url} style={{ height: '30px', width: '30px' }} />
                    <Button as={Link} to={`/departments/${department.id}`}>
                        View
                    </Button>
                </Popup>
            </Marker>
        </>
    )

}