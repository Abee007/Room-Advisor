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

const classYears = {
  1: "First Year",
  2: "Sophomore",
  3: "Junior",
  4: "Senior",
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
  { value: 7, label: "7-Pack" },
  { value: 8, label: "8-Pack" },
  { value: 9, label: "9-Pack" },
  { value: 10, label: "10-Pack" },
];

export const sortOptions = [
  { value: "ALPHA", label: "Sort by: Suite Name (A-Z)" },
  { value: "NEGALPHA", label: "Sort by: Suite Name (Z-A)" },
  { value: "FL", label: "Sort by: Floor Level (Low to High)" },
  { value: "NEGFL", label: "Sort by: Floor Level (High to Low)" },
  { value: "BR_SZ", label: "Sort by: Bedroom Size (High to Low)" },
  { value: "NEGBR_SZ", label: "Sort by: Bedroom Size (Low to High)" },
  { value: "NOISE", label: "Sort by: Noise Level (Low to High)" },
  { value: "NEGNOISE", label: "Sort by: Noise Level (High to Low)" },
];

export const roomColorCodes = [
  {
    value: "purple-light",
    label: "purple-light",
    color: "#eee8f1",
    tcolor: "#79558b",
  },
  {
    value: "orange-light",
    label: "orange-light",
    color: "#f8d4c9",
    tcolor: "#c7421a",
  },
  {
    value: "yellow-light",
    label: "yellow-light",
    color: "#ffedc2",
    tcolor: "#cc8f00",
  },
  {
    value: "green-light",
    label: "green-light",
    color: "#d2efd2",
    tcolor: "#2a792a",
  },
  {
    value: "green-light",
    label: "green-light",
    color: "#c7f9f0",
    tcolor: "#0e816c",
  },
  {
    value: "navy-light",
    label: "navy-light",
    color: "#d8dee9",
    tcolor: "#425476",
  },
  {
    value: "gray-light",
    label: "gray-light",
    color: "#dfe8f0",
    tcolor: "#34546f",
  },
  {
    value: "blue-light",
    label: "blue-light",
    color: "#c7edfa",
    tcolor: "#1091bc",
  },
];

// one --> reddest
export const badgeColorCodes = [
  {
    value: "one",
    label: "one",
    color: "#e7716f",
  },
  {
    value: "two",
    label: "two",
    color: "#e77871",
  },
  {
    value: "three",
    label: "three",
    color: "#e88574",
  },
  {
    value: "four",
    label: "four",
    color: "#ea8e77",
  },
  {
    value: "five",
    label: "five",
    color: "#eb9077",
  },
  {
    value: "six",
    label: "six",
    color: "#eb9378",
  },
  {
    value: "seven",
    label: "seven",
    color: "#ef9f7c",
  },
  {
    value: "nine",
    label: "nine",
    color: "#f0ae80",
  },
  {
    value: "five",
    label: "five",
    color: "#eb9077",
  },
  {
    value: "six",
    label: "six",
    color: "#eb9378",
  },
  {
    value: "seven",
    label: "seven",
    color: "#ef9f7c",
  },
  {
    value: "eight",
    label: "eight",
    color: "#f0ae80",
  },
  {
    value: "nine",
    label: "nine",
    color: "#f1b884",
  },
  {
    value: "ten",
    label: "ten",
    color: "#f7d48a",
  },
  {
    value: "eleven",
    label: "eleven",
    color: "#fae28f",
  },
  {
    value: "twelve",
    label: "twelve",
    color: "#f1e790",
  },
  {
    value: "thirteen",
    label: "thirteen",
    color: "#e4e28f",
  },
  {
    value: "fourteen",
    label: "fourteen",
    color: "#e2e08e",
  },
  {
    value: "fifteen",
    label: "fifteen",
    color: "#cdd88b",
  },
  {
    value: "sixteen",
    label: "sixteen",
    color: "#b6cd88",
  },
  {
    value: "seventeen",
    label: "seventeen",
    color: "#aeca87",
  },
  {
    value: "eighteen",
    label: "eighteen",
    color: "#9ac285",
  },
  {
    value: "nineteen",
    label: "nineteen",
    color: "#95bf84",
  },
  {
    value: "twenty",
    label: "twenty",
    color: "#87b882",
  },
  {
    value: "twentyone",
    label: "twentyone",
    color: "#76b180",
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

export function numberToClassYear(number) {
  return classYears[number];
}
