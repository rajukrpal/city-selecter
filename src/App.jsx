



import React, { useState } from "react";

const App = () => {
  const [selectedCountry , setSelectedCountry] = useState("")
  const [selectedCity, setSelectedCity] = useState("");
  
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pakistan", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];
  
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(""); // Reset city when country changes
  };
  
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <>
      <div>App</div>
      <div style={{ display: "flex" }}>
        <div>
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.value}>{country.name}</option>
            ))}
          </select>
        </div>
        <div>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Select City</option>
            {selectedCountry &&
              countries.find((country) => country.value === selectedCountry)
                .cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default App;

