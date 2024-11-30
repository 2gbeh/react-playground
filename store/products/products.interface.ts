export interface ProductEntity {
  id: number;
  thumbnail: null | string;
  name: string;
  price: number;
  summary: null | string;
  description: null | string;
  barcode: string;
  color: null | string;
  weight: null | number;
  discount: number;
  units: number;
  brand_id: number;
  created_at: string | Date;
  updated_at: null | string | Date;
  deleted_at: null | string | Date;
  uuid: string;
}
