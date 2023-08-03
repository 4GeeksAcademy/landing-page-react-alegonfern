import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function Jumbo(props) {
  var titulo = ""
  var parrafo1 = ""
  var parrafo2 = ""

  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <h1 className="display-4">{props.titulo}</h1>
      <p className="lead">{props.parrafo1}</p>
      <hr className="my-4" />
      <p>{props.parrafo2}</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  );
}

export default Jumbo;