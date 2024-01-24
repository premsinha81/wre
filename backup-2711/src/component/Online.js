import {React,useState,useEffect} from 'react'
import { slice } from 'lodash'

function Online() {
  const [post, setPost] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(5)
  const initialOnline = slice(post, 0, index)
  const getData = () => {
    fetch('https://admin.allnuud.com/api/get/onlinecourse')
      .then((res) => res.json())
      .then((json) => setPost(json))
      .catch((e) => console.log(e))
  }
  const loadMore = () => {
    setIndex(index + 5)
    console.log(index)
    if (index >= post.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

    
  return (

        <div class="row ">
            
   {initialOnline.map((item) => {

    return(
            <div class="col-md-4 col-lg-4  ">

       

 
            <div class="programBox  "  key={item.id}>
           
                        <div class="programTitle">
                           <h4>{item.Course_title}</h4>
                        </div>
                        <div class="programContent">
                           <div class="programsContentInfo">
                              <i class="fa fa-certificate"></i>
                              <h5>{item.Course_name}</h5>
                           </div>
                           <div class="programsContentInfo">
                              <i class="fa fa-clock-o"></i>
                              <h5>{item.Duration}</h5>
                           </div>
                           <div class="programsContentInfo">
                              <i class="fa fa-location-arrow"></i>
                              <h5>{item.Course_type}</h5>
                           </div>
                        </div>
                     </div>
                  
   
                     </div>
    )

    })

}
{isCompleted ? (
    <div class="loadBtn">
          <button
            onClick={loadMore}
            type="button"
            
          >
            That's It
          </button>
          </div>
        ) : (
          <div class="loadBtn">
          <button onClick={loadMore} type="button" >
            Load More +
          </button>
          </div>
        )}
</div>
 
  )
}

export default Online