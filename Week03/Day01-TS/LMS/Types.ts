
export type MembershipTier = 'Basic' | 'Premium' | 'VIP';
export type ItemStatus = 'Available' | 'CheckedOut' | 'Reserved' | 'Maintenance' | 'Lost';
export type ItemCategory = 'Fiction' | 'NonFiction' | 'Reference' | 'Magazine' | 'Media';

export type BorrowRecord = {
    itemId: number;
    memberId: number;
    borrowDate: Date;
    dueDate: Date;
    returnDate?: Date;
};
export type ReservationQueue = {
    memberId: number;
    reservationDate: Date;
    priority: number;
};