import React, { useEffect, useState } from "react";
import myData from "../data.json";
import Filterbar from "./Filterbar";
import Filtered from "./Filtered";
import { v4 as uuidv4 } from "uuid";

const FILTER_TYPES = {
  level: "LEVEL",
  role: "ROLE",
  tools: "TOOLS",
  language: "LANGUAGE",
};

const Hero = () => {
  const [isFilterOpen, setFilter] = useState(false);
  const [filterContainer, setFilterContainer] = useState([]);

  const handleClick = (e) => {
    setFilter(true);

    // Gets text value from text content
    const textValue = e.target.textContent;
    // gets filter type from target name
    const filterType = FILTER_TYPES[e.target.name];

    // Checks if there's already an item with same type & value
    const itemAlreadyExists = filterContainer.some(
      (item) => item.type === filterType && item.value === textValue
    );

    // if item already exists, exit the function
    if (itemAlreadyExists) return;

    // If item doesn't exist append to the filterContainer list
    setFilterContainer((prevValue) => {
      return [
        ...prevValue,
        {
          id: uuidv4(),
          type: filterType,
          value: textValue,
        },
      ];
    });
  };

  const handleRemoveItem = (id) => {
    // To remove an item filter item id
    const filteredItems = filterContainer.filter(
      (filterItem) => filterItem.id !== id
    );

    setFilterContainer(filteredItems);
  };

  const handleClear = () => {
    // To clear set filter to false and filterContainer to empty array
    setFilter(false);
    setFilterContainer([]);
  };

  return (
    <section className='section-center '>
      <Filterbar
        isFilterOpen={isFilterOpen}
        myData={myData}
        filterContainer={filterContainer}
        handleClear={handleClear}
        handleRemoveItem={handleRemoveItem}
      />

      {myData.map((item, index) => {
        const {
          id,
          company,
          logo,
          position,
          role,
          level,
          location,
          new: recently,
          featured,
          languages,
          tools,
          contract,
          postedAt,
        } = item;

        if (filterContainer.length >= 1) {
          return (
            <>
              {filterContainer.map((item, index) => {
                if (index === id) return;

                if (
                  tools.includes(item.value) ||
                  languages.includes(item.value) ||
                  level.includes(item.value) ||
                  role.includes(item.value)
                ) {
                  return (
                    <div
                      className={`single-card row ${
                        company === "Photosnap" || company === "Manage"
                          ? "side"
                          : null
                      }`}
                      key={index}
                    >
                      <div className='info-container'>
                        <div className='img-container'>
                          <img src={logo} alt={company} />
                        </div>

                        <article className='general-info '>
                          <div className='company'>
                            <p>{company}</p>
                            {recently && <span className='new'>NEW!</span>}
                            {featured && (
                              <span className='featured'>FEATURED</span>
                            )}
                          </div>

                          <h3>{position}</h3>

                          <div className='sub-info'>
                            <span>{postedAt}</span>
                            <span className='bullet'>{contract}</span>
                            <span className='bullet'>{location}</span>
                          </div>
                        </article>
                      </div>

                      <div className='tags'>
                        <ul>
                          <li className='tag'>
                            <button
                              type='button'
                              className='btn'
                              onClick={handleClick}
                              name='role'
                            >
                              {role}
                            </button>
                          </li>
                          <li className='tag'>
                            <button
                              type='button'
                              className='btn'
                              onClick={handleClick}
                              name='level'
                            >
                              {level}
                            </button>
                          </li>

                          {tools.map((tool, index) => {
                            return (
                              <li className='tag' key={index}>
                                <button
                                  type='button'
                                  className='btn'
                                  name='tool'
                                  onClick={handleClick}
                                >
                                  {tool}
                                </button>
                              </li>
                            );
                          })}

                          {languages.map((tool, index) => {
                            return (
                              <li className='tag' key={index}>
                                <button
                                  type='button'
                                  className='btn'
                                  name='language'
                                  onClick={handleClick}
                                >
                                  {tool}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                }
              })}
            </>
          );
        }

        if (filterContainer.length === 0)
          return (
            <div
              className={`single-card row ${
                company === "Photosnap" || company === "Manage" ? "side" : null
              }`}
              key={id}
            >
              <div className='info-container'>
                <div className='img-container'>
                  <img src={logo} alt={company} />
                </div>

                <article className='general-info '>
                  <div className='company'>
                    <p>{company}</p>
                    {recently && <span className='new'>NEW!</span>}
                    {featured && <span className='featured'>FEATURED</span>}
                  </div>

                  <h3>{position}</h3>

                  <div className='sub-info'>
                    <span>{postedAt}</span>
                    <span className='bullet'>{contract}</span>
                    <span className='bullet'>{location}</span>
                  </div>
                </article>
              </div>

              <div className='tags'>
                <ul>
                  <li className='tag'>
                    <button
                      type='button'
                      className='btn'
                      onClick={handleClick}
                      name='role'
                    >
                      {role}
                    </button>
                  </li>
                  <li className='tag'>
                    <button
                      type='button'
                      className='btn'
                      onClick={handleClick}
                      name='level'
                    >
                      {level}
                    </button>
                  </li>

                  {tools.map((tool, index) => {
                    return (
                      <li className='tag' key={index}>
                        <button
                          type='button'
                          className='btn'
                          name='tool'
                          onClick={handleClick}
                        >
                          {tool}
                        </button>
                      </li>
                    );
                  })}

                  {languages.map((tool, index) => {
                    return (
                      <li className='tag' key={index}>
                        <button
                          type='button'
                          className='btn'
                          name='language'
                          onClick={handleClick}
                        >
                          {tool}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
      })}
    </section>
  );
};

export default Hero;
