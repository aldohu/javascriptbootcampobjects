let restaurant = {
    name: "ASB",
    guestCapacity: 75,
    guestCount : 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(seated) {
        this.guestCount += seated; 
    },
    removeParty: function(removed){
        this.guestCount -= removed;
    }
}


//seatParty


//removeParty


restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(4);
console.log(restaurant.checkAvailability(4));