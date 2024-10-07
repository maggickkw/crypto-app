import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect } from "react";

import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { useQuery } from "@tanstack/react-query";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Ticker } from "@/interfaces/crypto";
import { Circle, useFont } from "@shopify/react-native-skia";
import { format } from "date-fns";
import * as Haptics from "expo-haptics";
import Animated, { SharedValue, useAnimatedProps } from "react-native-reanimated";

Animated.addWhitelistedNativeProps({text: true});
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

const Chart = () => {
  const font = useFont(require("@/assets/fonts/SpaceMono-Regular.ttf"), 12);

  const { state, isActive } = useChartPressState<{
    x: string;
    y: { price: number };
  }>({ x: "", y: { price: 0 } });

  useEffect(() => {
    console.log(isActive);
    console.log(state);
    if (isActive) Haptics.selectionAsync();
  }, [isActive, state]);

  const {
    data: tickers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tickers"],
    queryFn: async (): Promise<Ticker[]> =>
      fetch(`/api/tickers`).then((res) => res.json()),
  });

  const transformedTickers = tickers?.map((ticker) => ({
    timestamp: format(new Date(ticker.timestamp), "MMM d"),
    price: ticker.price,
  }));

  const animatedText = useAnimatedProps(() => {
    return {
        text: `${state.y.price.value.value.toFixed(2)} $`,
        defaultValue: ''
    }
  })
  const animatedDateText = useAnimatedProps(() => {

    // console.log(date)
    return {
        text: `${state.x.value.value}`,
        defaultValue: ''
    }
  })

// console.log('STATE 🍍🍍🍍', state)


  return (
    <View
      style={[
        defaultStyles.block,
        {
          height: 500,
        },
        isLoading && { justifyContent: "center", alignItems: "center" },
      ]}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : error ? (
        <Text>Error fetching data</Text>
      ) : transformedTickers && transformedTickers.length > 0 ? (
        <>
          {!isActive && (
            <View>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: Colors.dark,
                }}>
                {transformedTickers[
                  transformedTickers?.length - 1
                ].price.toFixed(2)}
              </Text>
              <Text style={{ fontSize: 18, color: Colors.gray }}>Today</Text>
            </View>
          )}
          {isActive && (
            <View>
              <AnimatedTextInput
                editable={false}
                underlineColorAndroid={"transparent"}
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: Colors.dark,
                }} animatedProps={animatedText}>

              </AnimatedTextInput>
              <AnimatedTextInput
                editable={false}
                underlineColorAndroid={"transparent"}
                style={{ fontSize: 18, color: Colors.gray }} animatedProps={animatedDateText}>
              </AnimatedTextInput>
            </View>
          )}
          <CartesianChart
            chartPressState={state}
            axisOptions={{
              font,
              tickCount: 5,
              labelOffset: { x: -2, y: 0 },
              labelColor: Colors.gray,
              formatYLabel: (v) => `${v} $`,
              formatXLabel: (timestamp) => timestamp,
            }}
            data={transformedTickers}
            xKey="timestamp"
            yKeys={["price"]}>
            {({ points }) => (
              <>
                <Line
                  points={points.price}
                  color={Colors.primary}
                  strokeWidth={3}
                />
                {isActive && (
                  <ToolTip x={state.x.position} y={state.y.price.position} />
                )}
              </>
            )}
          </CartesianChart>
        </>
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
