
export const useSeating = () => {
  const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  let rowIndex = 0;
  let seatNumber = 1;
  let capacity = 100;

  const getSeats = (numberOfSeats: number) => {
    const retVal = [];
    for (let i = 0; i < numberOfSeats; i++) {
      if (capacity > 0) {
        retVal.push(rows[rowIndex] + seatNumber);
        seatNumber ++;
        if (seatNumber > 10 && rowIndex < (rows.length - 1)) {
          rowIndex ++; 
          seatNumber = 1;
        }
        capacity --;
      }
    }
    return retVal.join(',')
  };

  return { getSeats };
};