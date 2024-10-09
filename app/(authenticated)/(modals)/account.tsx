import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { BlurView } from "expo-blur";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { getAppIcon, setAppIcon } from "expo-dynamic-app-icon";

const ICONS = [
  {
    name: "Original",
    icon: require("@/assets/images/icon.png"),
  },
  {
    name: "Dark",
    icon: require("@/assets/images/icon-dark.png"),
  },
  {
    name: "Vivid",
    icon: require("@/assets/images/icon-vivid.png"),
  },
];

const account = () => {
  const { user } = useUser();
  // console.log(user)
  const { signOut } = useAuth();

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);

  const [edit, setEdit] = useState(false);

  const [activeIcon, setActiveIcon] = useState("Default");

  useEffect(() => {
    const loadCurrentIconPref = async () => {
      const icon = await getAppIcon();
      setActiveIcon(icon);
    };
  }, []);

  const onSaveUser = async () => {
    try {
      await user?.update({ firstName: firstName!, lastName: lastName! });
      setEdit(false);
    } catch (error) {
      console.log(error);
    } finally {
      setEdit(false);
    }
  };

  const onCaptureImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.75,
      base64: true,
    });

    if (!result.canceled) {
      const base64 = `data:image/png:base64,${result.assets[0].base64}`;
      user?.setProfileImage({
        file: base64,
      });
    }
  };

  const onChangeIcon = async (icon: string) => {
    await setAppIcon(icon.toLowerCase());
    setActiveIcon(icon);
  };

  return (
    <BlurView
      intensity={80}
      style={{
        flex: 1,
        paddingTop: 100,
        backgroundColor:
          Platform.OS === "ios" ? "rgba(0,0,0,0.5" : "rgba(0,0,0,0.8)",
      }}
      tint="dark">
      {user && (
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={onCaptureImage} style={styles.captureBtn}>
            {user?.imageUrl && (
              <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
            )}
          </TouchableOpacity>

          <View style={{ flexDirection: "row", gap: 6 }}>
            {!edit && (
              <View style={styles.editRow}>
                <Text style={{ fontSize: 26, color: "#fff" }}>
                  {firstName} {lastName}
                </Text>
                <TouchableOpacity onPress={() => setEdit(true)}>
                  <Ionicons
                    name="ellipsis-horizontal"
                    size={24}
                    color={"#fff"}
                  />
                </TouchableOpacity>
              </View>
            )}

            {edit && (
              <View style={styles.editRow}>
                <TextInput
                  placeholder="First Name"
                  value={firstName || ""}
                  onChangeText={setFirstName}
                  style={[styles.inputField]}
                />
                <TextInput
                  placeholder="Last Name"
                  value={lastName || ""}
                  onChangeText={setLastName}
                  style={[styles.inputField]}
                />
                <TouchableOpacity onPress={onSaveUser}>
                  <Ionicons name="checkmark-outline" size={24} color={"#fff"} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={() => signOut()}>
          <Ionicons name="log-out" size={23} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18 }}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="person" size={23} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18 }}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="bulb" size={23} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18 }}>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="mail" size={23} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18 }}>Inbox</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        {ICONS.map((icon) => (
          <TouchableOpacity
            key={icon.name}
            style={styles.button}
            onPress={() => onChangeIcon(icon.name)}
            >
            <Image source={icon.icon} style={{ width: 24, height: 24 }} />
            <Text style={{ color: "#fff", fontSize: 18 }}>{icon.name}</Text>
            {activeIcon.toLowerCase() === icon.name.toLowerCase() && (
              <Ionicons name="checkmark" size={24} color={'#fff'} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </BlurView>
  );
};

export default account;

const styles = StyleSheet.create({
  editRow: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  captureBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: 140,
    height: 44,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
  },
  actions: {
    backgroundColor: "rgba(256, 256,256, 0.1)",
    borderRadius: 16,
    gap: 0,
    margin: 20,
  },
  button: {
    padding: 14,
    flexDirection: "row",
    gap: 20,
  },
});
