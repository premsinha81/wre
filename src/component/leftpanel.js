function Leftpanel() {
    return (
        <>
            <div className="leftSection">
                <h2>Search Ranking</h2>
                <imput type="checkbox" /> <label>Only Remote Program</label>
                <hr />
                <label>Sort By</label>
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