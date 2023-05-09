import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import '../index.css';
import { Country } from '../service/Country';

import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { CountryService } from '../service/CountryService';

export default function MyComponent(props) {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [code, setCode] = useState(Object.values(props)[0] || '');
  const [name, setName] = useState('');

  // TODO
  useEffect(() => {
    const getCountry = async () => {
      console.log('**A***', Object.values(props)[0]);
      const countryData = await Country.getCountry(Object.values(props)[0]);
      console.log('*****', countryData[0].name);
      setCode(countryData[0].code);
      setName(countryData[0].name);
    };
    getCountry();
  }, []);

  useEffect(() => {
    const countryService = new CountryService();
    const getCountries = async () => {
      const data = await countryService.getCountries();
      setCountries(data);
    };
    getCountries();
  }, []);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // useEffect(() => {
  //   setCode(Object.values(props)[0]);
  // }, [props]);

  const searchCountry = (event) => {
    setTimeout(() => {
      let results = countries.filter((country) => {
        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
      });
      setFilteredCountries(results);
    }, 250);
  };
  const handleYesClick = () => {
    const newObj = { code, name };
    props.handleDialogClose(newObj);
    props.setVisible(false);
  };

  const handleNoClick = () => {
    props.setVisible(false);
  };

  return (
    <div className="p-datatable">
      <p className="m-4" />
      <div className="flex flex-wrap gap-1">
        <div className="flex flex-wrap gap-1">
          <b>Naslov</b>
        </div>
        <div className="flex-grow-1"></div>
        <div className="flex flex-wrap gap-1">
          <Button
            label="Yes"
            icon="pi pi-check"
            onClick={handleYesClick}
            severity="success"
            outlined
          />
          <Button
            label="Cancel"
            icon="pi pi-times"
            onClick={handleNoClick}
            className="p-button-outlined p-button-secondary"
          />
        </div>
      </div>
      <p className="m-4" />
      <div className="p-datatable-thead">
        <div className="p-fluid grid">
          <div className="field col-12 md:col-4">
            <span className="p-float-label">
              <InputText
                id="code"
                value={props.codeValue} // dodajte ovde
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <label htmlFor="inputtext">Code</label>
            </span>
          </div>
          <div className="field col-12 md:col-4">
            <span className="p-float-label">
              <InputText
                id="name"
                value={name}
                onChange={(e) => setName(e.value)}
              />
              <label htmlFor="inputnumber">Name</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
