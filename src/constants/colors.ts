type carColor = {
  color: string;
  value: string;
  id: number;
}

export function getCarColors(): carColor[] {
  return [
    { color: 'Red', value: '#F9312B', id: 1 },
    { color: 'Orange', value: '#F97C2B', id: 2 },
    { color: 'Yellow', value: '#F3DB0E', id: 3 },
    { color: 'Dark Green', value: '#0EF32A', id: 4 },
    { color: 'Light Green', value: '#7DF30E', id: 5 },
    { color: 'Cyan', value: '#0EF3CD', id: 6 },
    { color: 'Blue', value: '#0EB8F3', id: 7 },
    { color: 'Dark Blue', value: '#0E6CF3', id: 8 },
    { color: 'Purple', value: '#AA0EF3', id: 9 },
    { color: 'Pink', value: '#F30EBF', id: 10 },
    { color: 'White', value: '#FFFFFF', id: 11 },
    { color: 'Black', value: '#000000', id: 12 },
  ]
}
