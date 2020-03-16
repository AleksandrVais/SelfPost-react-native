import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import Post from "../components/Post";
import PostList from "../components/PostList";

const BookmarkedScreen = ({ navigation, ...props }) => {

	navigation.setOptions( {
		headerTitle: "Bookmark",
		headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title={"Main header"}>
			<Item title='Toggle Drawer' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
		</HeaderButtons>
	} );

	const bookedPost = useSelector( state => state.post.bookedPosts );

	const openPostHandler = post => {
		navigation.navigate( "Post", { postId: post.id, booked: post.booked } );
	};

	return (
		<PostList data={bookedPost} onOpen={openPostHandler}/>
	);
};

export default BookmarkedScreen;
