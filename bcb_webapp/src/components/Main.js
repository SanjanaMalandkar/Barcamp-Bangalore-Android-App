import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import bcbData from './bcbdata.json';
import {List, ListItem} from 'material-ui/List';
import Link from 'react-router/lib/Link';


class Main extends React.Component {

	render() {
		if(bcbData.status == 'have stuff') {
                	var slots = bcbData.slots.map( function( slot, index) {
                        var sessions = [];
                        	if(slot.type == "session"){
                                sessions = slot.sessions.map ( function (session, index2){
                                    var sessionData = [];
                                    console.log("index value " + index);
                                    console.log("index2 value " + index2);
                                    sessionData.push(<ListItem primaryText={session.description} />);
                                    return (
                                        <ListItem primaryText={session.title} containerElement={<Link to={"/session/" + index + "/" + index2}/>} />
                                        );
                                });
                                	return (
                                        <ListItem primaryText={slot.startTime + " to " + slot.endTime + " --- " + slot.name} nestedItems={sessions} />
                                         );
                        	}
                        	return <ListItem primaryText={slot.startTime + " to " + slot.endTime + " -- " + slot.name} />
         	       });
                	return (
                		<List>
                        		{slots}
               			</List>
                	);
                }

                return (
                        <div> scooby doooby dooooooooooooo </div>
                );

	}
}

export default Main;
