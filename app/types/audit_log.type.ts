export interface AuditLog {
    key: React.Key;
    name: string;
    product_key: string;
    expiration_date: string;
    licensed_to_email: string;
    licensed_to_name: string;
    manufacturer: string;
    min_qty: number;
    total: number;
    avail: string;
}