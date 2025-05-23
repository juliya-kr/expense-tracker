export interface Expense {
  category: string;
  amount: number;
}

export interface ExpenseStats {
  totalAmount: number;
  averageDailyExpense: number;
  topExpenses: Expense[];
} 