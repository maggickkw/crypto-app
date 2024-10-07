import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Currency } from "@/interfaces/crypto";
import { Link } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  const headerHeight = useHeaderHeight();

  const currencies = useQuery({
    queryKey: ["listings"],
    queryFn: () => fetch("/api/listings").then((res) => res.json()),
  });

  const ids = currencies?.data
    ?.map((currency: Currency) => currency.id)
    .join(",");

  const { data } = useQuery({
    queryKey: ["info", ids],
    queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

  console.log(JSON.stringify(data, null, 3));

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}>
      <Text style={defaultStyles.sectionHeader}>Latest Crypto</Text>
      <View style={defaultStyles.block}>
        {currencies.data?.map((currency: Currency) => (
          <Link href={`/crypto/${currency.id}`} key={currency.id} asChild>
            <TouchableOpacity style={styles.cryptoItem}>
              <Image
                source={{ uri: data?.[currency?.id]?.logo }}
                style={styles.cryptoLogo}
              />
              <View style={styles.cryptoDetails}>
                <Text style={styles.cryptoName}>{currency.name}</Text>
                <Text style={styles.cryptoSymbol}>{currency.symbol}</Text>
              </View>
              <View style={styles.cryptoPriceContainer}>
                <Text>{currency.quote.USD.price.toFixed(2)} $</Text>
                <View style={styles.priceChange}>
                  <Ionicons
                    name={
                      currency.quote.USD.percent_change_1h > 0
                        ? "caret-up"
                        : "caret-down"
                    }
                    size={16}
                    color={
                      currency.quote.USD.percent_change_1h > 0
                        ? "green"
                        : "red"
                    }
                  />
                  <Text
                    style={{
                      color:
                        currency.quote.USD.percent_change_1h > 0
                          ? "green"
                          : "red",
                    }}>
                    {currency.quote.USD.percent_change_1h.toFixed(2)} %
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({
  cryptoItem: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  cryptoLogo: {
    width: 40,
    height: 40,
  },
  cryptoDetails: {
    flex: 1,
    gap: 6,
  },
  cryptoName: {
    fontWeight: "600",
    color: Colors.dark,
  },
  cryptoSymbol: {
    color: Colors.gray,
  },
  cryptoPriceContainer: {
    gap: 6,
    alignItems: "flex-end",
  },
  priceChange: {
    flexDirection: "row",
    gap: 4,
  },
});
