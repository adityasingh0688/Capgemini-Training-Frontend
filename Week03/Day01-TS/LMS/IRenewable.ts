export interface IRenewable {
    renew(memberId: string): boolean;
    getRenewalCount(): number;
    canRenew(): boolean;
}