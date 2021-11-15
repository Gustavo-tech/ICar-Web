type carColor = {
  color: string;
  id: number;
}

export function getCarColors(): carColor[] {
  return [
    { color: 'Red', id: 1 },
    { color: 'Orange', id: 2 },
    { color: 'Yellow', id: 3 },
    { color: 'Dark Green', id: 4 },
    { color: 'Light Green', id: 5 },
    { color: 'Cyan', id: 6 },
    { color: 'Blue', id: 7 },
    { color: 'Dark Blue', id: 8 },
    { color: 'Purple', id: 9 },
    { color: 'Pink', id: 10 }
  ]
}
