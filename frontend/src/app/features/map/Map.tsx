import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./leaf.css";

interface Department {
    x: number;
    y: number;
    description: string;
}

export default function Map() {

    const url = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F135-1359965_transparent-carrots-png-vegetable-carrot-png-download.png&f=1&nofb=1&ipt=d95e94cc1dc182d7d2f2c327ace0bf6d0fed497ed581fd97a994774904245647&ipo=images';

    const departments: Department[] = [
        {
            x: 51.1078852,
            y: 17.0385376,
            description: 'There will be one of the CarrotRent departments'
        },
        {
            x: 51.1151852,
            y: 17.0525376,
            description: 'There will be one of the CarrotRent departments'
        },
        {
            x: 51.1125852,
            y: 17.0275376,
            description: 'There will be one of the CarrotRent departments'
        },
    ];

    return (
        <>
            <MapContainer center={[51.1078852, 17.0385376]} zoom={14} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {departments.map(department => (
                    <Marker position={[department.x, department.y]}>
                        <Popup>
                            {department.description}
                            <img src={url} style={{ height: '30px', width: '30px' }} />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    )
}