import React, { Component } from 'react';
import './App.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      path: ''
    }
    this._onChangeInput = this._onChangeInput.bind(this)
    this._onChangeFile = this._onChangeFile.bind(this)

  }

  _onChangeInput(event) {
    this.setState({
      id: event.target.value
    })
    console.log(this.state.id);
  }

  // _onChangeFile(event){
  //   this.setState({
  //     path:event.target.files[0]
  //   })
  //   console.log(this.state.path);
  // }
  _onChangeFile(event) {
    let file = event.target.files[0];
    console.log(file);

    if (file) {
      let data = new FormData();
      data.append('file', file);
      // axios.post('/files', data)...
    }
  }


  render() {
    return (

      <div >
        <form>
          <div className="heading">
            <p class="flow-text">Enroll Device</p>
          </div>
          <div className="form-style">
            <div >
              <input placeholder="Device Id" id="first_name" type="text" class="validate" onChange={this._onChangeInput} />
              <label for="first_name"></label>
            </div>

            <div class="file-field input-field">
              <div class="btn">
                <span>Public Key</span>
                <input type="file" onChange={this._onChangeFile} />
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text"  />
              </div>
            </div>
            {/* <input type="file"></input> */}
            <input type="submit" className=" btn waves-effect waves-light btn"></input>
          </div>
        </form>
      </div>

    )
  };
}

export default Form;
