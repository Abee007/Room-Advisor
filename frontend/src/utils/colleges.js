const colleges = {
    "Benjamin Franklin" : "BF",
    "Berkeley" : "BK",
    "Branford" : "BR",
    "Davenport" : "DC",
    "Ezra Stiles" : "ES",
    "Grace Hopper" : "GH",
    "Jonathan Edwards" : "JE",
    "Morse" : "MC",
    "Pauli Murray" : "MY",
    "Pierson" : "PC",
    "Saybrook" : "SY",
    "Silliman" : "SM",
    "Timothy Dwight" : "TD",
    "Trumbull" : "TC"
}

export function getAllCollegeNames() {
    return Object.keys(colleges);
}

export function collegesToCode(college) {
    return colleges[college];
}