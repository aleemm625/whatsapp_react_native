import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import {
	API,
	graphqlOperation,
} from 'aws-amplify';

import { listUsers } from '../graphql/queries';
// import Chats from '../../assets/data/chats.json';
import ContactListItem from '../components/ContactListItem';

const ContactsScreen = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		API.graphql(graphqlOperation(listUsers)).then(
			(result) => {
				setUsers(result?.data?.listUsers?.items);
			}
		);
	}, []);

	return (
		<FlatList
			data={users}
			renderItem={({ item }) => (
				<ContactListItem user={item} />
			)}
			style={{ backgroundColor: 'white' }}
		/>
	);
};

export default ContactsScreen;
