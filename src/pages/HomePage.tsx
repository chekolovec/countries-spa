import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IData } from "../App";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { List } from "../components/List";

interface IProps {
  countries: IData[];
}

export const HomePage = ({ countries }: IProps) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();

  const handleSearch = (search: string, region: string) => {
    setFilteredCountries(
      [...countries]
        .filter((country) => country.region.includes(region))
        .filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        )
    );
  };

  useEffect(() => {
    handleSearch("", "");
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((country) => (
          <Card
            key={country.name}
            name={country.name}
            img={country.flags.png}
            onClick={() => navigate(`/country/${country.name}`)}
            info={[
              {
                title: "Population",
                description: country.population,
              },
              {
                title: "Region",
                description: country.region,
              },
              {
                title: "Capital",
                description: country.capital,
              },
            ]}
          />
        ))}
      </List>
    </>
  );
};
