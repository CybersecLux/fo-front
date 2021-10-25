import React, { Component } from "react";
import "./Article.css";
import dompurify from "dompurify";
import NoImage from "../box/NoImage.jsx";
import { getApiURL } from "../../utils/env.jsx";
import { dateToString } from "../../utils/date.jsx";

export default class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	getImage() {
		const baseUrl = getApiURL() + "public/get_public_image/";

		if (this.props.info.image) {
			return baseUrl + this.props.info.image;
		}

		if (!this.props.info.is_created_by_admin
			&& this.props.info.company_tags
			&& this.props.info.company_tags.length > 0
			&& this.props.companies) {
			const companies = this.props.companies
				.filter((c) => this.props.info.company_tags.indexOf(c.id) >= 0)
				.filter((c) => c.image);

			if (companies.length > 0) {
				return baseUrl + companies[0].image;
			}
		}

		return null;
	}

	getBoxContent() {
		return <div className="Article card">
			<div className="card-img-wrapper">
				{this.getImage()
					? <img
						className="card-img-top"
						src={this.getImage()}
						alt="Article image"/>
					: <NoImage
						height={200}
					/>
				}
				{this.props.hidePublicationDate === undefined
					|| this.props.hidePublicationDate === false
					? <div className="card-date">
						{dateToString(this.props.info.publication_date, "DD MMM YYYY")}
					</div>
					: ""}
			</div>
			<div className="card-body">
				<h5 className="card-title">{this.props.info.title}</h5>

				<div className="card-text">
					<div dangerouslySetInnerHTML={{
						__html:
						dompurify.sanitize(this.props.info.abstract),
					}} />
				</div>

				<button
					className={"blue-background"}
				>
					Know more
				</button>
			</div>
		</div>;
	}

	render() {
		return this.props.info.link
			? <a
				href={this.props.info.link}
				target={"_blank"}
				rel="noreferrer"
				className="Article-link">
				{this.getBoxContent()}
			</a>
			: <a
				href={"/news/" + this.props.info.handle}
				className="Article-link">
				{this.getBoxContent()}
			</a>;
	}
}
