import React from 'react';
 import locationStateObj from './locationStateObj';
const MapContext = React.createContext<locationStateObj|null>(null);
export default MapContext;
