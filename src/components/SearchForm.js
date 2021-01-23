import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Por favor ingrese un nombre como termino de búsqueda.');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ingrese el nombre de la canción que desea buscar</Form.Label>
          <Form.Control
            type="search"
            name="searchTerm"
            value={searchTerm}
            placeholder="Puedes buscar por cancion o arstista"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </Form.Group>
        <Button className="botonBuscarCancion" variant="info" type="submit">
          Buscar Canción
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;
