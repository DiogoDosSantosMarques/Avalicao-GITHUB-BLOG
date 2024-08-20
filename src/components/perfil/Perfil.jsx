import "./Perfil.css"



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'
import { useEffect, useState } from "react";
import Issues from "../issues/Issues";

const Perfil = () => {

 
  const [perfil, setPerfil] = useState({})

  const [posts, setPosts] = useState([])

  


  // Use Effect dos dados de perfil
  useEffect(() => {

    const getDadosApi = async () => {

     try {

      const res = await axios.get("https://api.github.com/users/DiogoDosSantosMarques")

      setPerfil(res.data)
      
     } catch (error) {

      console.log(error)
      
     }

    }

    getDadosApi()

  }, [])



  // useEffect das issues
  useEffect(() => {

    const getIssues = async () => {

      try {

        const res = await axios.get("https://api.github.com/repos/DiogoDosSantosMarques/Avalicao-GITHUB-BLOG/issues")

        setPosts(res.data)
        
      } catch (error) {

        console.log(error)
        
      }

    }
    

    getIssues()

  }, [])
  

  return (

    <>
    <header>

        <div className="image">
        <img src={perfil.avatar_url} width={200} />
        </div>

        <div className="informacoes">

            

        <h2>{perfil.name}</h2>

        <p>{perfil.bio}
       </p>
       

             <div className="status">
              

                <div className="seguidores">
                <FontAwesomeIcon icon={faUser} size="1x" />
                <p>{perfil.followers} seguidores</p>
                </div>

                <div className="seguindo">

                <FontAwesomeIcon icon={faUser} size="1x" />
                <p>{perfil.following} seguindo</p>

                

                </div>

             </div>

             

        </div>

       </header>

       <div className="search-bar">

        <div className="publicacoes">
          <h4>Publicações</h4>
          <p>{posts.length} Publicações</p>
        </div>

        <input type="text" placeholder="Buscar Conteúdo" />

       </div>

       

<div className="issues">
    {posts && posts.map((post) => (
      <Issues key={post.id} id={post.number} title={post.title} body={post.body} />
    ))}
  </div>

    </>
  )
}

export default Perfil
