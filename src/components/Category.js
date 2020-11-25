
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import _ from 'lodash'
import EachItem from './EachItem'
import { getData } from '../redux/actions/fetch-data';
import TabPanelJs from './TabPanel';

function Category(props) {

  const { data, errorMsg, loading } = props

  useEffect(() => {
    props.getData()
  }, [props])


  const showData = () => {
    if (!_.isEmpty(data)) {
      return data.map(product => {
        return <EachItem
          key={product.id} name={product.title}
          description={product.description} price={product.price}
          src={product.image} />
      })

    }

    if (loading) {
      return <p>Loading loading load ding ding ding loading</p>
    }

    if (errorMsg !== "") {
      return <p>Unable to fetch data</p>
    }

    return <p>Unable to get data sha check connection</p>
  }
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

        <TabPanel className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
          {showData()}
        </TabPanel>

        <TabPanel>
          <TabPanelJs data={data} category="men clothing" />
        </TabPanel>
        <TabPanel>
          <TabPanelJs data={data} category="jewelery" />
        </TabPanel>
        <TabPanel>
          <TabPanelJs data={data} category="electronics" />
        </TabPanel>
        <TabPanel>
          <TabPanelJs data={data} category="women clothing" />
        </TabPanel>


      </Tabs>

    </section>
  )
}

const mapStateToProps = (state) => ({
  data: state.products.data,
  errorMsg: state.products.errorMsg,
  loading: state.products.loading,
})

const mapDispatchToProps = {
  getData: getData
}


export default connect(mapStateToProps, mapDispatchToProps)(Category)
