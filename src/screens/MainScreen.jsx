import React, { useEffect } from "react";
import {View, StyleSheet, ActivityIndicator} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import Post from "../components/Post";
import PostList from "../components/PostList";
import { loadPosts } from "../store/actions/post";
import { THEME } from "../theme";

const MainScreen = ({ navigation, ...props }) => {

	navigation.setOptions( {
		headerTitle: "My Blog",
		headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title={"Main header"}>
			<Item title='Take photo' iconName='ios-camera' onPress={() => navigation.navigate( "Create" )}/>
		</HeaderButtons>,
		headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title={"Main header"}>
			<Item title='Toggle Drawer' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
		</HeaderButtons>
	} );

	const dispatch = useDispatch();
	const allPosts = useSelector( state => state.post.allPosts );
	const loading = useSelector(state => state.post.loading);


	useEffect( () => {
		dispatch( loadPosts() );
	}, [dispatch] );

	const openPostHandler = post => {
		navigation.navigate( "Post", { postId: post.id, booked: post.booked } );
	};

	return (
		!loading ? <PostList data={allPosts} onOpen={openPostHandler}/> : <View style={styles.center}>
			<ActivityIndicator color={THEME.MAIN_COLOR} size={40} />
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent :'center',
		alignItems: 'center'
	}
})

export default MainScreen;
