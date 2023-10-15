
import React from "react";
import document from "../assets/img/document.png";
import driver1 from "../assets/img/driver1.png";
import driver from "../assets/img/driver.png";
import driver3 from "../assets/img/driver3.png";
import driver4 from "../assets/img/driver4.png";
import driver5 from "../assets/img/driver5.png";
import driver2 from "../assets/img/driver2.png";
import client from "../assets/img/client.png";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

function Dashboard(props) {

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <h2>Driver Management</h2>
            <Card>
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h2" className="text-red">Drivers Accounts</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Driver's Name</th>
                        <th>Documents</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John Doe</td>
                        <td>
                          <div>
                            <img src={document} alt="" className="mr-2" />
                            <span>Document 1</span>
                            <span className="ml-4">30s ago</span>
                          </div>
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 mr-2 card-approved" />Approved
                        </td>
                        <td>24.Jan.2021</td>
                        <td>
                          <i className="fas fa-ellipsis-h card-dots" />
                        </td>
                      </tr>

                      <tr>
                        <td>John Doe</td>
                        <td>
                          <div>
                            <img src={document} alt="" className="mr-2" />
                            <span>Document 1</span>
                            <span className="ml-4">30s ago</span>
                          </div>
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove card-rejected mr-2" />Removed
                        </td>
                        <td>30.Dec.2021</td>
                        <td>
                          <i className="fas fa-ellipsis-h card-dots" />
                        </td>
                      </tr>
                      <tr>
                        <td>John Doe</td>
                        <td>
                          <div>
                            <img src={document} alt="" className="mr-2" />
                            <span>Document 1</span>
                            <span className="ml-4">30s ago</span>
                          </div>
                        </td>
                        <td>
                          <i className="tim-icons icon-alert-circle-exc mr-2 card-suspended" />Suspend
                        </td>
                        <td>20.May.2021</td>
                        <td>
                          <i className="fas fa-ellipsis-h card-dots" />
                        </td>
                      </tr>
                      <tr>
                        <td>John Doe</td>
                        <td>
                          <div>
                            <img src={document} alt="" className="mr-2" />
                            <span>Document 1</span>
                            <span className="ml-4">30s ago</span>
                          </div>
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 mr-2 card-approved" />Approved
                        </td>
                        <td>12.July.2021</td>
                        <td>
                          <i className="fas fa-ellipsis-h card-dots" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h2" className="text-red">Top Drivers</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Rides</th>
                      <th className="text-center">Ratings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src={driver1} alt="" className="mr-2" />Dakota Rice</td>
                      <td>Niger</td>
                      <td className="text-center">
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          <hr
                            style={{
                              borderTop: '8px solid #e92928',
                              width: '50%',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={driver} alt="" className="mr-2" />
                        Minerva Hooper
                      </td>
                      <td>Curaçao</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 80%, #fcdfdf 20%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver3} alt="" className="mr-2" />Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 70%, #fcdfdf 30%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver4} alt="" className="mr-2" />Philip Chaney</td>
                      <td>Korea, South</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 60%, #fcdfdf 40%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver5} alt="" className="mr-2" />Doris Greene</td>
                      <td>Malawi</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 50%, #fcdfdf 50%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver3} alt="" className="mr-2" />Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 45%, #fcdfdf 55%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver3} alt="" className="mr-2" />Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              borderTop: '8px solid #e92928',
                              width: '50%',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver1} alt="" className="mr-2" />Dakota Rice</td>
                      <td>Niger</td>
                      <td className="text-center">
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          <hr
                            style={{
                              borderTop: '8px solid #e92928',
                              width: '50%',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={driver} alt="" className="mr-2" />
                        Minerva Hooper
                      </td>
                      <td>Curaçao</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 80%, #fcdfdf 20%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver3} alt="" className="mr-2" />Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 70%, #fcdfdf 30%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver4} alt="" className="mr-2" />Philip Chaney</td>
                      <td>Korea, South</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 60%, #fcdfdf 40%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver3} alt="" className="mr-2" />Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 70%, #fcdfdf 30%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver4} alt="" className="mr-2" />Philip Chaney</td>
                      <td>Korea, South</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 60%, #fcdfdf 40%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={driver5} alt="" className="mr-2" />Doris Greene</td>
                      <td>Malawi</td>
                      <td className="text-center">
                        <div style={{ position: 'relative' }}>
                          <hr
                            style={{
                              background: 'linear-gradient(to right, #e92928 50%, #fcdfdf 50%)',
                              width: '50%',
                              height: '8px',
                              borderRadius: '4px',
                              margin: '0 auto',
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="card-chart">
              <CardHeader className="text-center">
                <h5 className="card-category">Daily Sales</h5>
                <img src={driver2} alt="" />
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" /> Patrick
                </CardTitle>
                <span><i className="fa fa-star text-yellow card-star" /> 4.9</span>
                <h4 className="mt-4"><span className="bg-secondary rounded-lg p-2">HS785K</span></h4>
                <span>Volkswagen Jetta</span>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <img src={client} alt="" />
                      <span className="ml-2">Pauline Wheeler <br /></span>
                    </div>
                    <div>
                      <span>1 day ago</span>
                    </div>
                  </div>
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias</p>
                </div>
              </CardBody>
            </Card>
            <Card className="card-chart">
              <CardHeader className="text-center">
                <h5 className="card-category">Daily Sales</h5>
                <img src={driver2} alt="" />
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" /> Patrick
                </CardTitle>
                <span><i className="fa fa-star text-yellow card-star" /> 4.9</span>
                <h4 className="mt-4"><span className="bg-secondary rounded-lg p-2">HS785K</span></h4>
                <span>Volkswagen Jetta</span>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <img src={client} alt="" />
                      <span className="ml-2">Pauline Wheeler <br /></span>
                    </div>
                    <div>
                      <span>1 day ago</span>
                    </div>
                  </div>
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="card-chart">
              <CardHeader className="text-center">
                <h5 className="card-category">Daily Sales</h5>
                <img src={driver2} alt="" />
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" /> Patrick
                </CardTitle>
                <span><i className="fa fa-star text-yellow card-star" /> 4.9</span>
                <h4 className="mt-4"><span className="bg-secondary rounded-lg p-2">HS785K</span></h4>
                <span>Volkswagen Jetta</span>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <img src={client} alt="" />
                      <span className="ml-2">Pauline Wheeler <br /></span>
                    </div>
                    <div>
                      <span>1 day ago</span>
                    </div>
                  </div>
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias</p>
                </div>
              </CardBody>
            </Card>
            <Card className="card-chart">
              <CardHeader className="text-center">
                <h5 className="card-category">Daily Sales</h5>
                <img src={driver2} alt="" />
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" /> Patrick
                </CardTitle>
                <span><i className="fa fa-star text-yellow card-star" /> 4.9</span>
                <h4 className="mt-4"><span className="bg-secondary rounded-lg p-2">HS785K</span></h4>
                <span>Volkswagen Jetta</span>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <img src={client} alt="" />
                      <span className="ml-2">Pauline Wheeler <br /></span>
                    </div>
                    <div>
                      <span>1 day ago</span>
                    </div>
                  </div>
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <i className="fa fa-star text-yellow card-star" />
                  <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
