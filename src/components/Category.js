
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import EachItem from './EachItem'
import { getData } from '../redux/actions/fetch-data';


function Category(props) {
  // Destructing the props object
  const { products, getData } = props
  useEffect(() => {
    getData() //A props action dispatched so that it fetcched the data
  }, [getData])
  return (
    <section className="bg-white z-10 py-16 container mx-auto">
      <h2 className="text-4xl font-bold text-center border-black border-dotted">Popular Category</h2>
      <Tabs selectedTabClassName="active" >
        <TabList className="flex justify-between items-center md:w-9/12 lg:w-7/12 mx-6 md:mx-auto py-8 text-center overflow-x-scroll md:overflow-x-auto">
          <Tab className="cursor-pointer py-2 px-6 font-medium text-lg" >All</Tab>
          <Tab className="cursor-pointer py-2 px-6 font-medium text-lg" >Men</Tab>
          <Tab className="cursor-pointer py-2 px-6 font-medium text-lg" >Jewelery</Tab>
          <Tab className="cursor-pointer py-2 px-6 font-medium text-lg" >Electronics</Tab>
          <Tab className="cursor-pointer py-2 px-6 font-medium text-lg" >Women</Tab>
        </TabList>

        {/* Tab for all the categories */}
        <TabPanel className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
          {products.map((item) =>
            <EachItem key={item.id} productData={item} />)}
        </TabPanel>

        {/* Tab for men's categories */}
        <TabPanel className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
          {products.map((item) => {
            // Performing an if function to check for the category
            if (item.category === "men clothing") {
              return <EachItem key={item.id} productData={item} />
            }
            return ""
          }
          )}
        </TabPanel>

        {/* Tab for jewelery categories */}
        <TabPanel className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
          {products.map((item) => {
            if (item.category === "jewelery") {
              return <EachItem key={item.id} productData={item} />
            }
            return ""
          }
          )}
        </TabPanel>

        {/* Tab for electronics categories */}
        <TabPanel className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
          {products.map((item) => {
            if (item.category === "electronics") {
              return <EachItem key={item.id} productData={item} />
            }
            return ""
          }
          )}
        </TabPanel>

        {/* Tab for women's categories */}
        <TabPanel className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
          {products.map((item) => {
            if (item.category === "women clothing") {
              return <EachItem key={item.id} productData={item} />
            }
            return ""
          }
          )}
        </TabPanel>
      </Tabs>

    </section >
  )
}

const mapStateToProps = (state) => ({
  products: state.products.data,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category)
