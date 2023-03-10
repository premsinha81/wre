import React from 'react'

const Homeform = () => {
  return (
    <div>          <main>
    <div class="wrappers">
       <h2>Search Programs</h2>
       <form action="#">
          <div class="form-group">
             <select name="programs" id="" class="form-control selectOption">
                <option value="">- Select Program -</option>
                <option value="">Program 1</option>
                <option value="">Program 2</option>
                <option value="">Program 3</option>
             </select>
          </div>
          <div class="form-group">
             <select name="programs" id="" class="form-control selectOption">
                <option value="">- Select Degree -</option>
                <option value="">Degree 1</option>
                <option value="">Degree 2</option>
                <option value="">Degree 3</option>
             </select>
          </div>
          <div class="form-group">
             <select name="programs" id="" class="form-control selectOption">
                <option value="">- Select Duration -</option>
                <option value="">Duration 1</option>
                <option value="">Duration 2</option>
                <option value="">Duration 3</option>
             </select>
          </div>
          <div class="input-box button">
             <input type="submit" name="submitButton" class="searchBtn" id="submitButton"
                value="Search Now"/>
          </div>
       </form>
    </div>
 </main></div>
  )
}

export default Homeform