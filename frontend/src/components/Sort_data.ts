export interface sortOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

export const sortOptions: readonly sortOption[] = [
    { value: 'Sort by: Floor Level', label: 'Sort by: Floor Level', color: '#00B8D9', isFixed: true },
    { value: 'Sort by: Common Room Size', label: 'Sort by: Common Room Size', color: '#0052CC', isDisabled: false },
    { value: 'Sort by: Bedroom Size', label: 'Sort by: Bedroom Size', color: '#5243AA' },
    { value: 'Sort by: Noise Level', label: 'Sort by: Noise Level', color: '#FF5630', isFixed: false},
  ];