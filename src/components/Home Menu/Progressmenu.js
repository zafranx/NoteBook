import React from "react";

const Progressmenu = () => {
  return (
    <div className="mt-5">
      <div class="progress mx-2 mt-2">
        decentralised
        <div
          class="progress-bar"
          role="progressbar"
          aria-label="Basic example"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress mx-2 mt-2">
        Technology
        <div
          class="progress-bar"
          role="progressbar"
          aria-label="Basic example"
          style={{ width: "50%" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress mx-2 mt-2">
        News
        <div
          class="progress-bar"
          role="progressbar"
          aria-label="Basic example"
          style={{ width: "75%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <div class="progress mx-2 mt-2">
        Coins
        <div
          class="progress-bar"
          role="progressbar"
          aria-label="Basic example"
          style={{ width: "100%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Progressmenu;
