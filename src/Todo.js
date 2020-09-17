import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      txtContent: "",
    };
  }

  setChange = (e) => {
    this.setState({
      txtContent: e.target.value,
    });
  };
  addItem = () => {
    let curText = this.state.txtContent;
    let curItems = this.state.items;
    curItems.push(curText);
    this.setState({ items: curItems });
    this.setState({
      txtContent: "",
    });
  };
  delItem = (i) => {
    if (!window.confirm("do you want to delete this item")) {
      return;
    }
    let getItem = this.state.items;
    getItem.splice(i, 1);
    this.setState({ items: getItem });
  };
  render() {
    return (
      <div className="mt-4">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="card shadow">
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="write some text"
                    onChange={this.setChange}
                    id="mainInput"
                    value={this.state.txtContent}
                  ></input>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block"
                  value="insert"
                  onClick={this.addItem}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto mt-3">
          {this.state.items.map((item, k) => {
            return (
              <div className="card m-2" key={k}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-8">
                      <div className="lead">{item}</div>
                    </div>
                    <div className="col-4">
                      <button
                        className="btn btn-danger btn-block"
                        onClick={() => {
                          this.delItem(k);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
