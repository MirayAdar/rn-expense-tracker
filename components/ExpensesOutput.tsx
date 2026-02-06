import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Expense } from "../types/Expense";
import { DUMMY_EXPENSES } from "../utils/dummy-expenses";
import { GlobalStyles } from "../constants/styles";

type ExpensesOverviewProps = {
  expenses?: Expense[];
  expensesPeriod: string;
};
const ExpensesOverview = ({
  expensesPeriod,
  expenses,
}: ExpensesOverviewProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
