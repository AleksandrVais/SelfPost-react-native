import { AppLoading } from "expo";
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { bootstrap } from "./src/bootstrap";
import { AppNavigator } from "./src/navigation/AppNavigation";

export default function App() {

	const [isReady, setIsReady] = useState( false );

	if ( !isReady ) {
		return <AppLoading startAsync={bootstrap} onFinish={() => setIsReady( true )} onError={console.log}/>;
	}
	return ( <AppNavigator/> );
}

