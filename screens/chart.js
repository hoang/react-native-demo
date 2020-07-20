import React from 'react'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { View, TouchableOpacity, Text } from 'react-native'
import ToolTip from '../components/chart-tooltip'

const data = [
	50, 10, 40, 95, -4, -24, 85, 91, 35, 53,
	60, 70, 50, 80, 40, 90, 30, 100, 20, 30,
	166, 103, 38, 193, 114, 96, 195, 34, 101, 16,
	136, 100, 26, 78, 140, 191, 179, 119, 36, 89,
	71, 10, 0, 120, 42, 99, 161, 188, 170, 106,
	45, 105, 44, 134, 117, 36, 196, 188, 61, 47,
	104, 75, 101, 133, 16, 60, 130, 42, 106, 133
];
const axesSvg = { fontSize: 10, fill: 'grey' };
const verticalContentInset = { top: 30, bottom: 30 }
const xAxisHeight = 30

class Chart extends React.PureComponent {
	
	constructor(props) {
		super(props)
		this.state = {
			dataIndex: 0
		}
	}
	
	navigateChart = (direction) => {
		let newDataIndex = this.state.dataIndex
		if (direction == 'next') {
			if (newDataIndex + 10 < data.length)
				newDataIndex += 10
		} else {
			if (newDataIndex >= 10)
				newDataIndex -= 10
			else
				newDataIndex = 0
		}
		this.setState({dataIndex: newDataIndex})
	}
	
	render() {
		// Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
		// All react-native-svg-charts components support full flexbox and therefore all
		// layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
		// In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
		// and then displace the other axis with just as many pixels. Simple but manual.
		let subData = data.slice(this.state.dataIndex, this.state.dataIndex + 10)
		
		return (
			<>
				<View style={{ height: 400, padding: 20, flexDirection: 'row' }}>
					<YAxis
						data={subData}
						style={{ marginBottom: xAxisHeight }}
						contentInset={verticalContentInset}
						svg={axesSvg}
					/>
					<View style={{ flex: 1, marginLeft: 10 }}>
						<LineChart
							style={{ flex: 1 }}
							data={subData}
							contentInset={{...verticalContentInset, left: 10, right: 10}}
							svg={{ stroke: 'rgb(134, 65, 244)' }}
						>
							<Grid/>
							<ToolTip/>
						</LineChart>
						<XAxis
							style={{ marginHorizontal: 0, height: xAxisHeight }}
							data={subData}
							formatLabel={(value, index) => index + this.state.dataIndex + 1}
							contentInset={{ left: 10, right: 10 }}
							svg={axesSvg}
						/>
					</View>
				</View>
				<View style={{marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
					<TouchableOpacity style={styles.button} onPress={() => this.navigateChart('prev')}>
						<Text style={styles.buttonText}>Prev Period</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.navigateChart('next')}>
						<Text style={styles.buttonText}>Next Period</Text>
					</TouchableOpacity>
				</View>
			</>
		)
	}
	
}

const styles = {
	button: {
		backgroundColor: '#4287f5',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 10
	},
	buttonText: {
		fontSize: 10,
		color: 'white'
	}
}

export default Chart
