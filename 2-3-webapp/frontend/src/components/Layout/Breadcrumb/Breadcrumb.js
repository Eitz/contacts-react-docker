import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import StructuralContainer from '../StructuralContainer/StructuralContainer';

import './Breadcrumb.css';

export default class Breadcrumb extends PureComponent {

	renderLinks() {
		return this.props.links.map((link, index) => {
			let isLast = index + 1 === this.props.links.length;
			return (
				<li key={index} className={`Breadcrumb-item ${isLast ? 'active' : ''}`}>
					<Link to={link.to}>
						{link.text}
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<nav className="Breadcrumb">
				<StructuralContainer>
					<ol>
						<li className="Breadcrumb-item">
							<Link to='/'>Contacts Test</Link>
						</li>
						{this.props.links && this.props.links.length ? this.renderLinks() : null}
					</ol>
				</StructuralContainer>
			</nav>
		);
	}
}
