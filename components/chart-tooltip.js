import React from 'react'
import {G, Rect, Text, Line, Circle} from 'react-native-svg'

const Tooltip = ({ x, y, data }) => {
	return (
		<>
			{data.map((item, index) => {
				return (
					<G
						x={ x(index) - (75 / 2) }
						key={index}
					>
						<G x={ 75 / 2 }>
							<Circle
								cy={ y(data[index]) }
								r={ 6 }
								stroke={ 'rgb(134, 65, 244)' }
								strokeWidth={ 2 }
								fill={ 'white' }
							/>
						</G>
					</G>
				)
			})}
		</>
	)
}

export default Tooltip
