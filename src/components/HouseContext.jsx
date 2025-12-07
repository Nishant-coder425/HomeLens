import React, {useState,useEffect,createContext, Children} from 'react';

import {housesData} from '../data'

export const HouseContext=createContext();

const HouseContextProvider = ({children}) => {
  const [houses,setHouses]=useState(housesData)
  const [country,setCountry]=useState('Location (any)')
  const [countries,setCountries]=useState([])
  const [property,setProperty]=useState('Property type (any)')
  const [properties,setProperties]=useState([])
  const [price,setPrice]=useState('Price range (any)')
  const [loading,setLoading]=useState(false)

  //returing all countries
  useEffect(()=>{
    const allCountries=houses.map((house)=>{
      return house.country
    })
    //removing dublicate
    const uniqueCountries=['Location (any)', ... new Set(allCountries)]
    //setcountries state
    setCountries(uniqueCountries)
  },[])

  //returning all properties
  useEffect(()=>{
    const allProperties=houses.map((house)=>{
      return house.type
    })
    //removing dublicate
    const uniqueProperties=['Location (any)', ... new Set(allProperties)]
    //setcountries state
    setProperties(uniqueProperties)
  },[])

  const handleClick=()=>{
    //set loading
    setLoading(true)

    //check the finction that checks if the string includes (any)
    const isDefault=(str)=>{
      return str.split(' ').includes('(any)');
    }
    
    //get first vlaue of price and parse it to number
    const minPrice=parseInt(price.split(' ')[0])
    //get second value of price and parse it to number
    const maxPrice=parseInt(price.split(' ')[2])
    
    const newHouses=housesData.filter((house)=>{
      const housePrice=parseInt(house.price)

      //if all the values are selected
      if(house.country===country &&
        house.type===property &&
        housePrice>=minPrice &&
        housePrice<=maxPrice
      ){
        return house;
      }

      //if all the value are default
      if(isDefault(country) && isDefault(property) && isDefault(price)){
        return house
      }

      //if country is not default
      if(!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country === country
      }

      //if proptry is not default
      if(!isDefault(property) && isDefault(country) && isDefault(price)){
        return house.type == property
      }

      //if price is not default
      if(!isDefault(price) && isDefault(country) && isDefault(property)){
        if(housePrice >= minPrice && housePrice<=maxPrice){
          return house
        }
      }

      //if country and prpoperty is not default
      if(!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country === country && house.type===property
      }

      //if country and price id not default
      if(!isDefault(country) && isDefault(property) && !isDefault(price)){
        if(housePrice>=minPrice && housePrice<=maxPrice){
          return house.country===country
        }
      }

      //property and price is not default
      if(isDefault(country) && !isDefault(property) && !isDefault(price)){
        if(housePrice>=minPrice && housePrice<=maxPrice){
          return house.type===property
        }
      }
    })
    
    setTimeout(()=>{
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false)
    },1000)

  }

  return( 
    <HouseContext.Provider value={{country,setCountry,countries,property,setProperty,price,setPrice,houses,loading,properties,handleClick}}>
      {Children.toArray(children)}
    </HouseContext.Provider>
  )
};

export default HouseContextProvider;
