import {React,useState,useEffect} from 'react'

const Leftpanel = () => {
     const[data,setdata]=useState([]);
  
const getuser=async()=>{
    const respond = await fetch("http://162.144.98.113/~work/wre/api/get/location");
    const user =await  respond.json();
      setdata(user);

}
const fruit = ['apple', 'banana', 'orange', 'grapefruit',
'mango', 'strawberry', 'peach', 'apricot'];


useEffect(() => {
getuser();
  },[])
    
    return (
        <>
        
            <div className="leftSection">

                <div class="programsSideBar">
                    <div class="filterArea">
                        <button type="button" class="btn btn-primary btnSidebar sortBtn ">Filters</button>
                     
                    </div>
                </div>

                <div class="searchRank">
                   
                    <div class="searchProgram">
                        <div class="form-group">
                        <div className="form-control selectOptionSidebar">
                        <p>
    Type to filter the list:
    <input id="filter"
      name="filter"
      type="text"
    />
  </p>
  <ul>
  {fruit.map(f => <li key={f}>{f}</li>)}
  </ul>
    </div>
                           
                           
                        </div>
                    </div>
                </div>
                <div class="scrollview">
                 <div class="scrollview1">
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div> 
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div> <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div> <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div> <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div><div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Welding Training</label>
                </div>

                </div>
                </div>
              
                <div class="stateBox" >
                    <div class="form-group">
                        <select name="programs" id="" class="form-control selectOptionSidebar">
                            <option value="">By Cities</option>
                            
                        </select>
                    </div>
                    {
    data.map((s)=>{
    const{id,name}=s;

                     <div class="scrollview" key={id}>
                 <div class="scrollview1">
                    <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">{name}</label>
                </div>
                
                

                </div>
                </div>
                })

            }
                </div>
 


                <div class="stateBox">
                    <div class="form-group">
                        <select name="programs" id="" class="form-control selectOptionSidebar">
                            <option value="">By Rating</option>
                           



                        </select>
                    </div>
                    <div class="scrollview">
                 <div class="scrollview1">
                    <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div> 
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div> 
                
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div> 
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div> 
                

                 <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div> <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div> <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div> <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div> <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">1 Star</label>
                </div>
                </div>
                </div>
                </div>
                <div class="stateBox">
                    <div class="form-group">
                        <select name="programs" id="" class="form-control selectOptionSidebar">
                            <option value="">By Program Type</option>
                           
                        </select>
                        
                    </div>
                    <div class="scrollview">
                 <div class="scrollview1">
                    <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Online</label>
                </div>
               
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Online</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Online</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Online</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Online</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Online</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Online</label>
                </div>
                <div class="checkBox">
                    <input type="checkbox"  id="myCheck" />
                    <label for="myCheck">Online</label>
                </div>
                </div>
                </div>
                </div>
                <div class="sideBarFooter">
                    <button type="button" class="btn btn-primary btnBSidebar RefilterBtn">Reset
                        Filters</button>
                    <button type="button" class="btn btn-primary btnBSidebar saveBtn">Save</button>
                </div>

            </div>
        </>
    )
}
export default Leftpanel