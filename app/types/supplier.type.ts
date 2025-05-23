export interface Supplier {
  key: React.Key;
  id: number;
  supplier: string;
  product_key: string;
  expiration_date: string;
  licensed_to_email: string;
  licensed_to_name: string;
  manufacturer: string;
  min_qty: number;
  total: number;
  avail: string;
  action: string;
  check_status: string;
}

