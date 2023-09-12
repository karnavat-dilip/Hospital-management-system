import React from "react";
import { Scheduler } from 'smart-webcomponents-react/scheduler';
import 'smart-webcomponents-react/source/styles/smart.default.css';


class Schedule extends React.Component {
	constructor(props) {
		super(props);

		const today = new Date(),
			currentDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();
	}
	views = ['day'];

	hourStart = 7;

	timelineDayScale = 'quarterHour';


	init() {
	}

	componentDidMount() {
		let dropdown = document.getElementById('dropdown_value')

		dropdown.addEventListener('change', e => {
			const str = e.target.value;

			switch (str) {
				case 'hour':
					this.timelineDayScale = 'halfHour';
					this.hourStart = 7;
					break;
				case 'quarterHour':
					this.timelineDayScale = 'hour';
					this.hourStart = 5;
					break;
				case 'halfHour':
					this.timelineDayScale = 'quarterHour';
					this.hourStart = 8;
					break;
				case 'hourstart':
					this.timelineDayScale = 'halfHour';
					this.hourStart = 9;
					break;
				default:
					break;
			}
		})
		const scheduler = document.querySelector('smart-scheduler');
		scheduler.addEventListener('itemChange', function (event) {
			const detail = event.detail,
				value = detail.value,
				oldValue = detail.oldValue;

			// event handling code goes here.
		})


		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler disable-context-menu  disable-window-editor group-by-date hide-today-button hourFormat="2-digit" id="scheduler"
					views={this.views}
					hourStart={this.hourStart}
					timelineDayScale={this.timelineDayScale} ></Scheduler>

			</div>
		);
	}
}
export default Schedule;
