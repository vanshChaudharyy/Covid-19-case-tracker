import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {

  const [data, setData] = useState([]);
  const [selectedState, setSelectedState] = useState();

  const handleChange = (value) => {
    setSelectedState(value)
  }

  const getData = async () => {
    const response = await fetch('https://data.covid19india.org/data.json');
    const allData = await response.json();
    setData(allData.statewise);
  }

  useEffect(() =>{
      getData();
    }, []
  );

  return (
    <div className='container mt-4'>
      <div className='selectstate'>
      <h2><marquee>Live COVID19-India's data tracker</marquee></h2><br />
        <form method='post'>
          <h3>Select state</h3>
          <select className='form-control-lg pt-2 pb-2' onChange={(e) => handleChange(e.target.value)}>
            {data.map((curState) => (
              <option key={curState.state} value={curState.state}>{curState.state}</option>
            ))}
          </select>
        </form> 
      </div>   
      {
        data.map((record) => {
          return (
            <>
            {record.state === selectedState ? 
            <div className='data mt-5'>
              <div className='row'>           
                <div className='col-lg-4'>
                  <div className='card'>
                    <h6 className='text-muted'>Selected State</h6>
                    <h5><b>{record.state}</b></h5>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card'>
                    <h6 className='text-muted'>Total active cases</h6>
                    <h5><b>{record.active}</b></h5>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card'>
                    <h6 className='text-muted'>Total confirmed cases</h6>
                    <h5><b>{record.confirmed}</b></h5>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card'>
                    <h6 className='text-muted'>Total recovered</h6>
                    <h5><b>{record.recovered}</b></h5>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card'>
                      <h6 className='text-muted'>Total confirmed cases</h6>
                      <h5><b>{record.confirmed}</b></h5>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card'>
                      <h6 className='text-muted'>Total deaths</h6>
                      <h5><b>{record.deaths}</b></h5>
                  </div>
                </div>
              </div>
            </div>:null}
            </>
          )
        })
      }   
    </div>
  )
}

export default UseEffectAPI