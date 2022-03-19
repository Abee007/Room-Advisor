const colleges = {
  "Benjamin Franklin": "BF",
  "Berkeley": "BK",
  "Branford": "BR",
  "Davenport": "DC",
  "Ezra Stiles": "ES",
  "Grace Hopper": "GH",
  "Jonathan Edwards": "JE",
  "Morse": "MC",
  "Pauli Murray": "MY",
  "Pierson": "PC",
  "Saybrook": "SY",
  "Silliman": "SM",
  "Timothy Dwight": "TD",
  "Trumbull": "TC",
};

export const buildings = [
  { value: 'Benjamin Franklin', label: 'Benjamin Franklin' },
  { value: 'Berkeley', label: 'Berkeley' },
  { value: 'Branford', label: 'Branford' },
  { value: 'Davenport', label: 'Davenport' },
  { value: 'Ezra Stiles', label: 'Ezra Stiles' },
  { value: 'Grace Hopper', label: 'Grace Hopper' },
  { value: 'Jonathan Edwards', label: 'Jonathan Edwards' },
  { value: 'Morse', label: 'Morse' },
  { value: 'Pauli Murray', label: 'Pauli Murray' },
  { value: 'Pierson', label: 'Pierson' },
  { value: 'Saybrook', label: 'Saybrook' },
  { value: 'Silliman', label: 'Silliman' },
  { value: 'Timothy Dwight', label: 'Timothy Dwight' },
  { value: 'Trumbull', label: 'Trumbull' },
]

export function getAllCollegeNames() {
  return Object.keys(colleges);
}

export function collegesToCode(college) {
  return colleges[college];
}

export function codeToCollege(code) {
  return Object.keys(colleges).find(key => colleges[key] === code);
}
