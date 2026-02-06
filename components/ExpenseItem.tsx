import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { GlobalStyles } from "../constants/styles";
import { Expense } from "../types/Expense";
import { formatDate } from "../utils/getFormattedDate";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ id, description, amount, date }: Expense) => {
  const formattedDate = useMemo(() => formatDate(date), [date]);

  const navigation = useNavigation<any>();

  function expensePressHandler(): void {
    navigation.navigate("ManageExpense", { expenseId: id });
  }
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={[styles.textBase]}>{formattedDate}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text
            style={[styles.textBase, styles.amount]}
          >{`$${amount.toFixed(2)}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary500,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
