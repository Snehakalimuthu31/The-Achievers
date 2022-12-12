import React, { Component } from 'react'
import'./st.css'
export default class College extends Component {
  render() {
    return (

      <div>
        <div class="sr">
        <div class="s1">
          <h1>REGISTRATION FORM</h1>
        </div>
        <div class="s2">
          <h1>NAME</h1>
        </div>
        <br/>
        <div class="s5">
        <div class="s3">
          <input type="text" name="txtFirst" placeholder="First" required>
          </input>
        </div>
        <div class="s4">
          <input type="text" name="Last" placeholder="Last">
          </input>
        </div>
        </div>
        <div class="s6">
          <h1>DATE OF BIRTH</h1>
        </div>
        <br/>
        <div class="s7">
          <input type="text" name="MM/DD/YYYY" placeholder="MM/DD/YYYY">
          </input>
        </div>
        <br/>
        <div class="s8">
          <h1>EMAIL</h1>
        </div>
        <br/>
        <div class="s9">
          <input type="text" name="" placeholder="">
          </input>
        </div>
        <br/>
        <div class="s10">
          <h1>GENDER</h1>
        </div>
        <div class="s11">
        <input type="radio"name='fav'></input>
        &nbsp;&nbsp;
          <h1>MALE</h1>
        </div>
        <div class="s12">
        <input type="radio"name='fav'></input>
        &nbsp;&nbsp;&nbsp;
          <h1>FEMALE</h1>
        </div>
        <br/>
        <div class="s40">
         <input type="radio"name='fav'></input>
         &nbsp;&nbsp;&nbsp;
           <h1>OTHERS</h1>
        </div>
        <div class="s13">
          <h1>ADDRESS</h1>
        </div>
        <br/>
        <div class="s14">
          <input type="text" name="" placeholder="">
          </input>
        </div>
        <br/>
        <div class="s17">
        <div class="s15">
          <input type="text" name="CITY" placeholder="CITY">
          </input>
        </div>
        <div class="s16">
          <input type="text" name="COUNTRY" placeholder="COUNTRY">
          </input>
        </div>
        </div>
        <br/>
        <div class="s18">
          <h1>MOBILE NO</h1>
        </div>
        <br/>
        <div class="s19">
          <input type="text" name="" placeholder="">
          </input>
        </div>
        <br/>
        <div class="s20">
          <h1>STATE</h1>
        </div>
        <br/>
        <div class="s21">
          <input type="text" name="" placeholder="">
          </input>
        </div>
        <br/>
        <div class="s22">
          <h1>NATIONALITY</h1>
        </div>
        <br/>
        <div class="s23">
          <input type="text" name="" placeholder="">
          </input>
        </div>
        <br/>
        <div class="s24">
          <h1>PINCODE</h1>
        </div>
        <br/>
        <div class="s25">
          <input type="text" name="" placeholder="">
          </input>
        </div>
        <br/>
        <div class="ss">
          <button>REGISTER</button>
        </div>
        </div>
      </div>
    )
  }
}
