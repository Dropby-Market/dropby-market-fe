export interface StoreDetail {
  storeId: number;
  name: string;
  category: string;
  rating: number;
  openingHours: string;
  imageUrl: string;
  lat: number;
  lng: number;
  description: string;
}

export interface Market {
  marketId: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
  phoneNumber: string;
  imageUrl: string;
  storeDetails: StoreDetail[];
}
