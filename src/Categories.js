import React from 'react';

const Categories = ({categories,filterItems}) => {
  return (
    <div className="btn-container">
      {/* <button className="filter-btn" onClick={()=>filterItems('all')}>
        all
      </button>
      <button className="filter-btn" onClick={()=>filterItems('breakfast')}>
        breakfast
      </button> */}

      {
        categories.map((category,index)=>{
          return (
            <button onClick={()=>filterItems(category)} className='filter-btn' key={index}>{category}</button>
          )
        })
      }
    </div>
  );
};

export default Categories;
