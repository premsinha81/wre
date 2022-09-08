function Slider() {
    return (
        <div className="slider">
            <div className="container posRelative">
           <div className="searchPanel">
            <h2>SEARCH PROGRAMS</h2>
            <hr />
            <form>
                <select className="form-control">
                    <option>Select Program</option>
                    <option>First Phase</option>
                </select>
                <select className="form-control">
                    <option>Select Program</option>
                    <option>First Phase</option>
                </select>
                <select className="form-control">
                    <option>Select Program</option>
                    <option>First Phase</option>
                </select>
            </form>
            <button className="btn btn-primary">Search Now</button>
           </div>
           </div>
        </div>
    )
}

export default Slider;