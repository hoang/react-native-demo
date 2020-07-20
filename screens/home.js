import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Link from '../components/link'

const links = [
	{
		id: 1,
		title: 'Line Chart',
		description: 'Buidling a Line Chart with React Native',
		screen: 'Chart'
	},
	{
		id: 2,
		title: 'Pie Chart',
		description: 'Buiding a Pie Chart',
		screen: 'PieChart'
	},
	{
		id: 3,
		title: 'Progress Circle',
		description: 'Beautiful progress indicator',
		screen: 'ProgressCircle'
	},
	{
		id: 4,
		title: 'Animation 1',
		description: 'Vertical Swipe',
		screen: 'Animation'
	},
	{
		id: 5,
		title: 'Animation 2',
		description: 'Heart Beat',
		screen: 'AnimationHeart'
	}
];

class Home extends React.Component {
	
	constructor(props) {
		super(props)
	}
	
	renderLinks = () => {
		return (
			<View style={styles.sectionContainer}>
				{links.map(({id, title, description, screen}) => {
					return (
						<Link
							key={id} title={title} description={description}
							screen={screen} navigation={this.props.navigation}
						/>
					)
				})}
			</View>
		)
	}
	
	render() {
		return (
			<>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<ScrollView
						contentInsetAdjustmentBehavior="automatic"
						style={styles.scrollView}>
						<Header />
						{global.HermesInternal == null ? null : (
							<View style={styles.engine}>
								<Text style={styles.footer}>Engine: Hermes</Text>
							</View>
						)}
						<View style={styles.body}>
							<View style={styles.sectionContainer}>
								<Text style={styles.sectionTitle}>React Native Demo</Text>
								<Text style={styles.sectionDescription}>
									This App is showcase for some abilities of React Native.
								</Text>
							</View>
							{this.renderLinks()}
						</View>
					</ScrollView>
				</SafeAreaView>
			</>
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	}
});

export default Home
