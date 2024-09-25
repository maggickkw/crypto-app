import { StyleSheet, Text, View } from "react-native";
import RoundButton from "./RoundButton";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  renderers,
} from "react-native-popup-menu";
import { Entypo, FontAwesome, FontAwesome6, Foundation, MaterialIcons } from "@expo/vector-icons";
import DropdownButton from "./DropdownButton";
import Colors from "@/constants/Colors";


const Divider = () => <View style={styles.divider} />;

const Dropdown = () => {
  const { ContextMenu, SlideInMenu, Popover } = renderers;
  return (
    <Menu
      renderer={Popover}
      rendererProps={{
        anchorStyle: {},
        placement: "bottom",
        preferredPlacement: "bottom",
      }}
      >
      <MenuTrigger
        onPress={() =>{}}
        children={
          <DropdownButton icon={"ellipsis-horizontal"} text={"More"} />
        }
        // customStyles={{}}
      />

      {/* </MenuTrigger> */}
      <MenuOptions
        optionsContainerStyle={{
          width:250,
          borderRadius: 15,
          paddingHorizontal: 4,
          paddingVertical: 15,
        }}>
        <MenuOption onSelect={() => {}}>
          <View style={styles.iconContainer}>
            <Text>Statement</Text>
            <FontAwesome6 name="table-list" size={24} color={Colors.dark} />
          </View>
        </MenuOption>
        <Divider />
        <MenuOption onSelect={() => {}}>
          <View style={styles.iconContainer}>
            <Text>Converter</Text>
            <MaterialIcons name="currency-exchange" size={22} color="black" />
          </View>
        </MenuOption>
        <Divider />
        <MenuOption onSelect={() => {}}>
          <View style={styles.iconContainer}>
            <Text>Background</Text>
            <MaterialIcons name="photo-library" size={22} color="black" />
          </View>
        </MenuOption>
        <Divider />
        <MenuOption onSelect={() => {}}>
          <View style={styles.iconContainer}>
            <Text>Add new account</Text>
            <Foundation name="folder-add" size={22} color="black" />
          </View>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#d7d9db",
    flex: 1
  },
  iconContainer: {flexDirection: 'row', justifyContent: 'space-between', padding: 3}
});
