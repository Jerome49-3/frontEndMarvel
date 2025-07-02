import Input from "./Input";

const BoxFiltersNbrCard = ({ limit, setLimit, skip, setSkip }) => {
  return (
    <details>
      <summary>filtres</summary>
      <div className="boxFilters">
        <Input
          type="number"
          label="limiter à"
          inputId="limit"
          min="1"
          max="100"
          value={limit}
          setState={setLimit}
        />
        <Input
          type="number"
          label="passer"
          inputId="past"
          min="1"
          max="100"
          value={skip}
          setState={setSkip}
        />
      </div>
    </details>
  );
};

export default BoxFiltersNbrCard;
