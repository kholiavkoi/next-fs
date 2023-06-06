import styles from './page.module.css'
import Image from "next/image";
import hero from 'public/hero.png'
import Button from "@/components/Button/Button";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Better design for your digital products.</h1>
				<p className={styles.desc}>Turning your idea into reality. We bring tohether the teams from the global tech industry.</p>
				<Button text='See Our works' url='/portfolio' className={styles.button} />
			</div>
			<div className={styles.item}>
				<Image priority={true} src={hero} alt='hero' className={styles.img} />
			</div>
		</div>
	)
}
