import React, { useState, useRef, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	Button,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import PhotoPicker from "../PhotoPicker";
import { addPost } from "../store/actions/post";
import { THEME } from "../theme";
import { useDispatch } from "react-redux";

const CreateScreen = ({ navigation }) => {
	navigation.setOptions( {
		headerTitle: "Create Post",
		headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title={"Main header"}>
			<Item title='Toggle Drawer' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
		</HeaderButtons>
	} );

	const dispatch = useDispatch();
	const [text, setText] = useState( "" );
	const [img, setImg] = useState(null);

	const createPostHandler = () => {
		const post = {
			date: new Date().toJSON(),
			text: text,
			img: img,
			booked: false
		};

		dispatch( addPost( post ) );
		navigation.navigate( "Main" );
		setText( "" );
		setImg(null);
	};

	const PhotoPickerHandler = uri => setImg(uri)

	return ( <ScrollView>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.wrapper}>

					<Text style={styles.title}>Create New Post</Text>
					<TextInput style={styles.textArea}
					           placeholder={"Enter you text"}
					           value={text}
					           onChangeText={setText}
					           multiline={true}/>
					<PhotoPicker onPick={PhotoPickerHandler}/>
					{!!img && <Image style={styles.image} source={{ uri: img }}/>}
					<Button title={"Create Post"} color={THEME.MAIN_COLOR} onPress={createPostHandler}
					        disabled={!text}/>
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
};

const styles = StyleSheet.create( {
	wrapper: {
		padding: 10
	},
	title: {
		fontSize: 20,
		textAlign: "center",
		fontFamily: "open-regular",
		marginVertical: 10
	},
	textArea: {
		padding: 10,
		marginBottom: 10
	},
	image: {
		width: "100%",
		height: 200,
		marginVertical: 10
	}
} );

export default CreateScreen;
