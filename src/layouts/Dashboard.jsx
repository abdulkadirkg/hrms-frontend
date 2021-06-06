import React from "react";
import Banner from "./Banner";
import { Container, Grid } from "semantic-ui-react";
import Lastest from "../pages/Lastest";

export default function Dashboard() {
  return (
    <div>
      <Banner />
      <Container className="main-container">
        <div className="caption py-3"><b>Son Eklenen İlanlar</b></div>
        <Grid>
          <Grid.Column width={12}>
            <Grid.Row>
              <Lastest />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid.Row>
              <div className="caption"><b>Öne Çıkanlar</b></div>
              
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
