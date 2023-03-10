import React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function List() { 
    return (
        <div>
          <h1>My Hacker Stories</h1>
    
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" />
    
          <hr />
    
          {list.map(function(item) {
            return (
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}  </a>&nbsp;
                </span>
                <span>{item.author}  &nbsp;</span>
                <span>{item.num_comments}  &nbsp;</span>
                <span>{item.points}</span>
              </div>
            );
          })}
        </div>
      );
 }

export default List;