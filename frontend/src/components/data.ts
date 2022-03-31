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

  export interface ClassYearSelection {
    readonly value: string;
    readonly label: string;
  }
  
  export const classYears: readonly ClassYearSelection[] = [
    { value: 'First-year', label: 'First-year'},
    { value: 'Sophomore', label: 'Sophomore'},
    { value: 'Junior', label: 'Junior' },
    { value: 'Senior', label: 'Senior'},
  ];

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
  