import { useState, useEffect } from "react";

import Searchbox from '../../components/search-box/search-box.component';
import Card from "../card/card.component";

import './calls.styles.css';

const Calls = () => {
  const [searchField, setSearchField] = useState('');
  const [calls, setCalls] = useState([]);
  const [filteredCalls, setFilteredCalls] = useState(calls);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setCalls(users));
  }, []);

  useEffect(() => {
    const newFilteredCalls = calls.filter((call) => {
      return call.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCalls(newFilteredCalls);
  }, [calls, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="calls">
      <h1>Calls</h1>

      <Searchbox
        onChangeHandler={onSearchChange}
        placeholder='search calls'
        className={'search-box'}
      />

      <div className="card-list">
        {filteredCalls.map((call) => {
          return (
            <div key={call.id}>
              <h1>{call.name}</h1>
            </div>
          )
        })}
      </div>

      <Card calls={filteredCalls} />
    </div>
  );
};

export default Calls;