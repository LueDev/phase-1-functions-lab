// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    if(pickup >= 42){
        return pickup - 42;
    } else if (pickup <= 42){
        return 42 - pickup;
    }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264; 
}

function distanceTravelledInFeet(pickup, destination){
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(pickup);
}

function calculatesFarePrice(pickup, destination){
    let distance = Math.abs(distanceFromHqInFeet(pickup) - distanceFromHqInFeet(destination));
    console.log(distance);
    let finalFare;

    if (distance < 401){
        finalFare = 0;
    }
    if (distance >= 401 && distance <= 2000){
        distance -= 400;
        finalFare = distance * 0.02;     
    } else if (distance >= 2000 && distance <= 2500){
        finalFare = 25; 
    } else if (distance > 2500){
        finalFare = "cannot travel that far";
    }
    
    return finalFare; 
}

console.log(calculatesFarePrice(43, 44));