import { Container, Grid, Button } from "semantic-ui-react";

export default function Navi() {

  return (
    <div>
      <header>
        <Container>
          <Grid verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={12}>
                <div className="header-logo">
                  <b>H</b>uman <b>R</b>esources <b>M</b>anagement <b>S</b>ystem
                </div>
              </Grid.Column>
              <Grid.Column width={3}>
                <Button.Group>
                  <Button>Giriş Yap</Button>
                  <Button.Or text="-" />
                  <Button positive>Kayıt Ol</Button>
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </header>
    </div>
  );
}
