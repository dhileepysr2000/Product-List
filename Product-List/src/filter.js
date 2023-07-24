
import './filter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

export default function Filtercom({ onBrandFilter, onCategoryFilter }) {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleBrandChange = (event) => {
        const brand = event.target.value;
        const isChecked = event.target.checked;
      
        if (isChecked) {
          setSelectedBrands((prevBrands) => [...prevBrands, brand]);
        } else {
          setSelectedBrands((prevBrands) =>
            prevBrands.filter((prevBrand) => prevBrand !== brand)
          );
        }
        onBrandFilter(selectedBrands)
        console.log(selectedBrands)
      };
      
      const handleCategoryChange = (event) => {
        const category = event.target.value;
        const isChecked = event.target.checked;
      
        if (isChecked) {
          setSelectedCategories((prevCategories) => [...prevCategories, category]);
        } else {
          setSelectedCategories((prevCategories) =>
            prevCategories.filter((prevCategory) => prevCategory !== category)
          );
        }
        onCategoryFilter(selectedCategories)
      };
      
      useEffect(() => {
        onBrandFilter(selectedBrands);
      }, [selectedBrands]);
      
      useEffect(() => {
        onCategoryFilter(selectedCategories);
      }, [selectedCategories]);
      
    

    return (
        <>
            <div className="filter-body">
                <div className="left">
                    <div className="head">
                        <h3>Filter</h3>
                        <h3><FontAwesomeIcon icon={faSliders} /></h3>
                    </div>
                    <hr></hr>
                    <div className="left-body">
                        <h3>Brand</h3>
                        <input type="checkbox" value="Brand A" id="brand1" onChange={handleBrandChange} />
                        <label>Brand A</label><br></br>
                        <input type="checkbox" value="Brand B" id="brand2" onChange={handleBrandChange}/>
                        <label>Brand B</label><br></br>
                        <input type="checkbox" value="Brand C" id="brand3" onChange={handleBrandChange} />
                        <label>Brand C</label><br></br>
                        <input type="checkbox" value="Brand D" id="brand4" onChange={handleBrandChange} />
                        <label>Brand D</label><br></br>
                        {/* <input type="checkbox" value="Brand E" id="brand5" />
                        <label>Empty</label> */}

                    </div>
                    <hr></hr>
                    <div className="category">
                        <h3>category</h3>
                        <input type="checkbox" value="Category A" onChange={handleCategoryChange} />
                        <label>Number A</label><br></br>
                        <input type="checkbox" value="Category B" onChange={handleCategoryChange} />
                        <label>Brand2</label><br></br>
                        <input type="checkbox" value="Category C" onChange={handleCategoryChange}/>
                        <label>Brandc</label><br></br>
                        <input type="checkbox" value="Category D"  onChange={handleCategoryChange}/>
                        <label>Miracle</label><br></br>
                        <input type="checkbox"  />
                        <label>Empty</label>

                    </div>
                    <hr></hr>
                    <div className="price">
                        <h3>price</h3>
                        <input type="checkbox"/>
                        <label>$100</label><br></br>
                        <input type="checkbox"/>
                        <label>$100-$199</label><br></br>
                        <input type="checkbox"/>
                        <label>$200-$599</label><br></br>
                        <input type="checkbox"/>
                        <label>$600-$999</label><br></br>
                        <input type="checkbox"/>
                        <label>$1000</label>
                    </div>
                </div>

            </div>
        </>
    )
}