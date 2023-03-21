import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	FlatList,
} from 'react-native';
import React from 'react';

import bg from '../../assets/images/BG.png';
import Message from '../components/Message';
import messages from '../../assets/data/messages.json';
import InputBox from '../components/InputBox';

const ChatScreen = () => {
	return (
		<ImageBackground source={bg} style={styles.bg}>
			<FlatList
				data={messages}
				renderItem={({ item }) => {
					return <Message message={item} />;
				}}
				style={styles.list}
				inverted
			/>
			<InputBox />
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	bg: { flex: 1 },
	list: { padding: 10 },
});

export default ChatScreen;
