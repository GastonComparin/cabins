import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getCabins } from "../../redux/actions";
import { useEffect } from "react";
const CardsContainer = () => {
  const dispatch = useDispatch();
  const cabins = useSelector((state) => state.cabins);

  useEffect(() => {
    dispatch(getCabins());
  }, [dispatch]);
  return (
    <div className="d-flex gap-3 justify-content-around flex-wrap m-5 p-5">
      {cabins.map((cabin) => {
        return (
          <Card
            id={cabin.id}
            name={cabin.name}
            direction={cabin.direction}
            price={cabin.price}
            key={cabin.id}
            image={cabin.image}
          />
        );
      })}
    </div>
  );
};
export default CardsContainer;
