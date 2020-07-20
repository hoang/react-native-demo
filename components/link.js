import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

class Link extends React.Component {
	
	render() {
		const {title, description, screen, navigation} = this.props
		return (
			<>
				<View style={styles.separator} />
				<TouchableOpacity
					accessibilityRole={'button'}
					onPress={() => navigation.navigate(screen)}
					style={styles.linkContainer}>
					<Text style={styles.link}>{title}</Text>
					<Text style={styles.description}>{description}</Text>
				</TouchableOpacity>
			</>
		)
	}
	
}

const styles = StyleSheet.create({
	linkContainer: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 8,
	},
	link: {
		flex: 2,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.primary,
	},
	description: {
		flex: 3,
		paddingVertical: 16,
		paddingLeft: 5,
		fontWeight: '400',
		fontSize: 18,
		color: Colors.dark,
	},
	separator: {
		backgroundColor: Colors.light,
		height: 1,
	},
});

export default Link
