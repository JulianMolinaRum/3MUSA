import React, { useEffect, useState } from 'react';
import backgroundVideo from 'Assets/videos/home_page_video.mp4';

import SideNav from '../components/Home/HomeNav/SideNav';
import SocialNav from '../components/Home/SocialNav';

const Home = ({ language }) => {
	useEffect(() => {
		if (language === 'spanish') {
			document.title = "3M - Inicio"
		} else {
			document.title = "3M - Home"
		}
	}, [language]);

	return (
		<div className='home-container align-center'>
			{/* Background video */}
			{/* <video id="background-video" autoPlay muted> */}
			<video id="background-video" autoPlay loop muted>
				<source src={backgroundVideo} type='video/mp4' />
			</video>
			<div className='homepage-nav-container'>
				<div id="desktop-nav" className='desktop-nav-wrapper'>
					<SideNav language={language} />
					<SocialNav />
				</div>
			</div>
		</div>
	)
}

export default Home;