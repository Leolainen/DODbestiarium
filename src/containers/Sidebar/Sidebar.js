import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import { useAppContext } from '../AppContext';

import AppBar from '../../components/AppBar';
import Toolbar from '../../components/Toolbar';
import Drawer from '../../components/Drawer';
import Input from '../../components/Input';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import ListItemText from '../../components/ListItemText';
import ListSubHeader from '../../components/ListSubHeader';

import { getAllEntries } from '../../api/bestiary';

const useStyles = makeStyles((theme) => ({
	root: {},
	list: {
		minWidth: 250
	},
	divider: {
		opacity: 0.6,
		marginTop: theme.spacing(4)
	}
}));

const Sidebar = React.forwardRef(function Sidebar(props, ref) {
	const { className, children, ...other } = props;

	const [ { entries: bestiary }, dispatch ] = useAppContext();

	const classes = useStyles();
	const [ ancestry, setAncestry ] = useState([]);

	useEffect(
		() => {
			setAncestry([ ...new Set(bestiary.map((beast) => beast.ancestry)) ]);
		},
		[ bestiary ]
	);

	return (
		<Drawer anchor="right" ref={ref} className={classnames(classes.root, className)} {...other}>
			<div role="presentation" className={classes.list}>
				<AppBar>
					<Toolbar>
						<Input placeholder="Sök efter art..." inputProps={{ 'aria-label': 'Search' }} />
					</Toolbar>
				</AppBar>
				<List>
					{ancestry.map((ancestor) => (
						<React.Fragment key={ancestor}>
							<ListSubHeader disableSticky>{ancestor}</ListSubHeader>
							{bestiary.map(
								(beast) =>
									beast.ancestry === ancestor && (
										<ListItem button key={beast.species}>
											<ListItemText primary={beast.species} />
										</ListItem>
									)
							)}
							<hr className={classes.divider} />
						</React.Fragment>
					))}
				</List>
			</div>
		</Drawer>
	);
});

Sidebar.propTypes = {
	className: PropTypes.string
};

Sidebar.defaultProps = {
	className: ''
};

Sidebar.uiName = 'Sidebar';

export default Sidebar;
/* {ancestry.map(ancestor => {
	b
	return (

	<ListItem>

		<ListItemText primary={beast.species}
	</ListItem>
	)
})} */
