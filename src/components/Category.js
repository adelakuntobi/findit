import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import EachItem from './EachItem'

function Category() {
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
          <EachItem src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"/>
          <EachItem src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"/>
        </TabPanel>

        <TabPanel className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
          <EachItem src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" />
        </TabPanel>

        <TabPanel className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
          <EachItem src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" />
        </TabPanel>

        <TabPanel className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
          <EachItem src= "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"/>
          <EachItem src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" />
        </TabPanel>

        <TabPanel className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
        <EachItem src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" />
          <EachItem src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" />
        </TabPanel>
        
      </Tabs>

    </section>
  )
}

export default Category
