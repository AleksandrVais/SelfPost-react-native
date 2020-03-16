import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";
import AboutScreen from "../screens/AboutScreen";
import BookmarkedScreen from "../screens/BookmarkedScreen";
import CreateScreen from "../screens/CreateScreen";
import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import { THEME } from "../theme";

const Stack = createStackNavigator();
const StackMaterial = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainTabNavigator = () => {
	const tabBarOptions = params => ( {
		activeTintColor: THEME.MAIN_COLOR,
		...params
	} );

	const PostOptions = params => ( {
		tabBarLabel: "Post",
		tabBarIcon: ({ color }) => <Ionicons name="ios-albums" size={25} color={color}/>,
		...params
	} );

	const BookedOptions = params => ( {
		tabBarLabel: "Booked",
		tabBarIcon: ({ color }) => <Ionicons name="ios-star" size={25} color={color}/>,
		...params
	} );

	const materialBarStyle = {
		backgroundColor: THEME.MAIN_COLOR
	};

	return Platform.OS === "ios" ? (
		<Tab.Navigator tabBarOptions={tabBarOptions()}>
			<Tab.Screen name='Main' component={PostNavigator} options={PostOptions()}
			/>
			<Tab.Screen name='Post' component={BookmarkedNavigator} options={BookedOptions()}
			/>
		</Tab.Navigator>
	) : (
		<StackMaterial.Navigator tabBarOptions={tabBarOptions()} barStyle={materialBarStyle} shifting={true}>
			<StackMaterial.Screen name='Main' component={PostNavigator} options={PostOptions()}
			/>
			<StackMaterial.Screen name='Post' component={BookmarkedNavigator} options={BookedOptions()}
			/>
		</StackMaterial.Navigator>
	);
};

const navigatorOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
	},
	headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
};

const PostNavigator = () => {
	return ( <Stack.Navigator screenOptions={navigatorOptions}>
		<Stack.Screen name='Main' component={MainScreen}/>
		<Stack.Screen name='Post' component={PostScreen}/>
	</Stack.Navigator> );
};

const BookmarkedNavigator = () => {
	return (
		<Stack.Navigator screenOptions={navigatorOptions}>
			<Stack.Screen name='Booked' component={BookmarkedScreen}/>
			<Stack.Screen name='Post' component={PostScreen}/>
		</Stack.Navigator>
	);
};

const AboutNavigator = () => {
	return <Stack.Navigator screenOptions={navigatorOptions}>
		<Stack.Screen name='About' component={AboutScreen}/>
	</Stack.Navigator>;
};
const CreateNavigator = () => {
	return <Stack.Navigator screenOptions={navigatorOptions}>
		<Stack.Screen name='Create' component={CreateScreen}/>
	</Stack.Navigator>;
};

export const AppNavigator = () => {

	const navigatorOptions = () => ( {
		activeTintColor: THEME.MAIN_COLOR,
		labelStyle: {
			fontFamily: "open-bold"
		}
	} );

	// ADD ICON TO DRAWER

	// const options = props => ({
	// 	drawerIcon: ({ color }) => <Ionicons name="ios-star" size={25} color={color}/>
	// });

	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContentOptions={navigatorOptions()}>
				<Drawer.Screen name='MainScreen' component={MainTabNavigator}/>
				<Drawer.Screen name='About' component={AboutNavigator}/>
				<Drawer.Screen name='Create' component={CreateNavigator}/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

