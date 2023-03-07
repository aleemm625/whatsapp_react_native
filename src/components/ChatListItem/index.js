import {
	Text,
	View,
	Image,
	StyleSheet,
} from 'react-native';

export default ChatListItem = () => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
				}}
				style={styles.image}
			/>
			<View style={styles.content}>
				<View style={styles.row}>
					<Text style={styles.name}>Lukas</Text>
					<Text style={styles.subTitle}>8:30</Text>
				</View>

				<Text style={styles.subTitle}>
					Hello there
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginHorizontal: 10,
		marginVertical: 5,
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 10,
	},
	content: { flex: 1 },
	row: { flexDirection: 'row' },
	name: { flex: 1 },
	subTitle: {},
});
