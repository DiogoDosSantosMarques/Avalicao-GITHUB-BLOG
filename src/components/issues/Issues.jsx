import React from 'react';
import { Link } from 'react-router-dom';
import './Issues.css';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'; // Importa o react-markdown

const Issues = ({ id, title, body }) => {

  const maxLength = 100;
  const isLong = body.length > maxLength;
  const shortBody = isLong ? body.slice(0, maxLength) + '...' : body;

  return (
    <div className='posts'>
      <Card style={{ width: '100%', backgroundColor: 'rgb(63, 63, 128)' }}>
        <Card.Body>
          <Card.Title style={{ color: '#fff' }}>{title}</Card.Title>

          <Card.Text style={{ color: '#000000' }}>
            <ReactMarkdown>{shortBody}</ReactMarkdown> {/* Converte o Markdown para HTML */}
          </Card.Text>
 
          <Link to={`/issue/${id}`}>Ver mais</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

Issues.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Issues;
