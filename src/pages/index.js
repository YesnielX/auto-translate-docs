import React from "react";
import { Redirect } from "react-router-dom";

export default function Home() {
  const homeDocs = `${location.hostname}/auto-translate-docs/docs`;

  return <Redirect to={homeDocs} />;
}
