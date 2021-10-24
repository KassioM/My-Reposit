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

                <img src="https://img3.gratispng.com/dy/d3b77b3c5df9fab955ed88ce30e30148/L0KzQYm3WMA4N6ttiZH0aYP2gLBuTfdqfJl6ep95YXfog37zjBdwNaNqiNH8aYTygsq0hv9zc15sgeZxdXKwfLFuj70yNZ5mf9d3dIn2PYbpVsllbWg2eqc6Mka4Pom8WMYxP2c7Sac8M0a5RImBUcc1OWgziNDw/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417.png" alt="Git Hub" />

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