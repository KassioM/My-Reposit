import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../img/banner.jpg';
import Music from './music';

const User = () => {

  const [nome, setNome] = useState('');

  return (

    <div className="user">

      <div className="content-user">

        <div className="img-background">

         <img src={Banner} alt="Img-Background" />

        </div>

        <div className="user-content">

          <div className="box-user">

            <div className="content-box-user">

              <div className="content-info-user">

                {/*
                
                <h1>O que é o My Reposit?</h1>

                <div className="descricao-info-user">

                  <p>O My Reposit é um gerenciador de repositórios de forma organizada, acompanhe 
                    em real-time todas suas mudanças, com um design magnífico estamos a propor facilidade a você. Começe agora, fácil, bonito e gratuito.</p>

                </div>

                */}

              </div>

              <div className="content-find-user">
                
                {/*<Music width={300} height={28} />*/}

              <div className="img-git">

                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Git Hub" />

              </div>

            <div className="input-user">

              <input type="text" onChange={e => setNome(e.target.value)} placeholder="Seu nome de usuário do Git Hub" />

            </div>

                  {nome === '' ? null :
              
                  <div className="content-button-user">

                    <div className="button-user">
                      
                      <Link to={`${nome}`}>Ver perfil</Link>
                      
                    </div>
                  </div>
                      }

                
                <a href="https://www.github.com" target="_blank" className="forgot-name" >Esqueceu seu nome de usuário?</a>

        </div>
  
      </div>

    </div>


    </div>
    </div>
    </div>

  );
  
}

export default User;