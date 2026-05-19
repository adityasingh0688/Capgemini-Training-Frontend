
export interface IBorrowable {
    borrow(memberId: string,borrowDate: Date, dueDate: Date, returnDate?: Date): boolean;
    returnItem(returnDate: Date): number;
    calculateLateFine(returnDate: Date): number;
}