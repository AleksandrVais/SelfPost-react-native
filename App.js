import { AppLoading } from "expo";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { bootstrap } from "./src/bootstrap";
import { AppNavigator } from "./src/navigation/AppNavigation";
import store from "./src/store";

export default function App() {

	const [isReady, setIsReady] = useState( false );

	if ( !isReady ) {
		return <AppLoading startAsync={bootstrap} onFinish={() => setIsReady( true )} onError={console.log}/>;
	}
	return ( <Provider store={store}>
		<AppNavigator/>
	</Provider> );
}

