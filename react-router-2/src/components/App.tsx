import React from "react";
import { Link } from "react-router-dom";

export function App() {
  return (
    <>
      <h2>React Router single page</h2>
      <ul>
        <li>
          <Link to="/">Back to home</Link>
        </li>
        <li>
          <Link to="/react-router-1-sub-pages">Visit React Router 1</Link>
        </li>
      </ul>
    </>
  );
}
