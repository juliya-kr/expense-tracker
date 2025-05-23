import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from '@mui/material';
import type { Expense, ExpenseStats } from '../types/expense';

interface ExpenseListProps {
  expenses: Expense[];
  stats: ExpenseStats;
}

export const ExpenseList = ({ expenses, stats }: ExpenseListProps) => {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Statistics</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
          <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
            <Typography variant="subtitle2">Total Amount</Typography>
            <Typography variant="h5">${stats.totalAmount.toLocaleString()}</Typography>
          </Paper>
          <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
            <Typography variant="subtitle2">Average Daily Expense</Typography>
            <Typography variant="h5">${stats.averageDailyExpense.toLocaleString()}</Typography>
          </Paper>
        </Box>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Top 3 Expenses</Typography>
        <TableContainer component={Paper} variant="outlined">
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Rank</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">Amount ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stats.topExpenses.map((expense, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell align="right">{expense.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper elevation={3}>
        <Typography variant="h6" sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
          All Expenses
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.light' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>#</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">Amount ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((expense, index) => (
                <TableRow 
                  key={index}
                  sx={{ 
                    '&:nth-of-type(odd)': { bgcolor: 'action.hover' },
                    '&:last-child td, &:last-child th': { border: 0 }
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell align="right">{expense.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}; 