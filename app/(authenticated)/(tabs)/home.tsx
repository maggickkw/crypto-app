import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import RoundButton from "@/components/RoundButton";
import Dropdown from "@/components/Dropdown";

const home = () => {
  const balance = 1450;


  const onAddMoney = () => {}
  return (
    <ScrollView style={styles.container}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance}</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <RoundButton icon={'add'} text={'Add money'} onPress={onAddMoney} />
        <RoundButton icon={'refresh'} text={'Exchange'}  />
        <RoundButton icon={'list'} text={'Details'}  />
<Dropdown />

      </View>
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
    fontWeight: '500',

  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
});
