function Passengers() {

    function checkFlightCapacity(flightCapacity, passengersArray) {
        let passengersNumber = 0;
        let passengers;

        for(passengers of passengersArray) {
            passengersNumber += passengers;
        }

        if (passengersNumber > flightCapacity) {
            throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + "");
        }

        return passengersNumber;
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatPerFlight) {
        
        let vipPassengersWithBusinessSeats=0, vipPassengersWithEconomySeats=0,
            regularPassengerswithBusinessSeats=0, regularPassengersWithEconomySeats=0;
        let availableBusinessSeats = nrOfFlights * businessSeatsPerFlight;
        let availableEconomySeats = nrOfFlights * economySeatsPerflight;

        var vipBusinessConfiguration = {passengers:vipPassengers, seats:availableBusinessSeats};
        vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

        var vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers, seats:availableEconomySeats};
        vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatsPerflight);

        var regularBusinessConfiguration = {passengers:regularPassengers, seats:vipBusinessConfiguration.seats};
        regularPassengerswithBusinessSeats = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

        var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers, seats:vipEconomyConfiguration.seats};
        regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration, economySeatsPerflight);

        return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats, vipPassengersWithEconomySeats:vipPassengersWithEconomySeats, regularPassengerswithBusinessSeats:regularPassengerswithBusinessSeats, regularPassengersWithEconomySeats:regularPassengersWithEconomySeats};
    }

    function updateConfiguration(configuration, seatsPerFlight) {
        let passengersWithSeats = 0;

        while (configuration.passengers > 0) {
            if (configuration.seat > 0) {
                if (configuration.passengers >= configuration.seats) {
                   if (configuration.seats > configuration.seatsPerFlight) {
                       configuration.passengers -= seatsPerFlight;
                       configuration.seats -= seatsPerFlight;
                       passengersWithSeats += seatsPerFlight;
                   } else {
                       configuration.passengers -= configuration.seats;
                       passengersWithSeats += configuration.seats;
                       configuration.seats = 0;
                   } 
                } else {
                    passengersWithSeats += configuration.passengers;
                    configuration.seats -= configuration.passengers;
                    configuration.passengers = 0;
                }
            } else {
                break;
            }

            return passengersWithSeats;
        }

    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};

}

module.exports = Passengers();

