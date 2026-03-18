import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { DATablePanel } from './DATablePanel';

addons.register('eds-da-table', () => {
  addons.add('eds-da-table/panel', {
    type: types.PANEL,
    title: '📋 DA Table',
    render: ({ active }) => active ? <DATablePanel /> : null,
  });
});
