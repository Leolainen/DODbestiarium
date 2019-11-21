import { styles as MuiExpansionPanel } from '../ExpansionPanel/ExpansionPanel';

import * as internalOverrides from './internal/overrides';

const createOverrides = (theme) => {
	const overrides = {
		MuiExpansionPanel,
		...internalOverrides
	};

	return Object.entries(overrides).reduce((acc, [ muiName, makeStyles ]) => {
		acc[muiName] = makeStyles(theme);
		return acc;
	}, {});
};

export default createOverrides;
