import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import AppProvider from './hooks/index';

import Routes from './routes/index';

const App: React.FC = () => (
	<NavigationContainer>
			<StatusBar barStyle='light-content' backgroundColor='#312E38' translucent />
			<AppProvider>
				<View style={{flex: 1, backgroundColor: '#312E38'}}>
						<Routes />
				</View>
			</AppProvider>
	</ NavigationContainer>
);

export default App;
