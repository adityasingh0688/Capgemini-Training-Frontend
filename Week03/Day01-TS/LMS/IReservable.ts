import { MembershipTier } from "./Types";

export interface IReservable {
    reserve(memberId: string, tier: MembershipTier): boolean;
    cancelReservation(memberId: string): boolean;
    getNextInQueue(): string | null; 
}