import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = () => {
    const {top} = useSafeAreaInsets()
  return (
    <BlurView intensity={80} tint="extraLight" style={{paddingTop: top}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.rndBtn}>
          <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, textAlign: 'center'}}>MW</Text>
        </TouchableOpacity>
        <View style={styles.searchSection}>
            <Ionicons style={styles.icon} name="search" size={20} color={Colors.dark} />
            <TextInput placeholder="Search" placeholderTextColor={Colors.dark} style={styles.input} />
        </View>
        <View style={styles.circle}>
            <Ionicons name="stats-chart" size={20} color={Colors.dark} />
        </View>
        <View style={styles.circle}>
            <Ionicons name="card" size={20} color={Colors.dark} />
        </View>
      </View>
    </BlurView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    height: 60,
    backgroundColor: 'transparent',
    paddingHorizontal: 20
  },
  rndBtn:{
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
flex: 1,
paddingTop: 10,
paddingRight: 10,
paddingBottom: 10,
paddingLeft: 0,
color: Colors.dark
  },
  icon:{
    padding: 10
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center'
}
});
