import React from 'react';
import './App.css';


function Form(props) {
  
  return (

    <div >
      <form>
        <div className="heading">
          <p class="flow-text">Enroll Device</p>
        </div>
        <div className="form-style">
          <div >
            <input placeholder="Device Id" id="first_name" type="text" class="validate" />
            <label for="first_name"></label>
          </div>

          <div class="file-field input-field">
            <div class="btn">
              <span>Public Key</span>
              <input type="file" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>

          {/* <input type="file"></input> */}
          <input type="submit" className=" btn waves-effect waves-light btn"></input>



        </div>
      </form>
    </div>

  );
}

export default Form;
