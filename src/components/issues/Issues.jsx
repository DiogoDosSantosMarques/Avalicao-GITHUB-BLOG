import './Issues.css'
import Card from 'react-bootstrap/Card';

const Issues = () => {
  return (
    <div className='posts'>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
   
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Issues
