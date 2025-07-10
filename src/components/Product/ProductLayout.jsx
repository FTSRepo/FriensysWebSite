import { Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <div>
      

      {/* Outlet for child routes */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProductLayout;
