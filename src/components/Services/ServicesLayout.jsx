import React from "react";
import { Outlet } from "react-router-dom";

function ServicesLayout() {
  return (
    <div>
      {/* Outlet for child routes */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ServicesLayout;
