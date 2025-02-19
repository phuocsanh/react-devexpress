import React from "react";
import "./view-name.scss";

export const ViewName = () => (
  <React.Fragment>
    <p className="text-red-500 text-7xl">View Name</p>
    <div className={"content-block"}>
      <div className={"dx-card responsive-paddings text-amber-400"}>
        Put your content here
      </div>
    </div>
  </React.Fragment>
);

export default ViewName;
