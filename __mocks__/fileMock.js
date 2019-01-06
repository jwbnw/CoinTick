global.fetch = require('jest-fetch-mock')

jest.mock('./assets/btc.png', ()=>'btc.png');
jest.mock('./assets/ltc.png', ()=>'ltc.png');
jest.mock('./assets/etc.png', ()=>'etc.png');