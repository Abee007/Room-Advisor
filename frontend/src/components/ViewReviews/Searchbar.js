import './Searchbar.css'
import { Search } from 'react-bootstrap-icons';

const SearchBar = () => (
    <form action="/" method="get">
        
        <label htmlFor="header-search">
            <span className="visually-hidden">Search for a room</span>
        </label>

        <input className='input'
            type="text"
            id="header-search"
            placeholder="Search for a room"
            name="s" 
        />
        {/* <button className="btn--primary submit" type="submit"> <Search style={{ height: '30px', paddingBottom: '5px', marginRight: '2px', marginLeft: '2px'  }}/> </button> */}
    </form>
);

export default SearchBar;