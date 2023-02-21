import React from 'react';

import './App.scss';
import { Input } from './shared/ui/Input';
import { Button } from './shared/ui/Button';

const App = () => (
  <div className="app">
    <Input
      label="Label"
      required
      value="Sergey"
    />
    <Input
      label="Label"
      required
    />

    <Input label="Label" />

    <Input
      label="Label"
      error
    />

    <Input
      label="Label"
      error
      value="Dima chiks"
    />

    <Input
      label="Label"
      className="input"
      value="Dima chiks"
    />

    <Button>Button</Button>
    <Button disabled>Button</Button>
    <Button color="text">Button</Button>
    <Button
      color="text"
      disabled
    >
      Button
    </Button>
  </div>
);

export default App;
