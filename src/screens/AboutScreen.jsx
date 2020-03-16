import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

const AboutScreen = ({ navigation }) => {

	navigation.setOptions( {
		headerTitle: "About",
		headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title={"Main header"}>
			<Item title='Toggle Drawer' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
		</HeaderButtons>
	} );

	return (
		<View style={styles.center}>
			<Text>Hello! This is one of the my first apps by using react native.</Text>
			<Text>Version <Text style={styles.version}>1.0.0</Text></Text>
		</View>
	);
};

const styles = StyleSheet.create( {
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	version: {
		fontFamily: "open-bold"

	}
} );

export default AboutScreen;
