export interface IHousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number; // 可用单元
  wifi: boolean;
  laundry: boolean; // 洗衣房
}
