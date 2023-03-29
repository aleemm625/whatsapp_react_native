import {
	View,
	Text,
	FlatList,
} from 'react-native';

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
			style={{ backgroundColor: 'white' }}
		/>
		/* </View> */
	);
};

export default ChatsScreen;
