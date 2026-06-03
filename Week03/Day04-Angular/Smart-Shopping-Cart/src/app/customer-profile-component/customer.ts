export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  membershipLevel: string;
  loyaltyPoints: number;
  totalOrders: number;
  joinDate: Date;
  profileImageUrl: string;
  isActive: boolean;
  subscribeNewsletter: boolean;
  preferredCategory: string;
}