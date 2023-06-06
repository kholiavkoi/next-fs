import React from 'react';
import Image from "next/image";
import styles from './Footer.module.css'


const Footer = () => {
	return (
		<div className={styles.container}>
			<div>©2023 iKholiavko. All rights reserved.</div>
			<div className={styles.social}>
				<Image className={styles.icon} src='/1.png' width={15} height={15} alt='facebook' />
				<Image className={styles.icon} src='/2.png' width={15} height={15} alt='instagram' />
				<Image className={styles.icon} src='/3.png' width={15} height={15} alt='twitter' />
				<Image className={styles.icon} src='/4.png' width={15} height={15} alt='youtube' />
			</div>
		</div>
	);
};

export default Footer;