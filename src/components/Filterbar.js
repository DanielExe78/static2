import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Filterbar = ({
  isFilterOpen,
  handleRemoveItem,
  filterContainer,
  handleClear,
  myData,
}) => {
  const removeTag = (id) => {
    handleRemoveItem(id);
  };

  if (isFilterOpen)
    return (
      <article
        className={`filter-container ${
          isFilterOpen ? "filter-active" : "filter-unactive "
        }`}
      >
        <div className='text-btn'>
          <ul className='filter-list'>
            {filterContainer.map((item) => {
              const { id, value } = item;

              return (
                <li className='tag-filter' key={id}>
                  <p className='filtered'>{value}</p>
                  <button className='close-btn' onClick={() => removeTag(id)}>
                    <AiOutlineClose />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <button className='clear' onClick={handleClear}>
          Clear
        </button>
      </article>
    );
};

export default Filterbar;
