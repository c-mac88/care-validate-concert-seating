export interface Guest {
  id: number,
  companions: number,
  name: string,
  packageID: number
  seatID: string;
}

export enum Package {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}