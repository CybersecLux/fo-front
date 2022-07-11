import React from "react";
import "./CyberWeekProgramme.css";
import ShadowBox from "../box/ShadowBox.jsx";

export default class CyberWeekProgramme extends React.Component {
	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<div id={"CyberWeekSponsor"}>
				<div className="row row-spaced">
					<div className="col-md-12">
						<h2>Programme</h2>
					</div>

					<div className="col-md-6">
						<ShadowBox
							link="cybersecurityweek?tab=Conference_stream"
							title={"Conference stream"}
							icon={"fas fa-microphone-alt"}
							color={"blue"}
						/>
					</div>
					<div className="col-md-6">
						<ShadowBox
							link="cybersecurityweek?tab=Exhibition_area"
							title={"Exhibition area"}
							icon={"fas fa-store"}
							color={"blue"}
						/>
					</div>
				</div>

				<div className="row row-spaced"/>
				<div className="row row-spaced"/>
			</div>
		);
	}
}
