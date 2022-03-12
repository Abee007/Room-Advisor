export interface CollegeSelection {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
  export const colleges: readonly CollegeSelection[] = [
    { value: 'Benjamin Franklin', label: 'Benjamin Franklin', color: '#00B8D9', isFixed: true },
    { value: 'Branford', label: 'Branford', color: '#0052CC', isDisabled: true },
    { value: 'Morse', label: 'Morse', color: '#5243AA' },
    { value: 'Berkeley', label: 'Berkeley', color: '#FF5630', isFixed: true },
    { value: 'Grace Hopper', label: 'Grace Hopper', color: '#FF8B00' },
    { value: 'Timothy Dwight', label: 'Timothy Dwight', color: '#FFC400' },
    { value: 'Jonathan Edwards', label: 'Jonathan Edwards', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  
  export interface RoomSizeSelection {
    readonly value: string;
    readonly label: string;
  }
  
  export const roomSizes: readonly RoomSizeSelection[] = [
    { value: 'Standalone Single', label: 'Standalone Single'},
    { value: 'Double', label: 'Double'},
    { value: 'Triple', label: 'Triple' },
    { value: 'Quad', label: 'Quad'},
  ];
  
  export const optionLength = [
    { value: 1, label: 'general' },
    {
      value: 2,
      label:
        'Evil is the moment when I lack the strength to be true to the Good that compels me.',
    },
    {
      value: 3,
      label:
        "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
    },
  ];
  
  export const dogOptions = [
    { id: 1, label: 'Chihuahua' },
    { id: 2, label: 'Bulldog' },
    { id: 3, label: 'Dachshund' },
    { id: 4, label: 'Akita' },
  ];
  
  // let bigOptions = [];
  // for (let i = 0; i < 10000; i++) {
  // 	bigOptions = bigOptions.concat(colourOptions);
  // }
  
  export interface GroupedOption {
    readonly label: string;
    readonly options: readonly CollegeSelection[] | readonly RoomSizeSelection[];
  }
  
  export const groupedOptions: readonly GroupedOption[] = [
    {
      label: 'Colleges',
      options: colleges,
    },
    {
      label: 'Room Sizes',
      options: roomSizes,
    },
  ];
  