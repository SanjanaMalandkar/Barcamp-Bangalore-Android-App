import React from 'react';
import Link from 'react-router/lib/Link';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import bcbData from './bcbdata.json';

class Session extends React.Component {
	render() {
        return (
			<Card style={{marginBottom: '0.4em'}}>
				<CardHeader title={bcbData.slots[this.props.params.slot].sessions[this.props.params.session].title}/>
				<CardText style={{fontSize: '1em'}}>
                    {bcbData.slots[this.props.params.slot].sessions[this.props.params.session].description}
				</CardText>
			</Card>
		);
	}
}

export default Session;
