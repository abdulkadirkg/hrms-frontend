import { Button, Grid, Segment, Label, Icon } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import AdvertisementService from "../services/advertisementService";

export default function Lastest() {
  const [advertisements, setAdvertisements] = useState([]);
  useEffect(() => {
    let advertisementService = new AdvertisementService();
    advertisementService
      .getAdvertisements()
      .then((result) => setAdvertisements(result.data.data));
  }, []);
  return (
    <div>
      <Button.Group>
        <Button className="primary-color">Bu Ay</Button>
        <Button.Or text="-" />
        <Button className="primary-color">Bu Hafta</Button>
        <Button.Or text="-" />
        <Button className="primary-color">Bugün</Button>
      </Button.Group>
      <div className="py-3">
        {advertisements.map((advertisement) => (
          <Segment
            className="advertisement-segment"
            padded
            key={advertisement.id}
          >
            <Grid>
              <Grid.Column width={12}>
                <Grid.Row>
                  <h2>{advertisement.position.jobName}</h2>
                  <p>{advertisement.jobDescription}</p>
                  <Label color="grey">
                    <Icon name="map marker alternate" />
                    {advertisement.city.cityName}
                  </Label>
                  <Label color="grey">
                    <Icon name="try" />
                    {advertisement.salaryMin} - {advertisement.salaryMax}
                  </Label>
                  <Label color="grey">
                    <Icon name="user plus" />
                    {advertisement.positionCount}
                  </Label>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={4}>
                <Grid.Row>
                    {advertisement.createdAt}
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Segment>
        ))}
      </div>
    </div>
  );
}
