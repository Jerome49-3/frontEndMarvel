import Input from "./Input";

const BoxFiltersNbrCard = ({ limit, setLimit, skip, setSkip }) => {
  return (
    <details>
      <summary>filtres</summary>
      <div className="boxFilters">
        <Input
          type="number"
          labelTxt="limiter à"
          inputId="limit"
          min="1"
          max="100"
          value={limit}
          setState={setLimit}
          classLabel="limitLabel"
        />
        <Input
          type="number"
          labelTxt="passer"
          inputId="pass"
          min="1"
          max="100"
          value={skip}
          setState={setSkip}
          classLabel="passLabel"
        />
      </div>
    </details>
  );
};

export default BoxFiltersNbrCard;
