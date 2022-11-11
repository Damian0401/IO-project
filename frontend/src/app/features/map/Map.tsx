import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import { Department } from "../../models/Department";
import "./leaf.css";
import MapMaker from "./MapMarker";

export default function Map() {

    const departments: Department[] = [
        {
            id: '1',
            x: 51.1078852,
            y: 17.0385376,
            location: 'There will be one of the CarrotRent departments'
        },
        {
            id: '2',
            x: 51.1151852,
            y: 17.0525376,
            location: 'There will be one of the CarrotRent departments'
        },
        {
            id: '3',
            x: 51.1125852,
            y: 17.0275376,
            location: 'There will be one of the CarrotRent departments'
        },
    ];

    return (
        <>
            <MapContainer center={[51.1078852, 17.0385376]} zoom={14} scrollWheelZoom={true} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position='bottomright' />
                {departments.map(department => (
                    <MapMaker department={department} key={department.id} />
                ))}
            </MapContainer>
        </>
    )
}