import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  Table,
  UncontrolledCarousel,
  Nav,
  NavItem,
  NavLink,
  Form,
  Label,
  Input,
  FormGroup,
  FormText,
} from "reactstrap";

export class Boot extends Component {
  render() {
    return (
      <div>
        <Nav className="bg-dark mb-5 sticky-top ps-5">
          <NavItem>
            <NavLink className="vvv" active href="#">
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="vvv">
              Another Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="vvv">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
        <Container className="">
          <Row>
            <Col md="3">
              <Card>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Table dark className="mt-5">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <UncontrolledCarousel
            items={[
              {
                altText: "Slide 1",
                caption: "Slide 1",
                key: 1,
                src: "https://picsum.photos/id/123/1200/600",
              },
              {
                altText: "Slide 2",
                caption: "Slide 2",
                key: 2,
                src: "https://picsum.photos/id/456/1200/600",
              },
              {
                altText: "Slide 3",
                caption: "Slide 3",
                key: 3,
                src: "https://picsum.photos/id/678/1200/600",
              },
            ]}
          />
          <Form className="text-left">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input
                id="exampleSelectMulti"
                multiple
                name="selectMulti"
                type="select"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>
                This is some placeholder block-level help text for the above
                input. It‘s a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Input name="radio1" type="radio" />{" "}
                <Label check>
                  Option one is this and that—be sure to include why it‘s great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" />{" "}
                <Label check>
                  Option two can be something else and selecting it will
                  deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input disabled name="radio1" type="radio" />{" "}
                <Label check>Option three is disabled</Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" /> <Label check>Check me out</Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Boot;
