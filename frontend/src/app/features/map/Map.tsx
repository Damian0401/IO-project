import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import { DepartmentMarker } from "../../models/Department";
import "./leaf.css";
import MapMaker from "./MapMarker";

export default function Map() {

    const departments: DepartmentMarker[] = [
        {
            id: '1',
            xPosition: 51.1078852,
            yPosition: 17.0385376,
            name: 'There will be one of the CarrotRent departments',
            address: 'This is the address of the department'
        },
        {
            id: '2',
            xPosition: 51.1151852,
            yPosition: 17.0525376,
            name: 'There will be one of the CarrotRent departments',
            address: 'This is the address of the department'
        },
        {
            id: '3',
            xPosition: 51.1125852,
            yPosition: 17.0275376,
            name: 'There will be one of the CarrotRent departments',
            address: 'This is the address of the department'
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