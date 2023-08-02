import React from 'react';


function MyCard() {
  return (<div className='container'>
    <div className='row'>

    <div className="col-md-3">
    <Card imageSrc="https://picsum.photos/id/233/900/400"/>
    </div>

    <div className="col-md-3">
      <Card imageSrc="https://picsum.photos/id/322/900/400"/>
    </div>

    <div className="col-md-3">
      <Card imageSrc="https://picsum.photos/id/231/900/400"/>
    </div>

    <div className="col-md-3">
    <Card imageSrc="https://picsum.photos/id/321/900/400"/>
    </div>
    
    </div>
    
  </div>
  );
}
function Card(props){
  return (
    <div className="card">
      <img src={props.imageSrc} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default MyCard;
