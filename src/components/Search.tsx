import React, { useContext, useEffect, useState } from "react";
import iconArrow from "../assets/icons/icon-arrow.svg";
import axios from "../axiosConfig";
import { LeafletContext } from "../context/LeafletContext";

export const Search = () => {
  const context = useContext(LeafletContext);
  const [userInput, setUserInput] = useState("");
  const [addressData, setAddressData] = useState({
    ip: "",
    location: "",
    timezone: "",
    isp: "",
  });

  const HandleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const HandleOnSubmit = () => {
    const ipRegex = RegExp(
      "^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$"
    );
    const domainRegex = RegExp("^([a-zA-Z0-9]+(.[a-zA-Z0-9]+)+.*)$");
    let endpoint = "";

    if (domainRegex.test(userInput)) {
      endpoint = `&domain=${userInput}`;
      getData(endpoint);
    } else if (ipRegex.test(userInput)) {
      endpoint = `&ipAddress=${userInput}`;
      getData(endpoint);
    } else {
      getData("");
    }
  };
  const getData = async (endpoint: string) => {
    await axios
      .get(`v1?apiKey=${process.env.REACT_APP_LEAFLET}${endpoint}`)
      .then(({ data }) => {
        setAddressData({
          ip: data.ip,
          location: `${data.location.country}, ${data.location.region}`,
          timezone: data.location.timezone,
          isp: data.isp,
        });
        context.setPosition({
          lat: data.location.lat,
          lng: data.location.lng,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    HandleOnSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="search_section">
      <div className="search_bar">
        <form id="form" method="POST">
          <div className="input_group">
            <input
              type="text"
              className="search_input"
              name="userInput"
              autoComplete="off"
              value={userInput}
              onChange={HandleOnChange}
              placeholder="Search for any IP Address or Domain"
            />
            <button
              className="input_btn"
              type="button"
              id="submitBtn"
              onClick={HandleOnSubmit}
            >
              <img src={iconArrow} alt="icon-arrow" />
            </button>
          </div>
        </form>
      </div>
      <div className="search_results">
        <div className="result">
          <span>IP ADDRESS</span>
          <p>{addressData.ip}</p>
        </div>
        <div className="result">
          <span>LOCATION</span>
          <p>{addressData.location}</p>
        </div>
        <div className="result">
          <span>TIMEZONE</span>
          <p>UTC {addressData.timezone}</p>
        </div>
        <div className="result">
          <span>ISP</span>
          <p>{addressData.isp}</p>
        </div>
      </div>
    </div>
  );
};
