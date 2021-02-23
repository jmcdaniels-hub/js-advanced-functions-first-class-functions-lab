

const returnFirstTwoDrivers = 
    function(arr){
        return arr.slice(0,2)
    }

const returnLastTwoDrivers =
    function(arr){
        return arr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


let createFareMultiplier = 
    function(int){
        return function multiplyFare(fare){
            return int * fare;
        };
    };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);



const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
  };