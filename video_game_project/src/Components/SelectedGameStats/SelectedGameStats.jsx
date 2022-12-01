import { Button, Collapse } from "react-bootstrap";
import React, { useState } from "react";

const SelectedGameStats = ({ game }) => {
  const [open, setOpen] = useState(false);
  return (
    <td colSpan={4} className="d-flex align-items-center flex-column">
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        View Stats
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {`${game.name} ${game.genre} ${game.publisher} ${game.year}`}
        </div>
      </Collapse>
    </td>
  );
};

export default SelectedGameStats;
