import { FiLogIn } from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
import {BiLockAlt} from 'react-icons/bi';
import styles from  "./login.module.scss";
import LoginImg from '../../assets/Imagem.png'
import Logo from '../Logo';
import { Link } from 'react-router-dom';
export default function Login (){
    return (
        <div className={styles.container}>
        <div className={styles.form}>
        <Logo/>
        <h1> Faça seu login</h1>
        <div>
            <span><HiOutlineMail size={18} style={{color:"gray"}}/></span>
            <input type="email" placeholder= 'E-mail' /> 
        </div>
        <div>
            <span><BiLockAlt size={18} style={{color:"gray"}}/></span>
            <input type="password" placeholder='Password' />
        </div>
        
        <button type="submite">Entrar </button>
        <a href="senha" >Esqueci minha senha</a>
        <Link to="/signup" className={styles.loginButton}><FiLogIn style={{marginRight:'6px'}}/>  Criar conta</Link>
        </div>
        <img className={styles.LoginImg} src={LoginImg} alt="" />
    </div>
    )

    
    
}