import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Post from "../components/Post";
import { DATA } from "../data";

const MainScreen = ({ navigation, ...props }) => {

	const openPostHandler = post => {
		navigation.navigate( "Post", { postId: post.id } );
	};

	return (
		<View style={styles.wrapper}>
			<FlatList data={DATA} keyExtractor={post => post.id.toString()}
			          renderItem={({ item }) => <Post post={item} onOpen={openPostHandler}/>}/>
		</View>
	);
};

MainScreen.navigationOptions = {
	headerTitle: "My Blog"
};

const styles = StyleSheet.create( {
	wrapper: {
		padding: 10
	}
} );

export default MainScreen;
