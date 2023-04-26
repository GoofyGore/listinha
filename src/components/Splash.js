import { View, Text } from 'react-native';

export default function Splash() {
	return (
		<View>
			<Text style={{color: '#43BCAE'}}>Listr</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#131313',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
