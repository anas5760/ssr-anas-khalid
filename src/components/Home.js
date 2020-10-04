import React, { useState } from 'react';

import { api } from '../api';
import { useServerData } from '../state/serverDataContext';
import FilterComponent from './FilterComponent';
import './rocket-desc.scss';

const Home = () => {
  const serverTodos = useServerData(data => {
    return data.todos || [];
  });
  const [todos, setTodos] = useState(serverTodos);

  const updateList = filters => {
    api.todos
      .filter(filters.launchSuccess, filters.landSuccess, filters.launchYear)
      .then(data => {
        setTodos(data);
      });
  };
  return (
    todos && (
      <div className="base">
        <FilterComponent updateList={filter => updateList(filter)} />
        <div className="container">
          {todos.map((rocket, i) => {
            return (
              <div className="rocket">
                <div className="spaceImg">
                  <img
                    src={rocket.links.mission_patch}
                    alt="Loader"
                    width="60px"
                    className="rocktImg"
                  />
                </div>
                <div className="name value1">{rocket.mission_name}</div>
                <div className="name">
                  Launch year:{' '}
                  <span className="value">{rocket.launch_year}</span>
                </div>
                <div className="name">
                  Launch :{' '}
                  <span className="value">
                    {rocket.launch_success ? 'Success' : 'Failure'}
                  </span>
                </div>
                <div className="name">
                  Landing:{' '}
                  <span className="value">
                    {rocket.rocket.first_stage.cores[0].land_success
                      ? 'Success'
                      : 'Failure'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

Home.fetchData = () => {
  return api.todos.all().then(todos => {
    return {
      todos
    };
  });
};

export default Home;
