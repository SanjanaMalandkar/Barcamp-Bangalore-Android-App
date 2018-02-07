import React from 'react';
import Link from 'react-router/lib/Link';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import bcbData from './bcbdata.json';

class Session extends React.Component {
	constructor(props) {
		super(props);
    }

    componentWillMount(){
    }
    render() {
        return (
			<Card style={{marginBottom: '0.4em'}}>
				<CardHeader title={bcbData.slots[this.props.params.slot].sessions[this.props.params.session].title}/>
				<CardText style={{fontSize: '1em'}}>
                    {bcbData.slots[this.props.params.slot].sessions[this.props.params.session].description}
                <div>
                    Details link : {bcbData.slots[this.props.params.slot].sessions[this.props.params.session].permalink}
                </div>
                <div>
                    Time : {bcbData.slots[this.props.params.slot].sessions[this.props.params.session].time}
                </div>
                <div>
                    Location : {bcbData.slots[this.props.params.slot].sessions[this.props.params.session].location}
                </div>
                <div>
                    Presenter : {bcbData.slots[this.props.params.slot].sessions[this.props.params.session].presenter}
                </div>
                <div>
                    Category : {bcbData.slots[this.props.params.slot].sessions[this.props.params.session].category}
                </div>
                <div>
                    Level : {bcbData.slots[this.props.params.slot].sessions[this.props.params.session].level}
                </div>
				</CardText>
			</Card>
		);
	}
}

export default Session;
