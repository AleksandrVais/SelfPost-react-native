import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutScreen = (props) => {
	return (
		<View style={styles.center}>
			<Text>About Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create( {
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
} );

export default AboutScreen;
