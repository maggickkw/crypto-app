import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";

enum loginType {
  Phone,
  Email,
  Google,
  Apple,
}

const login = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const {signIn} = useSignIn();

  const onLogin = async (type: loginType) => {

    if (type === loginType.Email) {
      try {

        const { supportedFirstFactors} = await signIn!.create({
          identifier: email
        });

        const firstEmailFactor: any = supportedFirstFactors?.find((factor: any) => {
          return factor.strategy === 'email_code';
        })

        const { emailAddressId } = firstEmailFactor;

        await signIn!.prepareFirstFactor({
          strategy: 'email_code',
          emailAddressId
        });

        router.push({ pathname: '/verify/[email]', params: {email, sigin: 'true'}})

      } catch(err) {
        console.log('error', JSON.stringify(err, null,2))
        if (isClerkAPIResponseError(err)) {
          if (err.errors[0].code === 'from_identifier_not_found') {
            Alert.alert('Error', err.errors[0].message)
          }
        }
      }
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter your email"
            placeholderTextColor={Colors.gray}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            email !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={() => onLogin(loginType.Phone)}>
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.lineText}>or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity
          style={[defaultStyles.pillButton, styles.button]}
          onPress={() => onLogin(loginType.Email)}>
          <Ionicons name='phone-portrait-outline' size={24} color={"#000"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with phone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defaultStyles.pillButton, styles.button]}
          onPress={() => onLogin(loginType.Google)}>
          <Ionicons name='logo-google' size={24} color={"#000"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defaultStyles.pillButton, styles.button]}
          onPress={() => onLogin(loginType.Apple)}>
          <Ionicons name='logo-apple' size={24} color={"#000"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with Apple
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default login;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.lightGray,
  },
  lineText: {
    color: Colors.gray,
    fontSize: 20,
  },
  button: {
    flexDirection: "row",
    gap: 16,
    marginTop: 20,
    backgroundColor: "white",
  },
});
