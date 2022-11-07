import {HiOutlineMail} from 'react-icons/hi';
import {BiLockAlt} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import styles from  "./signup.module.scss";
import imgCadastro from '../../assets/imgCadastro.png'
import Logo from '../Logo';
import { Link } from 'react-router-dom';

export default function SignUp (){
    return (
        <div className={styles.container}>
                    <img className={styles.imgCadastro} src={imgCadastro} alt="" />
        <div className={styles.form}>
        <Logo/>
        <div className={styles.group}>
            <p>Sou cliente</p>
            <p>Sou colaborador</p>
        
        </div>
        <div>
            <span><BsPerson size={18} style={{color:"gray"}}/></span>
            <input type="text" placeholder= 'Name' /> 
        </div>
        <div>
            <span><HiOutlineMail size={18} style={{color:"gray"}}/></span>
            <input type="email" placeholder= 'E-mail' /> 
        </div>
        <div>
            <span><BiLockAlt size={18} style={{color:"gray"}}/></span>
            <input type="password" placeholder='Password' />
        </div>
        
        <button type="submite">Cadastrar </button>
        <Link to="/" className={styles.back}> <AiOutlineArrowLeft style={{marginRight:'6px'}}/>  Voltar para o login</Link>
        </div>

    </div>
    )

    
    
}