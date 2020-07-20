import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import {Text} from 'react-native'

class ProgressCircleScreen extends React.PureComponent {
	
	constructor(props) {
		super(props)
		this.state = {
			progress: 0
		}
	}
	
	componentDidMount() {
		const interval = 50
		this.timeoutHandler = () => {
			if (this.state.progress < 100) {
				this.setState({progress: this.state.progress + 1})
				setTimeout(this.timeoutHandler, interval)
			}
		}
		setTimeout(this.timeoutHandler, interval)
	}
	
	render() {
		console.log('progress', this.state.progress)
		return (
			<>
				<ProgressCircle
					style={{ marginTop: 50, height: 200 }}
					progress={this.state.progress/100}
					progressColor={'rgb(134, 65, 244)'}
					startAngle={ -Math.PI * 1 }
					endAngle={ Math.PI * 1 }
				/>
				<Text style={{marginTop: 20, textAlign: 'center'}}>
					{this.state.progress == 100 ? 'Completed!' : 'Progressing ...'}
				</Text>
			</>
		)
	}
	
}

export default ProgressCircleScreen
