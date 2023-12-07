export type BankAccount = Transaction[];

export type Transaction = {
  transactionDate: string;
  description: string;
  category: string;
  debit?: number;
  credit?: number;
  id: number;
}