import React from 'react';
import './main.scss';
import Socials from './layout/components/socials/Socials';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../core/constant';
import Router from './Router';
import { TagsLayoutContainer , LatestPostsContainer } from '../container';

export default function Main() {
const isPc = useMediaQuery({query: constants.MIN_WIDTH});
const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

	return (
		<>
				{isPc && <PcMainView />}
				{isMobile && <MobileMainView />}
		</>
	);
}

const PcMainView = () => {
	return <div>
					<div className="lpgbkm">
						<div className="BAccj">
							<Router />
						</div>
						<div className="sideBar">
							<TagsLayoutContainer />
							<LatestPostsContainer />
							<Socials />
						</div>
					</div>
				</div>;
};

const MobileMainView = () => {
	return <div>
					<TagsLayoutContainer />
					<LatestPostsContainer />
					<Router />
				 </div>;
};
