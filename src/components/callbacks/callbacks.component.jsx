import { useState, useEffect } from "react";

import Searchbox from '../../components/search-box/search-box.component';

import './callbacks.styles.css';

const Callbacks = () => {
  const [searchField, setSearchField] = useState('');
  const [callbacks, setCallbacks] = useState([]);
  const [filteredCallbacks, setFilteredCallbacks] = useState(callbacks);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setCallbacks(users));
  }, []);

  useEffect(() => {
    const newFilteredCallbacks = callbacks.filter((callback) => {
      return callback.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCallbacks(newFilteredCallbacks);
  }, [callbacks, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <h1>Callbacks</h1>

      <Searchbox
        onChangeHandler={onSearchChange}
        placeholder='search callbacks'
        className={'search-box'}
      />

      <div className="card-list">
        {filteredCallbacks.map((callback) => {
          return (
            <div key={callback.id}>
              <h1>{callback.name}</h1>
              <h1>{callback.phone}</h1>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Callbacks;