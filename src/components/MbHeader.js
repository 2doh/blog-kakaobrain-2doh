import React from "react";

const MbHeader = () => {
  return (
    <>
      <div className="mb-header-bg">
        <div className="mb-header-menu">
          <div className="inner">
            <ul className="mb-nav">
              <li>
                <a href="#">소식</a>
              </li>
              <li>
                <a href="#">팀 & 크루</a>
              </li>
              <li>
                <a href="#">영입</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
    // html 역할을 하면 안되는, 묶어주는 역할만 하는 태그(빈 태그)
  );
};

export default MbHeader;
