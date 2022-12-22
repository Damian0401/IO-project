import { CardBody, CardHeader } from "@chakra-ui/card";
import { Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import agent from "../../../app/api/agent";
import ContentCard from "../../../app/common/shared/ContentCard";
import { SelectedFilters, Vehicle } from "../../../app/models/Vehicle";
import VehicleList from "../list/VehicleList";
import VehicleFilters from "./VehicleFilters";


export default function VehicleDashboard() {

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    
    const handleSearch = ({maxPrice, minPrice, seats, 
        brandId, departmentId, fuelId, modelId}: SelectedFilters) => {
        let query = '';
        if (maxPrice) query += `maxPrice=${maxPrice}&`;
        if (minPrice) query += `minPrice=${minPrice}&`;
        if (seats) query += `seats=${seats}&`;
        if (brandId) query += `brandId=${brandId}&`;
        if (departmentId) query += `departmentId=${departmentId}&`;
        if (fuelId) query += `fuelId=${fuelId}&`;
        if (modelId) query += `modelId=${modelId}&`;
        agent.Vehicle.getAll(query).then(data => setVehicles(data));
    }

    return (
        <ContentCard>
            <CardHeader>
                <Heading>
                    Vehicles
                </Heading>
            </CardHeader>
            <CardBody>
                <Stack maxHeight='80vh'>
                    <VehicleFilters handleSearch={handleSearch} />
                    <VehicleList vehicles={vehicles} />
                </Stack>
            </CardBody>
        </ContentCard>
    )
}