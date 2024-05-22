import React from 'react'
import Layout from '../../components/layout'
import CartView from './cartView/cartView'
import CartTabs from './cartTabs/cartTabs'
import "./index.css"
import EstimateSummary from './estimateSummary/estimateSummary'

export default function CartPage() {
  return (
    <Layout>
    <div className="cartContainer">
      {/* <CatalogsHeader />
      {sectionTitles.map((title, index) => (
        <CatalogSlider key={index} title={title} />
      ))} */}
      <CartView />
      <EstimateSummary />
    </div>
  </Layout>
  )
}
