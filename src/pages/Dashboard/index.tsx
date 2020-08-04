import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/core';

const Dasbhoard: React.FC = () => {

	const { signOut } = useAuth();
	const navigation = useNavigation();

	return (
		<View style={{ flex: 1, justifyContent: 'center',}}>
			<Button title='Sair' onPress={signOut}/>
		</View>
	)

}

export default Dasbhoard;
