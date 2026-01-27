// Create a Vehicle interface with properties like Model, vehicle type (car, bike, scooter, truck, etc), wheels, manufactureYear, whether the car isElectric or not.

// Be creative and add more properties as you see fit.

// Then write a function that takes a Vehicle object as a parameter and outputs the details.
interface Vehicle {
    model: string;
    vehicleType: "car" | "bike" | "scooter" | "truck";
    wheels: number;
    manufactureYear: number;
    isElectric: boolean;
    brand: string;
    color: string;
    mileage?: number;
}
const printVehicleDetails = (vehicle: Vehicle): void => {
    const {
        brand,
        model,
        vehicleType,
        wheels,
        manufactureYear,
        isElectric,
        color,
        mileage
    } = vehicle;

    console.log(`Brand: ${brand}`);
    console.log(`Model: ${model}`);
    console.log(`Type: ${vehicleType}`);
    console.log(`Wheels: ${wheels}`);
    console.log(`Manufactured Year: ${manufactureYear}`);
    console.log(`Electric: ${isElectric ? "Yes" : "No"}`);
    console.log(`Color: ${color}`);

    if (mileage !== undefined) {
        console.log(`Mileage: ${mileage} km/l`);
    }
};
printVehicleDetails({
    brand: "Tesla",
    model: "Model 3",
    vehicleType: "car",
    wheels: 4,
    manufactureYear: 2023,
    isElectric: true,
    color: "White",
    mileage: 0
});
