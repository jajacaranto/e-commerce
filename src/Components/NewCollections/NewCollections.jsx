import React, { useState } from 'react';
import './NewCollections.css';
import new_collections from '../Images/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  
  const [collections] = useState(new_collections);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {collections.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default NewCollections;
