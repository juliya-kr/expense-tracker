import { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';
import type { Expense } from '../types/expense';

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

export const ExpenseForm = ({ onAddExpense }: ExpenseFormProps) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (category && amount) {
      onAddExpense({
        category,
        amount: parseFloat(amount.replace(/,/g, '')),
      });
      setCategory('');
      setAmount('');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          sx={{ flexGrow: 1 }}
        />
        <TextField
          label="Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          type="text"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9,]*' }}
          sx={{ flexGrow: 1 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Expense
        </Button>
      </Box>
    </Paper>
  );
}; 