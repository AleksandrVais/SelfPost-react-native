import React from "react";
import { FlatList, StyleSheet, View, Text} from "react-native";
import Post from "./Post";

const PostList = ({ data, onOpen }) => {
	if(!data.length){
		return <View stylw={styles.wrapper}>
			<Text style={styles.noItems}>No Posts</Text>
		</View>
	}

	return (
		<View style={styles.wrapper}>
			<FlatList data={data} keyExtractor={post => post.id.toString()}
			          renderItem={({ item }) => <Post post={item} onOpen={onOpen}/>}/>
		</View>
	);
};

export default PostList;

const styles = StyleSheet.create( {
	wrapper: {
		padding: 10
	},
	noItems: {
		fontFamily: 'open-regular',
		textAlign: 'center',
		marginVertical: 10,
		fontSize : 18
	}
} );
