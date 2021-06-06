import React, { useState, useEffect } from "react";
import CityService from "../services/cityService";
import {
  Container,
  Grid,
  Input,
  Dropdown,
  Button,
  Label,
  Icon,
} from "semantic-ui-react";

export default function Banner() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => {setCities(result.data.data)});
  }, []);
  return (
    <div className="banner">
      <Container className="banner-container">
        <Grid>
          <Grid.Row>
            <Grid.Column width={7}>
              <Input icon="search" fluid placeholder="Pozisyon Ara" />
              <div>
                <Label as="a">
                  <Icon name="computer" /> IOS Developer
                </Label>
                <Label as="a">
                  <Icon name="computer" /> Programmer
                </Label>
                <Label as="a">
                  <Icon name="computer" /> Full-Stack Developer
                </Label>
                <Label as="a">
                  <Icon name="computer" /> Full-Stack Developer
                </Label>
              </div>
            </Grid.Column>
            <Grid.Column width={7}>
              <Dropdown
                placeholder="Konum"
                fluid
                search
                selection
                // options={stateOptions}
              />
              {cities.map((city) => (
                <Label as="a" key={city.id}>
                  <Icon name="map marker alternate" /> {city.cityName}
                </Label>
              ))}
              <Label as="a">
                <Icon name="map marker alternate" /> Remote
              </Label>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button content="Ara" icon="search" labelPosition="right" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
