import NavigationBar from  '../components/NavigationBar'
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import { inject } from 'mobx-react'
import { Employee } from '../store'

@inject('store')
class AddPage extends React.Component {
  handleSubmit(){
    this.props.store.addEmployee();
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className='container py-4'>
          <div className='col-md-12'>
            <div className='card p-2 bg-light'>
              <h1 className="text-secondary">Add employee</h1>
              <Form onSubmit={() => this.handleSubmit()}>  {/*  */}
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="name">Full name</Label>
                      <Input type="text" name="name" id="name" placeholder="full name" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="username">Username</Label>
                      <Input type="text" name="username" id="username" placeholder="username" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input type="email" name="email" id="email" placeholder="email" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={8}>
                    <FormGroup>
                      <Label for="street">Street</Label>
                      <Input type="text" name="street" id="street" placeholder="street"/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="suite">Suite</Label>
                      <Input type="text" name="suite" id="suite" placeholder="suite"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="city">City</Label>
                      <Input type="text" name="city" id="city" placeholder="city"/>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="zipcode">Zipcode</Label>
                      <Input type="text" name="zipcode" id="zipcode" placeholder="zipcode"/>
                    </FormGroup>  
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="lat">Latitude</Label>
                      <Input type="text" name="lat" id="lat" placeholder="50.6546"/>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="lng">Longitude</Label>
                      <Input type="text" name="lng" id="lng" placeholder="50.6546"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="tel">Phone</Label>
                      <Input type="tel" name="tel" id="tel" placeholder="+420 123 456 789"/>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="url">Website</Label>
                      <Input type="url" name="url" id="url" placeholder="http://www.example.com"/>
                    </FormGroup>  
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="company_name">Company name</Label>
                      <Input type="text" name="company_name" id="company_name" placeholder="company name"/>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="company_catch_phrase">Company catch phrase</Label>
                      <Input type="text" name="company_catch_phrase" id="company_catch_phrase" placeholder="company catch phrase"/>
                    </FormGroup>  
                  </Col>
                </Row>              
                <Button>Save</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddPage