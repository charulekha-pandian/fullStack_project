import React from 'react'

const Header = () => {


    return (
        <header className="App-head">
           <p style={{fontFamily: '-moz-initial',fontSize:30,margin: 5}}>Welcome To</p> 
           <h2 style={{fontFamily:'cursive',alignItems:'center',margin:10}}>TRAINING PERFORMANCE TRACKER</h2>
           <p style={{fontFamily: 'Courier-Oblique',textDecoration:'underline', fontWeight:'regular'}}>Login to access your account</p>
        </header>
    )
}

export default Header;