import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import RoundButton from "@/components/RoundButton";
import Dropdown from "@/components/Dropdown";
import { useBalanceStore } from "@/store/balanceStorage";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import WidgetList from "@/components/SortableList/WidgetList";
import {useHeaderHeight} from '@react-navigation/elements'


const home = () => {
  const { balance, runTransaction, transactions, clearTransactions } =
    useBalanceStore();

    const headerHeigth = useHeaderHeight();

  const onAddMoney = () => {
    runTransaction({
      id: Math.random().toString(),
      amount: Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1),
      date: new Date(),
      title: "Added money",
    });
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingTop: headerHeigth}}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance()}</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <RoundButton icon={"add"} text={"Add money"} onPress={onAddMoney} />
        <RoundButton
          icon={"refresh"}
          text={"Exchange"}
          onPress={clearTransactions}
        />
        <RoundButton icon={"list"} text={"Details"} />
        <Dropdown />
      </View>
      <Text style={defaultStyles.sectionHeader}>Transactions</Text>
      <View style={styles.transaction}>
        {transactions.length === 0 && (
          <Text style={{ padding: 14, color: Colors.gray }}>
            No transactions yet
          </Text>
        )}
        {transactions
          .slice()
          .reverse()
          .map((transaction) => (
            <View
              key={transaction.id}
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View style={styles.circle}>
                <Ionicons
                  name={transaction.amount > 0 ? "add" : "remove"}
                  size={24}
                  color={Colors.dark}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "500" }}>{transaction.title}</Text>
                <Text style={{ color: Colors.gray, fontSize: 12 }}>
                  {transaction.date.toLocaleString()}
                </Text>
              </View>
              <Text>{transaction.amount}$</Text>
            </View>
          ))}
      </View>

      <Text style={defaultStyles.sectionHeader}>Widgets</Text>
      <WidgetList />
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  account: {
    margin: 80,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 30,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transaction: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "white",
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});
