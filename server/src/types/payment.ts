export interface PaymentInfo {
    id?:string;
    courseId: string;
    studentId: string;
    paymentId?: string;
    amount: number;
    currency: string;
    payment_method: string;
    status: string;
}