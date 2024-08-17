import "./Perfil.css"

import palmer from "../../images/colepalmer.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'
import { useEffect, useState } from "react";

const Perfil = () => {

  const [perfil, setPerfil] = useState([])


  const getDadosPerfil = async () => {

    try {

      const res = await axios.get('api.github.com/users/DiogoDosSantosMarques')

      setPerfil(res.data)
      
    } catch (error) {

      console.log(error)
      
    }

  }


  useEffect(() => {

    getDadosPerfil()

  }, [])

  return (
    <header>

        <div className="image">
        <img src={palmer} width={200} />
        </div>

        <div className="informacoes">

            

        <h2></h2>

        <p>Fala muito e não joga porra nenhuma, corre todo errado, não sabe dar um passe de 5 metros,
        não sabe chutar no gol e o embasado é q ele não serve nem pra ser goleiro.
       </p>
       

             <div className="status">

                <div className="seguidores">
                <FontAwesomeIcon icon={faUser} size="1x" />
                <p>1200 seguidores</p>
                </div>

                <div className="seguindo">

                <FontAwesomeIcon icon={faUser} size="1x" />
                <p>1200 seguindo</p>

                </div>

             </div>

             

        </div>
      
    </header>
  )
}

export default Perfil
