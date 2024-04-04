import React from 'react'

const needhelp = () => {
  return (
    <div>
        <>
        <div className='container'>
 
  <h4 className="text-secondary mt-4 mb-4">Need Help</h4>
  <div className="accordion" id="regularAccordionRobots">
    <div className="accordion-item">
      <h2 id="regularHeadingFirst" className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#regularCollapseFirst"
          aria-expanded="true"
          aria-controls="regularCollapseFirst"
        >
         Lorem Ipsum is simply dummy text of the printing and typesetting industry
         <i class="	fa fa-caret-down needhelp"></i>
        </button>
      
      </h2>
      <div
        id="regularCollapseFirst"
        className="accordion-collapse collapse show"
        aria-labelledby="regularHeadingFirst"
        data-bs-parent="#regularAccordionRobots"
      >
        <div className="accordion-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of 
         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.
         </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="regularHeadingSecond">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#regularCollapseSecond"
          aria-expanded="false"
          aria-controls="regularCollapseSecond"
        >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <i class="	fa fa-caret-down needhelp"></i>
       
        </button>
      </h2>
      <div
        id="regularCollapseSecond"
        className="accordion-collapse collapse"
        aria-labelledby="regularHeadingSecond"
        data-bs-parent="#regularAccordionRobots"
      >
        <div className="accordion-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="regularHeadingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#regularCollapseThree"
          aria-expanded="false"
          aria-controls="regularCollapseThree"
        >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <i class="	fa fa-caret-down needhelp"></i>
       
        </button>
      </h2>
      <div
        id="regularCollapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="regularHeadingThree"
        data-bs-parent="#regularAccordionRobots"
      >
        <div className="accordion-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
      </div>
    </div>
  </div>
  </div>
  <hr />
</>

    </div>
  )
}

export default needhelp