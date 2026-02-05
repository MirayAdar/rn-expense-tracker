import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Expense } from "../types/Expense";
import ExpenseItem from "./ExpenseItem";

type ExpensesListProps = {
  expenses: Expense[];
};

function renderExpenseItem(itemData: { item: Expense }) {
  return <ExpenseItem {...itemData.item} />;
}
const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
