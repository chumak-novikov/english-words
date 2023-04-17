import React from 'react';

import './App.scss';
import { TabContext } from '@mui/lab';
import { Input } from './shared/ui/Input';
import { Button } from './shared/ui/Button';
import { TabPanel, Tabs } from './shared/ui/Tabs';
import { ToggleButtonGroup } from './shared/ui/ToggleButtonGroup';
import { WordsCard } from './shared/WordsCard';
import { Word } from './shared/WordsCard/WordsCard';

const tabs = [
  {
    label: 'tab1',
    value: '1',
  },
  {
    label: 'tab1',
    value: '2',
  },
  {
    label: 'tab1',
    value: '3',
  },
];

const buttons = [
  { value: '1', label: 'dark' },
  { value: '2', label: 'light' },
];

export const App = () => {
  const [tab, setTab] = React.useState('1');
  const [button, setButton] = React.useState('1');

  const words: Word[] = [
    {
      ru: 'яблоко',
      en: 'apple',
    },
    {
      ru: 'банан',
      en: 'banana',
    },
    {
      ru: 'ананас',
      en: 'pineapple',
    },
    {
      ru: 'морковка',
      en: 'carrot',
    },
  ];

  return (
    <div className="app">
      <WordsCard words={words} />

      <WordsCard
        clickable
        words={words}
        initialLang="ru"
      />

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

      <TabContext value={tab}>
        <Tabs
          tabs={tabs}
          onChange={setTab}
        />

        <TabPanel value="1">Tab 1 value</TabPanel>
        <TabPanel value="2">Tab 2 value</TabPanel>
        <TabPanel value="3">Tab 3 value</TabPanel>
      </TabContext>

      <TabContext value={tab}>
        <div style={{ display: 'flex' }}>
          <div>
            <TabPanel value="1">Tab 1 value</TabPanel>
            <TabPanel value="2">Tab 2 value</TabPanel>
            <TabPanel value="3">Tab 3 value</TabPanel>
          </div>
          <div>
            <Tabs
              orientation="vertical"
              tabs={tabs}
              onChange={setTab}
            />
          </div>
        </div>
      </TabContext>

      <ToggleButtonGroup
        items={buttons}
        value={button}
        onChange={setButton}
      />
    </div>
  );
};
