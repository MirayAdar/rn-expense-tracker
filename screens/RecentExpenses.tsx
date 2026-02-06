import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOverview from "../components/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOverview expensesPeriod="Last 7 Days" />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
