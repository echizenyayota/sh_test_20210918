import {AppProvider, Button} from '@shopify/polaris';
import React from 'react';
import ReactDOM from 'react-dom';

const app = (
    <Button onClick={() => alert('Button clicked!')}>Example button</Button>
);

ReactDOM.render(app, domContainerNode);

export default app;

