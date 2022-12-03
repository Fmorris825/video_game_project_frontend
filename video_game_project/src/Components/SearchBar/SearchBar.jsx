import { useState, useRef } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ setQuery, useRef }) => {
  const [tempQuery, setTempQuery] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setQuery(tempQuery);
    setTempQuery("");
  };

  return (
    <Form className="d-flex" onSubmit={onSubmit}>
      <FormControl
        type="search"
        placeholder="Search Games by Title, Platform, Release Year, Publisher, or Genre"
        className="me-2"
        aria-label="Search"
        onChange={(event) => setTempQuery(event.target.value)}
        value={tempQuery}
      />
      <a href="#Search Results">
        <Button variant="light">Search</Button>
      </a>
    </Form>
  );
};

export default SearchBar;
