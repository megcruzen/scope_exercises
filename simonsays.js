// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

/*
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        const invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}
*/

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]];

for (let k = 0; k < locations.length; k++) {
    // console.log(locations[k]);
    if (locations[k] > 2) {
        console.log("This location is invalid");
    }
    else {
        console.log(locations[k]);
    }
};

// Not sure what the intended result is for this exercise, so I simplified the locations:

const simpleLocations = [1, 2, 3, 4, 5];

for (let k = 0; k < simpleLocations.length; k++) {
    if (simpleLocations[k] > 2) {
        console.log(`${simpleLocations[k]}: This location is invalid`);
    }
    else {
        console.log(simpleLocations[k]);
    }
};