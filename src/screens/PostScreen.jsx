import React, { useEffect, useLayoutEffect } from "react";
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { removePost, toggleBooked } from "../store/actions/post";
import { THEME } from "../theme";

const PostScreen = ({ route, navigation }) => {
	const { postId, booked } = route.params;
	const post = useSelector( state => state.post.allPosts.find( post => post.id === postId ) );
	const iconName = !!booked ? "ios-star" : "ios-star-outline";

	navigation.setOptions( {
		headerTitle: `Post ${postId}`,
		headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title={"Main header"}>
			<Item title='Add to bookmarks' iconName={iconName} onPress={() => dispatch( toggleBooked( post ) )}/>
		</HeaderButtons>
	} );

	const isBooked = useSelector( state => state.post.bookedPosts.some( post => post.id === postId ) );
	const dispatch = useDispatch();

	useEffect( () => {if(post){navigation.setParams( { booked: isBooked } )}}, [isBooked] );

	const removeHandler = () => {
		Alert.alert(
			"Delete post",
			"Are you sure you want to delete the post?",
			[
				{
					text: "Cancel",
					style: "cancel"
				},
				{
					text: "Delete",
					style: "destructive",
					onPress: () => {
						navigation.navigate( "Main" );
						dispatch( removePost( postId ) );
					}
				}
			],
			{ cancelable: false }
		);
	};

	if(!post){
		return null
	}

	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: post.img }}/>
			<View style={styles.textWrap}>
				<Text style={styles.title}>{post.text}</Text>
				<Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
			</View>
		</ScrollView>
	);
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
		fontFamily: "open-regular"
	}
} );

export default PostScreen;
