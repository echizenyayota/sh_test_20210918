// import { Heading, Page } from "@shopify/polaris";

// const Index = () => (
//   <Page>
//     <Heading>Shopify app with Node and React 🎉</Heading>
//   </Page>
// );

// export default Index;


import {AppProvider, Button} from '@shopify/polaris';
import React from 'react';
import ReactDOM from 'react-dom';

const app = (
    <Button onClick={() => alert('Button clicked!')}>Example button</Button>
);

ReactDOM.render(app, domContainerNode);

export default app;

