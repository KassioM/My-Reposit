import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Banner from '../../img/banner.jpg';
import axios from 'axios';
import Music from '../music';
import Box from './box';
import NotFound from '../NotFound';

const Profile = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://api.github.com/users${window.location.pathname}?client_id=787c5df6bdd9758bc1ae&client_secret=a199d810fc92ea17fab38c9b75fc0ade81a15938`).then(({data}) => {
            setData(data);
          })
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [repo, setRepo] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/users${window.location.pathname}/repos?client_id=787c5df6bdd9758bc1ae&client_secret=a199d810fc92ea17fab38c9b75fc0ade81a15938`).then(({data}) => {
            setRepo(data);
          })
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    console.log(data)
    
        
    return (
        <div className="page-profile" >

            {data.name === undefined ? 
            
            <NotFound />
            
            
            :
            
            <div className="home">

                <div className="banner">
                            
                    <Music width={300} height={28} />
            
                    {/*Banner*/}
            
                    <img src={Banner} alt="Banner" />
            
            </div>
    
            <div className="box-perfil">
                <div className="perfil">
    
                        {
                            data.user === null ?
                                <Redirect to="/" /> :
                                
                                <div className="content-perfil">
    
                                    {/*Foto de Perfil*/}
                
                                        <img className="foto" src={data.avatar_url} />
                
                                    {/*Nome e Sobre*/}
                
                                        <div className="title-perfil">
                                                <h1 className="nome" >{data.name}</h1>
                                                <p className="bio">{data.bio}</p>
                                                <i className="material-icons-outlined" />

                                                {data.blog === undefined ?
                                                    null
                                                    :
                                                    <div className="button-site">
                                                        <i class="fas fa-globe" />
                                                        <a href={data.blog} target="_blank" className="site">{data.blog}</a>
                                                    </div>
                                                }
                                    </div>
                                    
                                    <div className="activy-user">

                                        <div className="followers">
                                            <h1>{data.followers}</h1>
                                            <p>Seguidores</p>
                                        </div>

                                        <div className="following">
                                            <h1>{data.following}</h1>
                                            <p>Seguindo</p>
                                        </div>

                                    </div>
                                    

            
                                </div>

                        }
    
                </div>
            </div>
            
                <div className="content-repositorio-box">
                    
                    <div className="repositorios">
                        
                        <div className="content-repositorios">
        
                            {repo?.map((reposit) => (
                                <div key={reposit.id}>
                                    <Box name={reposit.name} url={reposit.html_url} branch={reposit.default_branch} description={reposit.description} />
                                </div>
                            ))}
        
                            </div>
        
                    </div>

               </div>
                                

                </div>
            
            }
            
        </div>
      );
};

export default Profile;
