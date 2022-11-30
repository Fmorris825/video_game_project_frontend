import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ setQuery }) => {
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
        placeholder="Search Game Here"
        className="me-2"
        aria-label="Search"
        onChange={(event) => setTempQuery(event.target.value)}
        value={tempQuery}
      />
      <Button variant="light">Search</Button>
    </Form>
  );
};

export default SearchBar;
