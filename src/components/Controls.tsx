import { useEffect, useState } from "react";
import styled from "styled-components";
import { CustomSelect } from "./CustomSelect";
import { Search } from "./Search";

const options = [
  {
    value: "Africa",
    label: "Africa",
  },
  {
    value: "America",
    label: "America",
  },
  {
    value: "Asia",
    label: "Asia",
  },
  {
    value: "Europe",
    label: "Europe",
  },
  {
    value: "Oceania",
    label: "Oceania",
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

interface IOption {
  value: string;
  label: string;
}
interface IProps {
  onSearch: (search: string, region: string) => void;
}

export const Controls = ({ onSearch }: IProps) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<IOption | null>(null);

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect<IOption>
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={(value) => setRegion(value)}
      />
    </Wrapper>
  );
};
