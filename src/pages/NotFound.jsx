import React from 'react'
import { Link } from 'react-router-dom';
import Music from './music';

const NotFound = () => {
    return (
        <div className="notfound" >
            <div className="content-notfound">

            <Music width={300} height={28} />

                <div className="title-notfound">
                    <h1>404</h1>
                    <p>Parece que você inseriu um nome incorreto ou excedeu a cota de pesquisas.</p>
                </div>

                <div className="button-content-notfound">

                    <div className="button-notfound">
                        <Link to="/">
                            Voltar para o inicio
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default NotFound;
