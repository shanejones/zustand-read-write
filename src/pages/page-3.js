import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {useStore} from "../stores/store"



const SecondPage = () => { 
  const {item1, updateItem1, item2, updateItem2} = useStore()
  return (
  <Layout headerColor="darkgreen">
    <SEO title="Page two" />
    <h1>Zustand Test Page 2</h1>

    <ul>
      <li>Item 1 - {item1}</li>
      <li>Item 2 - {item2}</li>
    </ul>

    <div>
    <button type="button" onClick={() => updateItem1('Page 3 Changed Item 1')}>Change Item 1</button>
    <button type="button" onClick={() => updateItem2('Page 3 Changed Item 2')}>Change Item  2</button>
    </div>

    <Link to="/">Go to page 1</Link><br/>
    <Link to="/page-2">Go to page 2</Link><br/>
    <Link to="/page-3">Go to page 3</Link>
  </Layout>
)}

export default SecondPage
