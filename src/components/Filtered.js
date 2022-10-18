import React, { useEffect, useState } from "react";
import Filterbar from "./Filterbar";
import myData from "../data.json";

const Filtered = ({ handleClick, filterContainer }) => {
  const [filterVal, setFilterVal] = useState([]);

  return (
    <>
      {myData.map((items) => {
        const {
          id,
          languages,
          role,
          tools,
          level,
          logo,
          company,
          recently,
          featured,
          position,
          contract,
          location,
          postedAt,
        } = items;

        return (
          <>
            {filterVal.map((item) => {
              if (item.value === role) {
                return (
                  <div>
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
                  </div>
                );
              }
            })}
          </>
        );
      })}
    </>
  );
};

export default Filtered;
