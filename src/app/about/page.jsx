import React from 'react';
import styles from './page.module.css'
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt='about'
					fill={true}
					className={styles.img}
					priority={true}
				/>
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Digital Storytellers</h1>
					<h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
				</div>
			</div>

			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who are we?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore
						dolorem eaque, eius
						eligendi et exercitationem ipsa ipsam libero neque nihil numquam ratione
						sit vitae voluptatem.
						Laboriosam porro reiciendis repellat.
						<br />
						<br />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim inventore
						laboriosam modi
						officiis, quidem vitae. Adipisci alias amet atque fuga fugiat hic magni
						mollitia obcaecati,
						quod reprehenderit, soluta tenetur vel.
						<br />
						<br />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur esse
						et fuga, odit
						repudiandae temporibus. Architecto eum odio voluptatibus? Ad autem
						dignissimos facere,
						laudantium nulla rerum tempore velit! Cum, incidunt!
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>Who we do?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore
						dolorem eaque, eius
						eligendi et exercitationem ipsa ipsam libero neque nihil numquam ratione
						sit vitae voluptatem.
						Laboriosam porro reiciendis repellat.
						<br />
						<br />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim inventore
						laboriosam modi
						officiis, quidem vitae. Adipisci alias amet atque fuga fugiat hic magni
						mollitia obcaecati,
						quod reprehenderit, soluta tenetur vel.
					</p>
					<Button url='/contact' text='Contact'/>
				</div>
			</div>
		</div>
	);
};

export default About;