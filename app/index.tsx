import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);
  console.log(JSON.stringify(assets?.[0].uri));
  if (!assets?.[0].uri) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Video
        resizeMode={ResizeMode.COVER}
        isMuted
        isLooping
        shouldPlay
        useNativeControls={false}
        source={{ uri: assets?.[0]?.uri }}
        style={styles.video}
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Change the way you make money!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Link
          href={"/login"}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
          asChild>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={"/signup"}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: "#fff" },
          ]}
          asChild>
          <TouchableOpacity>
            <Text style={styles.buttonText2}>Signup</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    marginTop: 80,
    padding: 20,
  },
  text: {
    fontSize: 36,
    color: "white",
    fontWeight: "900",
    textTransform: "uppercase",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 23,
    fontWeight: "500",
  },
  buttonText2: {
    color: "black",
    fontSize: 23,
    fontWeight: "500",
  },
});
export default Page;
