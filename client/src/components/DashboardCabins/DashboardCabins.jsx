import { useEffect } from "react";
import { getCabins } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const DashboardCabins = () => {
  const dispatch = useDispatch();
  const cabins = useSelector((state) => state.cabins);
  useEffect(() => {
    dispatch(getCabins());
  }, [dispatch]);

  return (
    <div>
      <h1>Cabañas</h1>
      {cabins?.map((cabin) => {
        return (cabin.id, cabin.name, cabin.direction);
      })}
    </div>
  );
};
export default DashboardCabins;
