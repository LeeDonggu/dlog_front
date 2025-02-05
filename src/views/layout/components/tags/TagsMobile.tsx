import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Tag } from 'antd';
import '../layout.scss';
import { Link } from 'react-router-dom';
import { TagsModel } from '../../../../models';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap',
			'& > *': {
				margin: theme.spacing(0.5),
			},
		},
	}),
);

function renderTags(tags: TagsModel[]) {
	return tags.map((tag: TagsModel , index: number) => (
		<Tag key={index} color="#757575" style={{fontSize: '15px' , fontWeight: 'bold'}}>
			<Link key={index} to={{ pathname: `/tags/${tag.name}` , state: {id: tag.id} }}>{ tag.name }</Link>
		</Tag>
	));
}

export default function TagsMobile(props: any) {
	const classes = useStyles();
	const { tags } = props;
		
	return (
		<div className={classes.root}>
			{renderTags(tags)}
		</div>
	);
}