import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { View, StyleSheet, Image, Button, Alert } from "react-native";

const askForPermissions = async () => {
	const { status } = await Permissions.askAsync( Permissions.CAMERA, Permissions.CAMERA_ROLL );
	if ( status !== "granted" ) {
		Alert.alert( "Error", "You did not grant access to camera" );
		return false;
	}
	return true;
};

const PhotoPicker = ({ onPick }) => {

	const takePhoto = async () => {
		const hasPermissions = await askForPermissions();
		if ( !hasPermissions ) {
			return;
		}

		const image = await ImagePicker.launchCameraAsync( {
			quality: 0.7,
			allowsEditing: false,
			aspect: [16, 9]
		} );
		onPick( image.uri );
	};

	return (
		<View style={styles.wrapper}>
			<Button title={"Make a Photo"} onPress={takePhoto}/>
		</View>
	);
};

const styles = StyleSheet.create( {
	wrapper: {
		marginBottom: 10
	}
} );

export default PhotoPicker;
