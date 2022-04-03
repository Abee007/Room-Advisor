const colleges = {
  "Benjamin Franklin": "BF",
  Berkeley: "BK",
  Branford: "BR",
  Davenport: "DC",
  "Ezra Stiles": "ES",
  "Grace Hopper": "GH",
  "Jonathan Edwards": "JE",
  Morse: "MC",
  "Pauli Murray": "MY",
  Pierson: "PC",
  Saybrook: "SY",
  Silliman: "SM",
  "Timothy Dwight": "TD",
  Trumbull: "TC",
};

export const buildings = [
  { value: "Benjamin Franklin", label: "Benjamin Franklin" },
  { value: "Berkeley", label: "Berkeley" },
  { value: "Branford", label: "Branford" },
  { value: "Davenport", label: "Davenport" },
  { value: "Ezra Stiles", label: "Ezra Stiles" },
  { value: "Grace Hopper", label: "Grace Hopper" },
  { value: "Jonathan Edwards", label: "Jonathan Edwards" },
  { value: "Morse", label: "Morse" },
  { value: "Pauli Murray", label: "Pauli Murray" },
  { value: "Pierson", label: "Pierson" },
  { value: "Saybrook", label: "Saybrook" },
  { value: "Silliman", label: "Silliman" },
  { value: "Timothy Dwight", label: "Timothy Dwight" },
  { value: "Trumbull", label: "Trumbull" },
];

export const roomsizes = [
  { value: 1, label: "Single" },
  { value: 2, label: "Double" },
  { value: 3, label: "Triple" },
  { value: 4, label: "Quad" },
  { value: 5, label: "Quint" },
  { value: 6, label: "Sextet" },
  { value: 8, label: "8-Pack" },
];

export const roomColorCodes = [
  { value: 'purple-light', label: 'purple-light', color: '#eee8f1', tcolor: '#79558b'  },
  { value: 'orange-light', label: 'orange-light', color: '#f8d4c9', tcolor: '#c7421a'} ,
  { value: 'yellow-light', label: 'yellow-light', color: '#ffedc2', tcolor: '#cc8f00' },
  { value: 'green-light', label: 'green-light', color: '#d2efd2' , tcolor: '#2a792a' },
  { value: 'green-light', label: 'green-light', color: '#c7f9f0', tcolor: '#0e816c'  },
  { value: 'navy-light', label: 'navy-light', color: '#d8dee9' , tcolor: '#425476'},
  { value: 'gray-light', label: 'gray-light', color: '#dfe8f0' , tcolor: '#34546f'},
  { value: 'blue-light', label: 'blue-light', color: '#c7edfa', tcolor: '#1091bc' },
];

// export const roomColorCodesText = [
//   { value: 'purple-dark', label: 'purple-dark', color: '#79558b' },
//   { value: 'orange-dark', label: 'orange-dark', color: '#c7421a'} ,
//   { value: 'yellow-dark', label: 'yellow-dark', color: '#cc8f00' },
//   { value: 'green-dark', label: 'green-dark', color: '#2a792a' },
//   { value: 'green-dark', label: 'green-dark', color: '#0e816c' },
//   { value: 'navy-dark', label: 'navy-dark', color: '#425476' },
//   { value: 'gray-dark', label: 'gray-dark', color: '#34546f' },
//   { value: 'blue-dark', label: 'blue-dark', color: '#1091bc' },
// ];

export const sortOptions = [
  { value: "ALPHA", label: "Sort by: Suite Name" },
  { value: "FL", label: "Sort by: Floor Level" },
  { value: "BR_SZ", label: "Sort by: Bedroom Size" },
  { value: "NOISE", label: "Sort by: Noise Level" },
];

export const Suites = [
  {
    buildingName: "BK",
    suiteCode: "D31",
    favorited: false,
    favoritedInside: false,
    suiteRooms: [
      {
        roomCode: "D31A",
        meta: {
          favorited: false,
          noise: 4.5,
          size: 3.4,
          noBeds: 2,
          pictues: [],
          roomReviews: [
            {
              rec: [
                "It's tinyyyyyyy and no sunlight cause tiny window. no room...",
              ],
              sw: ["It could use some improvement"],
            },
          ],
        },
      },
      {
        roomCode: "D31B",
        meta: {
          favorited: false,
          noise: 4.5,
          size: 3.4,
          noBeds: 2,
          pictues: [],
          roomReviews: [
            {
              rec: [
                "It's tinyyyyyyy and no sunlight cause tiny window. no room...",
              ],
              sw: ["It could use some improvement"],
            },
          ],
        },
      },
      {
        roomCode: "D31C",
        meta: {
          favorited: false,
          noise: 4.5,
          size: 3.5,
          noBeds: 2,
          pictues: [],
          roomReviews: [
            {
              rec: [
                "It's tinyyyyyyy and no sunlight cause tiny window. no room...",
              ],
              sw: ["It could use some improvement"],
            },
          ],
        },
      },
      {
        roomCode: "D31D",
        meta: {
          favorited: false,
          noise: 4.5,
          size: 3.4,
          noBeds: 2,
          pictues: [],
          roomReviews: [
            {
              rec: [
                "It's tinyyyyyyy and no sunlight cause tiny window. no room...",
              ],
              sw: ["It could use some improvement"],
            },
          ],
        },
      },
    ],
  },
  {
    buildingName: "BK",
    suiteCode: "D32",
    favorited: false,
    favoritedInside: false,
    suiteRooms: [
      {
        roomCode: "D32",
        meta: {
          favorited: false,
          noise: 5,
          size: 3.4,
          noBeds: 2,
          pictues: [],
          roomReviews: [
            {
              rec: [
                "It's tinyyyyyyy and no sunlight cause tiny window. no room...",
              ],
              sw: ["It could use some improvement"],
            },
          ],
        },
      },
    ],
  },
  {
    buildingName: "BK",
    suiteCode: "D45",
    favorited: false,
    favoritedInside: false,
    suiteRooms: [
      {
        roomCode: "D45",
        meta: {
          favorited: false,
          noise: 5,
          size: 3.4,
          noBeds: 2,
          pictues: [],
          roomReviews: [
            {
              rec: [
                "It's tinyyyyyyy and no sunlight cause tiny window. no room...",
              ],
              sw: ["It could use some improvement"],
            },
          ],
        },
      },
    ],
  },
];

export function getAllCollegeNames() {
  return Object.keys(colleges);
}

export function collegesToCode(college) {
  return colleges[college];
}

export function codeToCollege(code) {
  return Object.keys(colleges).find((key) => colleges[key] === code);
}

export function numberToAcronym(no) {
  for (const row of roomsizes) {
    if (row.value === no) return row.label;
  }
}
