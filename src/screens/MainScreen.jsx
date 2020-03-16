import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import Post from "../components/Post";
import PostList from "../components/PostList";
import { loadPosts } from "../store/actions/post";

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

	useEffect( () => {
		dispatch( loadPosts() );
	}, [dispatch] );

	const openPostHandler = post => {
		navigation.navigate( "Post", { postId: post.id, booked: post.booked } );
	};

	return (
		<PostList data={allPosts} onOpen={openPostHandler}/>
	);
};

export default MainScreen;
