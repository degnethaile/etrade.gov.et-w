import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import { FiArrowRight } from "react-icons/fi";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import person from "../Assets/pic.jpg";

const Home = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: "1px solid red", // Add border style and color
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "red",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="container">
          <div className="contact-form-container" style={{ background: '#00796b', margin: '10px' }}>
            <Button
              variant="outlined"
              style={{ border: '1px solid white', marginRight: '10px', color: 'white' }}
            >
              <ChevronLeftIcon /> ተመለስ
            </Button>
            <h3 style={{ color: 'white' }}>የንግድ ፈቃድ ማጣርያ</h3>
          </div>
          <h1 className="primary-heading" style={{margin: '50px'}}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="የፈቃድ ወይም የግብር ከፋይ መለያ*"
                inputProps={{ 'aria-label': 'የፈቃድ ወይም የግብር ከፋይ መለያ' }}
              />
            </Search>
          </h1>
          {/* <p className="primary-text">
         
            ስራ አስኪያጅ ስም: BIZUAYEHU AGAFARI
            የፈቃድ ቁጥር: CE/TMDB/15/445411100/4735254/2016
            የንግድ ስም: ብዙአየሁ አጋፋሪ ዱካሞ
            ካፒታል: 20000
            ያለበት ሁኔታ: በስራ ላይ የማደሻ ጊዜ አልደረሰም
            የተመዘገበበት ቀን: 20/3/2016
            አድራሻ: ክልል - ማዕከላዊ ኢትዮጵያ
            ዞን: ሀድያ
            ክፍለ ከተማ/ወረዳ: ጎፈርሜዳ
            ቀበሌ: ናራሙ
            የቤት ቁጥር: adis
            ሞባይል ስልክ: 0923768909
            ስልክ: 0923768909
            ዘርፎች
          </p> */}
          <div className="work-section-info" >
        
            <p>የንግድ ፈቃድ</p>
            <Divider className="my-4" />
            <div className="info-boxes-img-container">
              <img src={person} alt="" />
            </div>
            <h2> ስራ አስኪያጅ <br /> ስም አበባ  ሃይል <br /> ABEBA HAILE</h2> <br /> <br />
            <p  style={{ fontSize: '16px', color: 'green', lineHeight: '1.5', textAlign: 'left' }}>
              የፈቃድ ቁጥር <br />
              CE/TMDB/15/445411100/4735254/2016 <br />
            የንግድ ስም <br /> አበባ  ሃይል ላምቤቦ <br />
            ካፒታል <br /> 20000 <br />
            ያለበት ሁኔታ <br /> በስራ ላይ የማደሻ ጊዜ አልደረሰም <br />
            የተመዘገበበት ቀን <br /> 20/3/2016
            አድራሻ <br /> ክልል - ማዕከላዊ ኢትዮጵያ
            ዞን - ሀድያ <br />
            ክፍለ ከተማ/ወረዳ - ጎፈርሜዳ <br />
            ቀበሌ: ናራሙ <br />
            የቤት ቁጥር - adis <br />
            ሞባይል ስልክ - 0923768908 <br />
            ስልክ - 0923768989 <br /> <br /> <br />
              ዘርፎች <br />

              (62441)የጨርቃ ጨርቅ ጭረቶች፣ ጨርቃጨርቅ፣ ጥጥ፣
            </p>
            
          </div>
        </div>
        <div className="home-bannerImage-container">
          {/* ... (existing code) */}
        </div>
        <div className="home-image-section">
          {/* ... (existing code) */}
        </div>
      </div>
    </div>
  );
};

export default Home;
