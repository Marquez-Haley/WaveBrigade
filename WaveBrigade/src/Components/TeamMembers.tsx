import React from 'react';
import Avatar, { ConfigProvider } from 'react-avatar';
import whodis from "../assets/eman.jpeg"; //Correctly sized, do not touch
import haleyPic from "../assets/haley.jpeg"; //Correctly sized, do not touch
import sebasPic from "../assets/sebas.jpeg"; //Correctly sized, do not touch
import davePic from "../assets/davepic.jpg"; //Correctly sized, do not touch
import saraPic from "../assets/sarapic.jpeg"; //Correctly sized, do not touch
import lauraPic from "../assets/lauraPic.jpg" //Correctly sized, do not touch
import uncPic from "../assets/unc-linkedin.jpeg";
import joannaPic from "../assets/joanna-placeholder.png"


export default function TeamMembers(){

    return (
        <div className='flex flex-col items-center w-full mt-10' >
            <h1 className="text-3xl font-semibold mb-10" >Team 09 Members</h1>
            <div className="w-min flex space-x-6 mb-10">
                
                <div className="flex flex-col items-center space-y-2">
                    <a href="https://www.linkedin.com/in/sebas-andrade/" target="_blank" rel="noopener noreferrer">
                        <Avatar size="200" title="Sebastian Andrade" round={true} src={sebasPic} alt="Picture of Sebastian Andrade" /> 
                    </a>
                    <span className="text-lg font-semibold">Sebastian Andrade</span>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <a href="https://www.linkedin.com/in/haley-marquez/" target="_blank" rel="noopener noreferrer">
                        <Avatar size="200" name="Haley Marquez" round={true} src={haleyPic} alt="Picture of Haley Marquez" />
                    </a>
                    <span className="text-lg font-semibold">Haley Marquez</span>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <a href="http://www.linkedin.com/in/emanpelayo" target="_blank" rel="noopener noreferrer">
                        <Avatar size="200" title="Emanuelle Pelayo" round={true} src={whodis} alt="Picture of Emanuelle Pelayo"/> 
                    </a>
                    <span className="text-lg font-semibold">Emanuelle Pelayo</span>
                </div>

                
            </div> 

            <h1 className="text-3xl font-semibold my-10">External Advisors</h1>
            <div className="w-min flex space-x-6 mb-10">
                <div className="flex flex-col items-center space-y-2">
                    <a href="https://www.linkedin.com/in/araamz/" target="_blank" rel="noopener noreferrer">
                        <Avatar size="200" title="Araam Zaremehrjardi" round={true} src={uncPic} alt="Picture of Araam Zaremehrjardi" /> 
                    </a>
                    <span className="text-lg font-semibold">Araam Zaremehrjardi</span>
                    <p className="text-md text-center font-normal" >Department of Computer Science, UNR</p>
                </div>

                <div className="flex flex-col items-center space-y-2 mb-10">
                    <a href="https://www.linkedin.com/in/joannaclopez/" target="_blank" rel="noopener noreferrer">
                        <Avatar size="200" title="Joanna Lopez" round={true} src={joannaPic} alt="Picture of Joanna Lopez" />
                    </a>
                    <span className="text-lg font-semibold">Joanna Lopez</span>
                    <p className="text-md text-center font-normal" >Department of Computer Science, UNR</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <a href="https://www.unr.edu/journalism/faculty-and-staff/directory/crosswell-laura" target="_blank" rel="noopener noreferrer">
                        <Avatar size="200" title="Dr. Laura Crosswell" round={true} src={lauraPic} alt="Picture of Doctor Laura Crosswell" /> 
                    </a>
                    <span className="text-lg font-semibold">Dr. Laura Crosswell</span>
                    <p className="text-md text-center font-normal" >Reynolds School of Journalism, UNR</p>
                </div>
                
            </div> 

            <h1 className="text-3xl font-semibold mb-10">Instructors</h1>
            <div className="w-min flex space-x-6 mb-10">
                <div className="flex flex-col items-center space-y-2">
                    <a href="https://www.unr.edu/cse/people/david-feil-seifer" target="_blank" rel="noopener noreferrer">
                        <Avatar size="200" title="David Feil-Seifer" round={true} src={davePic} alt="Picture of David Feil-Seifer" /> 
                    </a>
                    <span className="text-lg font-semibold">David Feil-Seifer</span>
                    <p className="text-md text-center font-normal" >Department of Computer Science, UNR</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <a href="https://www.linkedin.com/in/sara-r-davis-02b6b6190/" target="_blank" rel="noopener noreferrer">
                        <Avatar size="200" title="Sara Davis" round={true} src={saraPic} alt="Picture of Sara Davis" /> 
                    </a>
                    <p className="text-lg font-semibold">Sara Davis</p>
                    <p className="text-md text-center font-normal" >Department of Computer Science, UNR</p>
                </div>
            </div> 
            
        </div>
    )
}