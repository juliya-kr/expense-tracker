import { useState } from 'react'
import { Container, Typography, CssBaseline, createTheme, ThemeProvider } from '@mui/material'
import type { Expense, ExpenseStats } from './types/expense'
import { ExpenseForm } from './components/ExpenseForm'
import { ExpenseList } from './components/ExpenseList'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
})

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([])

  const calculateStats = (expenses: Expense[]): ExpenseStats => {
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    const averageDailyExpense = totalAmount / 30
    const topExpenses = [...expenses]
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 3)

    return {
      totalAmount,
      averageDailyExpense,
      topExpenses,
    }
  }

  const handleAddExpense = (newExpense: Expense) => {
    setExpenses([...expenses, newExpense])
  }

  const stats = calculateStats(expenses)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Expense Tracker
        </Typography>
        
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} stats={stats} />
      </Container>
    </ThemeProvider>
  )
}

export default App
