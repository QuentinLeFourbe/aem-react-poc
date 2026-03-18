const path = require('path');

module.exports = {
  managerEntries: (entry = []) => [
    ...entry,
    path.resolve(__dirname, './manager.tsx'),
  ],
};
