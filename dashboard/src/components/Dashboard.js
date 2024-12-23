import React from "react";

import WatchList from "./WatchList";
import { Route, Routes } from "react-router-dom";
import Apps from "./App";
import Funds from "./Funding";
import Positions from "./Positions";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Summary from "./Summary";
import { GeneralContextProvider } from "./GeneralContext";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* <h1>dash</h1> */}
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
