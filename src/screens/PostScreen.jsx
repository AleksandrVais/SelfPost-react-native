import React from "react";
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";

const PostScreen = ({ navigation }) => {
	const postId = navigation.getParam( "postId" );
	const post = DATA.find(post => post.id === postId)

	const removeHandler = () => {
		Alert.alert(
			'Delete post',
			'Are you sure you want to delete the post?',
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{text: 'Delete', style: 'destructive', onPress: () => console.log('OK Pressed')},
			],
			{cancelable: false},
		);
	}

	return (
		<ScrollView>
			<Image style={styles.image} source={{uri: post.img }}/>
			<View style={styles.textWrap}>
				<Text style={styles.title}>{post.text}</Text>
				<Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
			</View>
		</ScrollView>
	);
};

PostScreen.navigationOptions = ({ navigation }) => {
	const postId = navigation.getParam( "postId" );
	return { headerTitle: `Post ${postId}` };
};

const styles = StyleSheet.create( {
	image: {
		width: "100%",
		height: 200
	},
	textWrap: {
		padding: 10
	},
	title: {
		fontFamily: 'open-regular'
	}
} );

export default PostScreen;
