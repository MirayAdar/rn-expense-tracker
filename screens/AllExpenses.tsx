import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOverview from "../components/ExpensesOverview";

const AllExpenses = () => {
  return <ExpensesOverview expensesPeriod="Total" />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
