import React from 'react';
import styles from './App.module.css';

// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';

import {Cards,Chart,CountryPicker} from './components';
import {fetchData} from './api';
import coronaImg from './images/image.png';

class App extends React.Component {
  state={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const fetchedData=await fetchData();
    //console.log(data);

    this.setState({data:fetchedData});
  }

  handleCountryChange=async(country)=>{
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData,country:country});

    //console.log(fetchedData);
   // console.log(country);
  }

  render(){
    const {data,country}=this.state; //destructuring

  return (
    <>
    <div className={styles.container}>
      <img className={styles.image} src={coronaImg} alt="COVID-19"/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
    </>
  )
  }
}

export default App;
