import axios from "axios";
import React from "react";
import { Alert, Button, Form, Table } from "react-bootstrap";

const initialState = {
  graph_form: {
    name: "lorem",
    graph: "",
  },
  responseStatusGraph: null,
  graph_info: {
    minimal_len: {},
    path: [],
  },
  responseStatusPath: null,
  path_form: {
    graph: [],
    start: null,
    end: null,
  },
};

class Graph extends React.Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  convertGraph = async () => {
    await axios
      .post("/path_searcher/get_converted_graph/", this.state.graph_form)
      .then((response) => {
        this.setState((prevState) => ({
          path_form: {
            ...prevState.path_form,
            graph: response.data["graph"],
          },
        }));
        this.setState({ responseStatusGraph: response.status });
      })
      .catch((error) => {
        this.setState({ responseStatusGraph: error.response.status });
      });
  };

  getPath = async () => {
    await axios
      .post("/path_searcher/get_minimal_path/", this.state.path_form)
      .then((response) => {
        this.setState({ graph_info: response.data });
        this.setState({ responseStatusPath: response.status });
      })
      .catch((error) => {
        this.setState({ responseStatusPath: error.response.status });
      });
  };

  handleChangeGraph = (event) => {
    this.clearState();
    this.setState((prevState) => ({
      graph_form: {
        ...prevState.graph_form,
        [event.target.id]: event.target.value,
      },
    }));
  };

  handleChangePath = (event) => {
    this.setState((prevState) => ({
      path_form: {
        ...prevState.path_form,
        [event.target.id]: event.target.value,
      },
    }));
  };

  async componentDidMount() {}

  render() {
    const onChangeGraph = this.handleChangeGraph;
    const onChangePath = this.handleChangePath;
    const convertGraph = this.convertGraph;
    const getPath = this.getPath;

    const { responseStatusGraph, responseStatusPath, path_form, graph_info } =
      this.state;
    return (
      <>
        <div className="col-9 ms-auto me-auto mt-5 border border-2 p-4 rounded-3">
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Enter graph name</Form.Label>
            <Form.Control type="input" onChange={onChangeGraph} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="graph">
            <Form.Label>Enter graph using commas and newlines</Form.Label>
            <Form.Control as="textarea" rows={6} onChange={onChangeGraph} />
          </Form.Group>

          {responseStatusGraph === 400 ? (
            <Alert variant="danger">Something is wrong with graph format</Alert>
          ) : null}

          <Button variant="primary" type="submit" onClick={convertGraph}>
            Convert graph
          </Button>
        </div>

        {responseStatusGraph === 200 ? (
          <>
            <div className="col-9 ms-auto me-auto mt-5 border border-2 p-4 rounded-3">
              <Form.Group controlId="start" className="mb-3">
                <Form.Label>Enter start node</Form.Label>
                <Form.Control type="number" onChange={onChangePath} />
              </Form.Group>
              <Form.Group controlId="end" className="mb-3">
                <Form.Label>Enter end node</Form.Label>
                <Form.Control type="number" onChange={onChangePath} />
              </Form.Group>

              {responseStatusPath === 400 ? (
                <Alert variant="danger">
                  Start or end node is wrong
                </Alert>
              ) : null}

              <Button variant="primary" type="submit" onClick={getPath}>
                Get path
              </Button>
              {responseStatusPath === 200 ? (
                <>
                  <p className="mt-3">
                    Minimal len of path from node {graph_info.path[0]} to all
                    nodes
                  </p>
                  <Table className="mt-3 mb-0">
                    <tbody>
                      {Object.keys(graph_info["minimal_len"]).map((key) => (
                        <tr key={key}>
                          <td className="col-1">{key}</td>
                          <td className="col-11">
                            {graph_info["minimal_len"][key]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <p className="mt-3">
                    Minimal path from node {path_form.start} to node{" "}
                    {path_form.end}
                  </p>
                  <p>{graph_info["path"].join(" -> ")}</p>
                  <p>Len of path = {graph_info.minimal_len[path_form.end]}</p>
                </>
              ) : null}
            </div>

            <div className="col-9 ms-auto me-auto mt-5 border border-2 p-4 rounded-3">
              <Table className="mt-3 mb-0">
                <p>Graph matrix</p>
                <tbody>
                  {path_form["graph"].map((row, idy) => (
                    <tr key={idy}>
                      {row.map((col, idx) => (
                        <td className="col-1" key={idx}>
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </>
        ) : null}
      </>
    );
  }
}

export default Graph;
