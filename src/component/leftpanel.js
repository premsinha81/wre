function Leftpanel() {
    return (
        <>
            <div className="leftSection">
               
                <h2>Search Ranking</h2>
                <select>
                    <option>Select Course</option>
                    <option>Select Course1</option>
                    <option>Select Course2</option>
                </select>
                <label><input type="checkbox" /> Only Remote Program</label>
                <label>Sort By</label>
                <hr />
                <div className="radio">
                    <label>
                        <input type="radio" value="option1" checked={true} />
                        Recommended
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option2" />
                        Top Rated
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option3" />
                        Budget
                    </label>
                </div>
                <hr />
                <label>Filter</label>
                <div className="radio">
                   <label>Budget</label>
                   <div class="profileRight">
                   <label for="customRange1" class="form-label">Example range</label>
                    <input type="range" class="form-range" id="customRange1" />
				</div>
                </div>
            </div>
        </>
    )
}
export default Leftpanel