import React from 'react';
import spanishPDF from 'Assets/PDF/Privacy_spanish.pdf';
import englishPDF from 'Assets/PDF/Privacy_english.pdf';

const translation =
{
	spanish:
		[
			"Direcciónes",
			"Contacto",
			"Social",
			"Información Básica",
			"Aviso de Privacidad",
			"spanishPDF"

		],
	english:
		[
			"Get Directions",
			"Contact Us",
			"Follow Us",
			"Basic Information",
			"Privacy Policy",
			"englishPDF"
		]
}

const Footer = ({ language }) => {
	let currentPDF;
	if(language === 'spanish')
		currentPDF = spanishPDF;
	else
		currentPDF = englishPDF;
		
	const translations = translation[language];

	return (
		<div className='footer-container'>
			<div className='footer-wrapper'>
				<div className='footer-content-container'>
					<p>3M USA Marketing</p>
					<p>647 Tully Road, Suite D</p>
					<p>San Jose, CA 95111</p>
					<a href='https://www.google.com/maps/dir//647+Tully+Rd+d,+San+Jose,+CA+95111/@37.3098379,-121.8423419,16.66z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808e32e610daffb1:0x88239cd9a10a3b70!2m2!1d-121.8457405!2d37.3100271!3e1' target="_blank" className='footer-padding no-decoration footer-link'>{translations[0]} →</a>
				</div>
				<div className='footer-content-container'>
					<p>{translations[3]}</p>
					<a className='contact-tag' href="mailto:contact@3musamarketing.com">
						<p>contact@3musamarketing.com</p>
					</a>
					<a className='contact-tag' href="tel:18007721650" target="_blank">
						<p>+1 800 772 1650</p>
					</a>
					<a href="https://api.whatsapp.com/send?phone=14086582488&text=Hello! How can we assist you today?" target="_blank" className='footer-padding no-decoration footer-link'>{translations[1]} →</a>
				</div>
				<div className='footer-content-container'>
					<p>{translations[2]}</p>
					<a className='footer-link' href='https://www.instagram.com/3musamarketing/' target="_blank">Instagram</a >
					<a className='footer-link' target="_blank"> </a>
					<a href='https://www.facebook.com/3MUSAMarketing/' target="_blank" className='footer-link'>Facebook</a>
					<a className='footer-link' href='https://www.linkedin.com/company/3musamarketing/about/' target="_blank">LinkedIn</a>
				</div>
			</div>
			<div className='footer-divider'>
				<p>©2022 3M USA Marketing</p>
				<a href={currentPDF} target="_blank" className="footer-padding privacy-font">{translations[4]}</a>
			</div>
		</div>
	)
}

export default Footer;
