import styles from  "./logo.module.scss";
import GoBarber from '../../assets/GoBarber.png'
export default function Logo(){
    return (
       
        <>
        <p className={styles.awesome}>Awesome</p>
        <img  src={GoBarber} alt="GoBarber" />
        <p className={styles.hair}>Haircuts & Shaves</p>
       
       
    </>

    )

    
    
}