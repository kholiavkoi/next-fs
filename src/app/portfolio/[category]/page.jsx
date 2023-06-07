import React from 'react';
import styles from './page.module.css'
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
	const data = items[cat]

	if (data) return data

	return notFound()
}

const Category = ({ params }) => {
	const items = getData(params.category)

	return (
		<div className={styles.container}>
			<h1 className={styles.catTitle}>{params.category}</h1>
			{items.map(item => (
				<div key={item.id} className={styles.item}>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.desc}</p>
						<Button	text='See more' url='#'/>
					</div>
					<div className={styles.imgContainer}>
						<Image className={styles.img} fill={true} src={item.image} alt={item.title} />
					</div>
				</div>
			))}

		</div>
	);
};

export default Category;