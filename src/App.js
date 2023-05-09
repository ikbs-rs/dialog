import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import MyComponent from './demo/MyComponent';
import { InputText } from 'primereact/inputtext';

export default function FooterDemo() {
  const [visible, setVisible] = useState(false);
  const [showMyComponent, setShowMyComponent] = useState(true);
  const [inputName, setInputName] = useState('');
  const [inputTextValue, setInputTextValue] = useState('');

  const handleDialogClose = (newObj) => {
    const localObj = { newObj };
    setInputName(localObj.newObj.name);
    setInputTextValue(localObj.newObj.code);
  };

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <span className="p-float-label">
        <InputText
          id="inputtext"
          value={inputTextValue}
          onChange={(e) => setInputTextValue(e.target.value)}
        />
        <label htmlFor="inputtext">InputText</label>
      </span>
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: '70%' }}
        onHide={() => {
          setVisible(false);
          setShowMyComponent(false);
        }}
      >
        {showMyComponent && (
          <MyComponent
            parameter={inputTextValue}
            handleDialogClose={handleDialogClose}
            setVisible={setVisible}
          />
        )}
        <div className="p-dialog-header-icons" style={{ display: 'none' }}>
          <button className="p-dialog-header-close p-link">
            <span className="p-dialog-header-close-icon pi pi-times"></span>
          </button>
        </div>
      </Dialog>
    </div>
  );
}
