import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,faList} from "@fortawesome/free-solid-svg-icons";
import men from './men.jpg'


export default function Header({onSearch}) {


  const handleInputSearch = (event) => {
    onSearch(event.target.value);
    
  }
  return (
    <>
      <div className="Header-body">
        <div className="Navbar">
          <div className="left-nav">
            <h3>kiranWorkSpace</h3>
            <input type="search" id="search"  onChange={handleInputSearch} />
          </div>
          <div className="right-nav">
            <h5><span><FontAwesomeIcon icon={faList} /></span>Categories</h5>
            <h4>
              <FontAwesomeIcon icon={faBell} />
            </h4>
            <div className='box'>
         
            <h5 ><img className='img1' src={men}/><span>Kiran G</span></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
