import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/components/Splash';

export default function App() {
	return (
		<View style={styles.container}>
			<Splash />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#131313',
		textDecorationColor: '43BCAE',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
