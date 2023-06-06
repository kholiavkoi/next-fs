import React from 'react';
import styles from './page.module.css'
import Image from "next/image";

const BlogPost = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
												 qui!</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis doloremque
						est expedita, nesciunt quam unde voluptates. Consequatur, ut.
					</p>
					<div className={styles.author}>
						<Image
							src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt=""
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>Username</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src='https://images.pexels.com/photos/16768174/pexels-photo-16768174/free-photo-of-sea-dawn-sunset-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt=""
						fill={true}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere incidunt laboriosam natus obcaecati
					quisquam. Cumque dignissimos facere laborum nisi odit placeat sapiente sit suscipit voluptate!
					Architecto assumenda aut consectetur deserunt, dolore eos nostrum placeat quae repellat sint, totam
					ut voluptates?
				</p>
			</div>
		</div>
	);
};

export default BlogPost;