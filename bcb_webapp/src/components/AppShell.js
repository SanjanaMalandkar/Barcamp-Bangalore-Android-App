import React from 'react';
import Link from 'react-router/lib/Link';
import browserHistory from 'react-router/lib/browserHistory';
//import {Layout, Header, Navigation, Content, Textfield, Drawer} from 'react-mdl';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ContentLink from 'material-ui/svg-icons/content/link';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/svg-icons/navigation/menu';

export default class AppShell extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			title: props.title || 'Barcamp Bangalore',
            canClose: false
		};

		this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
		this.handleRequestChange = this.handleRequestChange.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

    onMyChildChanged(newState) {
        console.log("newstate " + newState);
    }

	handleToggleDrawer() {
        if(this.state.canClose == false){
		    this.setState({open: !this.state.open});
        }
        else {
            console.log(this.state);
            browserHistory.goBack();
            this.setState({canClose: false});
        }
	}

	handleRequestChange(open) {
		this.setState({open});
	}

	handleClose(e) {
		console.log(e.nativeEvent);
		this.setState({open: false});
		e.preventDefault();
	}

    componentWillUpdate(nextProps, nextState){
        console.log("component will update");
        console.log(nextProps);
        console.log(nextState);
        if ( nextProps.children.props.route.path == "session/:slot/:session"){
            nextState.canClose = true;
        }
    }

	render() {
		return (
			<div>
				<Drawer
					width={200}
					docked={false}
					open={this.state.open}
					onRequestChange={this.handleRequestChange}
					>
                    <MenuItem primaryText="Menu Options" />
					<MenuItem primaryText="About" leftIcon={<ContentLink/>} containerElement={<Link to="/users"/>} onTouchTap={this.handleToggleDrawer}/>
					<MenuItem primaryText="Notifications" leftIcon={<ContentLink/>} containerElement={<Link to="/contact"/>} onTouchTap={this.handleToggleDrawer}/>
					<MenuItem primaryText="Github" leftIcon={<ContentLink/>} target="_blank" href="https://github.com/" onTouchTap={this.handleToggleDrawer}/>
				</Drawer>
				<AppBar
					title={this.props.title}
					onLeftIconButtonTouchTap={this.handleToggleDrawer}
                    iconElementLeft={ this.state.canClose == true ? <IconButton><NavigationClose /></IconButton> :<IconButton><Menu /></IconButton> }
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					/>
				<div id="content" style={{width: '90%', margin: 'auto', marginTop: '30px'}}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

AppShell.propTypes = {
	title: React.PropTypes.string,
	children: React.PropTypes.node
};
