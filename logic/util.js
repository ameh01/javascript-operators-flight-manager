function Util() {

    function caculateTotalDistributedPassengers(distributedPassengers) {
        let totalDistributedpassengers = 0;
        let value;

        for (value in distributedPassengers) {
            totalDistributedpassengers += distributedPassengers[value];
        }

        return totalDistributedpassengers;
    }

    function calculateTotalNumberOfPassengers(passengersArray) {
         let totalNumberOfPassengers = 0;
         let passengers;

         for (passengers of passengersArray) {
             totalNumberOfPassengers += passengers;
         }

         return totalNumberOfPassengers;
    }

    return {caculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = util();

