import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faComment } from '@fortawesome/free-solid-svg-icons';


import "./EachIssue.css"

const EachIssue = () => {

    const {number} = useParams()

    const [issues, setIssues] = useState({})


    useEffect(() => {

        const geIssueById = async () => {

            try {

                const res = await axios.get("https://api.github.com/repos/DiogoDosSantosMarques/Avalicao-GITHUB-BLOG/issues/" + number)

                setIssues(res.data)

            } catch (error) {

                console.log(error)
                
            }

        }

        geIssueById()

    }, [number])

    


  return (

    <>
    <div className="info-issues">

        <div>

            <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} /> Voltar
            </Link>

        </div>

        <div className="issue-title">
            {issues.title}
        </div>

        <div className="coment">

            <div>
            <FontAwesomeIcon icon={faComment} /> {issues.comments} Comentários
            </div>

            <div>
                <p>Issue Criada: {issues.created_at} </p>
            </div>

        </div>
     
    </div>

    <div className="body-issues">

        <p>{issues.body}</p>

    </div>

    </>
  )
}

export default EachIssue
