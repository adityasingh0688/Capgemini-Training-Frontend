import { ItemCategory, ItemStatus } from "./Types";

export abstract class LibraryItem {
    id: string;
    title: string;
    category: ItemCategory;
    status: ItemStatus;
    aquisitionDate: Date;

    constructor(id: string, title: string, category: ItemCategory, status: ItemStatus, aquisitionDate: Date) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.status = status;
        this.aquisitionDate = aquisitionDate;
    }
    abstract getMaxBorrowDays(): number;
    abstract getMaxRenewals(): number;

    getItemAge(): number{
        let currentDate = new Date();
        let diff=currentDate.getTime() - this.aquisitionDate.getTime();
        return Math.floor(diff/24/60/60/1000);
    };

    updateStatus(newStatus: ItemStatus): void{
        this.status=newStatus;
    }
}