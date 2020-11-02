import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <main>
        <Header />
        <div className="body">
            <div id="hero">
                <div id="hero-text">
                    <h3>SHINE Indonesia</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br>
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <img 
                    src="https://via.placeholder.com/500x500" 
                    id="img-hero"
                />
            </div>

            <div id="about">
                <h3> About Us </h3>
                <img 
                    src="https://via.placeholder.com/1200x500" 
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div id="people">
                <h3>Our People</h3>
                <div id="people-img">
                <img 
                    src="https://via.placeholder.com/300x300" 
                />
                <img 
                    src="https://via.placeholder.com/300x300" 
                />
                <img 
                    src="https://via.placeholder.com/300x300" 
                />                               
                <img 
                    src="https://via.placeholder.com/300x300" 
                />
                <img 
                    src="https://via.placeholder.com/300x300" 
                />
                <img 
                    src="https://via.placeholder.com/300x300" 
                />    
                <img 
                    src="https://via.placeholder.com/300x300" 
                />
                <img 
                    src="https://via.placeholder.com/300x300" 
                />
                <img 
                    src="https://via.placeholder.com/300x300" 
                />                               
                <img 
                    src="https://via.placeholder.com/300x300" 
                /> 
                </div>                            
            </div>

            <div id="programs">
                <h3> Programs </h3>
                <img 
                    src="https://via.placeholder.com/1200x500" 
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>  
                <img 
                    src="https://via.placeholder.com/1200x500" 
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>                              
            </div>
        </div>
    </main>
  );
}

export default Home;