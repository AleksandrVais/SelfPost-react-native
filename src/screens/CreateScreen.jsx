import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

const CreateScreen = ({ navigation }) => {
	navigation.setOptions( {
		headerTitle: "Create",
		headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title={"Main header"}>
			<Item title='Toggle Drawer' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
		</HeaderButtons>
	} );

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>CreateScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create( {
	wrapper: {
		padding: 10
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		fontFamily: "open-regular",
		marginVertical: 10
	}
} );

export default CreateScreen;
