function distanceFromHqInBlocks(pickupBlock) {
    if (pickupBlock<= 42){
        return 42 - pickupBlock
    } else {
        return pickupBlock - 42
    }
}

function distanceFromHqInFeet(pickupBlock){
    return distanceFromHqInBlocks(pickupBlock) * 264
}


function distanceTravelledInFeet(start, destination){
    if (start>destination){
        return (start-destination) * 264
    }else {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    }else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02
    }else if (distance > 2000 && distance < 2500) {
        return 25
    }else {
        return 'cannot travel that far'
    }
}
