import React from 'react';
import BGImage from 'Assets/images/Shared/slide-menu-background.jpg';
import { Link } from 'react-router-dom';

const writtenContent = { spanish: ['Inicio', 'Proyectos', 'Servicios', 'Nosotros', 'Contacto'], english: ['Home', 'Projects', 'Services', 'About Us', 'Contact Us'] };
const NavigationMenu = ({ isOpen, setOpen, language }) => {

	const languageArray = writtenContent[language];

	return (
		<div style={{ backgroundImage: `url(${BGImage})` }} className={isOpen ? "menu-container toggle-menu" : "menu-container"}>
			<div className='menu-contents'>
				<div className='menu-links'>
					<Link to="/" onClick={() => setOpen()}>{languageArray[0]}</Link>
					<Link to="/projects" onClick={() => setOpen()}>{languageArray[1]}</Link>
					<Link to="/services" onClick={() => setOpen()}>{languageArray[2]}</Link>
					<Link to="/about" onClick={() => setOpen()}>{languageArray[3]}</Link>
					<Link to="/contact" onClick={() => setOpen()}>{languageArray[4]}</Link>
				</div>
				<div className='social-wrapper'>
					<a href='https://www.facebook.com/3MUSA-Marketing-104833102336572' target="_blank">
						<svg className="social-svg-icon" viewBox="0 0 20 20">
							<title>Visit us on Facebook!</title>
							<path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
						</svg>
					</a>
					<a href='https://www.instagram.com/3musamarketing/' target="_blank">
						<svg className="social-svg-icon" viewBox="0 0 20 20">
						<title>Visit us on Instagram!</title>
							<path fill="none" d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
						</svg>
					</a>
					<a href='https://www.linkedin.com/company/3musamarketing/about/' target="_blank">
						<svg width="40px" height="40px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<title>Visit us on LinkedIn!</title>
							<g id="Icon/Social/linkedin-color" fill="white">
								<path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z" id="Shape" fill="white"></path>
							</g>
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
}

export default NavigationMenu;