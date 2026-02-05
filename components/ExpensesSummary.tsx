import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Expense } from "../types/Expense";
import { GlobalStyles } from "../constants/styles";

type ExpensesSummaryProps = {
  expenses: Expense[];
  periodName: string;
};
const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontWeight: "bold",
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
  },
});
