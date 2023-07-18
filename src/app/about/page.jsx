import Image from 'next/image'

import styles from './about.module.css'
import Button from '../../components/button/Button'

const About = () => {
    return (
        <div className='h-screen'>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className='text-5xl text-purple-500 font-bold text-center my-2'>This is who we are!</h1>
                    <div className={styles.divider} />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam similique tempora atque, facere inventore quisquam autem asperiores voluptatibus fuga magnam sed impedit corporis veniam a, nobis, quam quod dicta.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nam similique tempora atque, facere inventore quisquam autem asperiores voluptatibus fuga magnam sed impedit corporis veniam a, nobis, quam quod dicta.</p>
                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ullam, quisquam, reiciendis illo vero error natus nobis dolore, cupiditate nisi quaerat! Rem repudiandae atque obcaecati totam vel asperiores animi ab.</p>

                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ullam, quisquam, reiciendis illo vero error natus nobis dolore, cupiditate nisi quaerat! Rem repudiandae atque obcaecati totam vel asperiores animi ab.</p>

                    <div className='my-5 float-right'>
                        <Button url='/blog' text='View Our Stories' />
                    </div>

                </div>
                <div className={styles.imageContainer}>
                    <Image src='/gossip.jpg' width={600} height={400} alt='about us image' />
                </div>

            </div>
        </div>

    )
}

export default About
