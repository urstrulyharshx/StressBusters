import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return(
    <>
    <div className="home" id="home">
    <main>
        <h1>StressBusters</h1>
        <p>Solution to all your problems</p>
    </main>
    </div>


    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are your one and only solution to the stress problems you face everyday.We are leading stressbuster company whose aim is to increase the stress handling ability in people.
            </p>


        </div>



    </div>
    <div className="home3" id="about">
        <div>
            <h1>who we are??</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex fugiat voluptates ut voluptate est, dolorum asperiores hic, temporibus ratione sapiente repellat iusto incidunt perspiciatis odit dolores vero sunt expedita!Loremlore
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi odio modi rem cupiditate, expedita inventore dolorum mollitia explicabo sequi similique fugiat ipsam nam? Unde deleniti odit consequuntur aliquam error.lorem
            </p>

        </div>



    </div>
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s",

                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay:"0.5s",

                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay:"0.7s",

                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay:"1s",

                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>



    </div>
    
    
    
    
    
    
    </>





  );
};

export default Home