import React, { useState } from 'react';
import './App.css';
import Profile from './Assets/profile.jpg'
import { FaSearch } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai"
import { FaBars } from "react-icons/fa";

function App() {
  const [query, setQuery] = useState('006153238');
  const data = {
    registrationDate: '23/1/2016',
    profileImage: {Profile}, // Replace with the actual image URL
    nameAmharic: 'ኢያሱ ታገሰ አርፍጮ',
    nameEnglish: 'EYASU TAGESSE ARFICHO',
        licenseNumber: 'CE/TMDB/1/0218125/2017',
    idNumber: '006153238',
    nameAmharic: 'EYASU TAGESSE ARFICHO',
    nameEnglish: 'EYASU TAGESSE ARFICHO',
    sector: 'ግለሰብ ነጋዴ',
    capital: '600,000.00',
    registrationDate: '2/08/2017',
    licenses: [
      {
        name: 'ኢያሱ ታገሰ አርፍጮ',
        sector: '62512)(62512)ኤሌክትሪክ መሳሪያዎችና ተዛማጅ ዕቃዎች ችርቻሮ ንግድ',
        licenseNumber: 'CE/TMDB/1/0218125/2016',
      },
      // {
      //   name: 'አልማዝ አደባ አለኸኝ',
      //   sector: 'ማኅበራዊ ድርጅቶች',
      //   licenseNumber: 'SNNPR/HA/HO/A/1/05/00152492532512/2014',
      // },
    ],
  };

  const handleSearch = () => {
    console.log(`Searched for: ${query}`);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
      <div className="menu-logo-container">
      <FaBars className="menu-icon" />
      <img
        src="https://etrade.gov.et/assets/logo/etrade-logo.png"
        alt="logo"
        className="logo-image"
      />
      
    </div>
        {/* <div className="logo">E-Trade</div> */}
        <nav>
          <span>አማርኛ</span> | <span>ይግቡ</span>
        </nav>
      </header>

      {/* Search Section */}
    <div className="search-section">
  <h1>የንግድ ፈቃድ ማጣርያ</h1>
  <div className="search-bar">
    <div className="input-wrapper">
       <FaSearch className="search-icon" /> 
      <input
        type="text"
        placeholder="006153238"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>ፈልግ</button>
    </div>
  </div>
</div>


       <div className="data-section">
        <h2>የንግድ ምዝገባ</h2>
         <hr className="divider" />
        <div className="data">
          <p className='text'>የተመዘገበበት ቁጥር  <br /> </p> <p className='text-size'>{data.licenseNumber}</p>
          <p className='text'>የግብር ከፋይ መለያ ቁጥር <br /></p> <p>{data.idNumber}</p>
          <p className='text'>የድርጅት/የግለሰብ ስም <br /> </p> <p>{data.nameAmharic}</p>
          <p className='text'>የድርጅት/የግለሰብ ስም የእንግሊዝኛ<br /> </p> <p> {data.nameEnglish}</p>
          <p className='text'>ህጋዊ አቋም <br /></p> <p> {data.sector}</p>
          <p className='text'>ካፒታል <br /></p> <p> {data.capital}</p>
          <p className='text'>የመመዝገቢያ ቀን <br /></p> <p> {data.registrationDate}</p>
        </div>
        {/* Profile Section */}
         <hr className="divider" />
    <div className="">
  <h2>ስራ አስኪያጅ</h2>
  {/* <p>{data.registrationDate}</p> */}
  <div className="profile-column">
    <img src={Profile} alt="Profile" className="profile-image" />
    <h3>{data.nameAmharic}</h3>
    <p>{data.nameEnglish}</p>
  </div>
</div>
      </div>



      {/* License Table */}
      <div className="table-section">
        <h2>የንግድ ፈቃድ ዝርዝር</h2>
         <hr className="divider" />
  <div className="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>የንግድ ስም</th>
          <th>ዘርፎች</th>
          <th>የፈቃድ ቁጥር</th>
          <th>እድሳቱ የሚያገለግለው</th>
          <th>   </th>
        </tr>
      </thead>
      <tbody>
        {data.licenses.map((license, index) => (
          <tr key={index}>
            <td>{license.name}</td>
            <td>{license.sector}</td>
            <td>{license.licenseNumber}</td>
            <td>2/05/2016 - 2/05/2017</td>
            <td>
              {/* <button
                className="view-icon-button"
                // onClick={() => handleView(license)}
              > */}
                <AiOutlineEye size={20} />
              {/* </button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
}

export default App;
