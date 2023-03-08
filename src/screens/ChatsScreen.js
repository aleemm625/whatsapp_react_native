import {
	View,
	Text,
	FlatList,
} from 'react-native';
import React from 'react';

import Chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

const ChatsScreen = () => {
	return (
		// <View>
		<FlatList
			data={Chats}
			renderItem={({ item }) => (
				<ChatListItem chat={item} />
			)}
		/>
		/* </View> */
	);
};

export default ChatsScreen;
