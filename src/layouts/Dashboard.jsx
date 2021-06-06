import React from "react";
import Banner from "./Banner";
import { Container } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Banner />
      <Container className="main"></Container>
    </div>
  );
}
