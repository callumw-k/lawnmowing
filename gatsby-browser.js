import React from 'react';
import 'normalize.css';
import Layout from "./src/components/Layout"



export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
