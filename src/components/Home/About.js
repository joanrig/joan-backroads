import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us"/>  
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company"/>
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                <h4>explore the difference</h4>
                <p>
                    Aliqua non officia aute magna quis deserunt do non. Qui irure eu ad exercitation ea magna ullamco non dolor aliqua est. Officia eu aute fugiat eu mollit. Ullamco do sint incididunt dolor duis amet est officia id et tempor eu aliquip. Cillum tempor elit ullamco enim esse.
                </p>
                <p>
                    Ut Lorem quis mollit commodo fugiat elit id nisi amet enim ipsum quis ipsum adipisicing. Proident sit aliquip et excepteur aliquip ad eu id voluptate deserunt ut mollit occaecat. Aute nostrud dolor adipisicing ullamco aute magna culpa laborum dolor laborum sunt incididunt. Excepteur magna voluptate proident veniam velit do. Qui culpa id eiusmod proident commodo tempor cillum minim consequat aliquip nisi. Ex fugiat sit anim mollit consectetur ea tempor voluptate. Minim dolore mollit do in amet quis.
                </p>
                <button type="button" className="btn-primary">read more</button>
                </article>

            </div>    
        </section>
    )
}

export default About
