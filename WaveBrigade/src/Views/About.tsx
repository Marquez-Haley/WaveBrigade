//import Divider from "@heroui/divider";
import React from "react";
import NavigationBar from "../Components/NavigationBar"
import { useState } from "react";
import TeamMembers from "../Components/TeamMembers";
import Resources from "../Components/Resources";
import ModalComponent from "../Components/ModalComponent";


export default function About() {

    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);

    const handleInfoAction = () => {
        console.log("Info submitted");
        setIsModalInfoOpen(false);
      };

    return (
        <div className="flex flex-col h-screen max-h-screen overflow-auto bg-white">
            <NavigationBar onOpenInfo={() => setIsModalInfoOpen(true)}/>
        <div className="w-4/5 mx-auto mb-10">
            
            <section id="header" className="py-5 text-lg">
            </section>

            <div id="description" className="text-justify justify-left text-lg">
                <h1 className="text-purple-500 text-4xl mb-2 font-bold">What is WaveBrigade?</h1>
                <p>University of Nevada, Reno Department of Computer Science & Engineering</p>
                <p>Department of Computer Science & Engineering</p>
                <p>CS 426: Senior Projects in Computer Science - Team 09</p>
                <p className="mb-4">Spring 2025</p> 
                <p>Inspired by Kahoot and TopHat, WaveBrigade
                            is a web-based platform with the purpose of studying reactions to media while
                            deepening the learning experience by providing instructors with an environment where instructors can 
                            create lesson plans for students in the form of experiments. Instructors are able to create virtual lobbies utilizing the experiment 
                            and present media to students while collecting students' real-time biometric responses, such as temperature, heart rate, and electrodermal activity 
                            utilizing the EmotiBit device. Data is illustrated in charts and graphs with consideration 
                            of their respective data type. Lobbies provide a live chat, which allows for rapid communication
                            between students and instructors. Once the experiment concludes, instructors are able to download
                            participants' data report by viewing or downloading it. 
                            WaveBrigade aims to not only not only to provide a fun platform for real-time interaction, 
                            but also help students understand and reflect on their captured data.</p>
            </div>



            <div id="demo" className="flex justify-center mt-10 mb-3">
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/2zckJY8m4QI?si=Hu30vmaeClmIzcDj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                <iframe className="w-3/5 h-[500px]" 
                src="https://www.youtube.com/embed/2zckJY8m4QI?si=MpPSjcNKvfx_Sjb4" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            </div>

            <div className="flex flex-col items-center">
                <button onClick={() => window.open("https://rsjwavebrigade.com ")} className={`bg-gradient-to-br from-purple-700 to-violet-400 w-1/8 content-center flex justify-center font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out bg-[#7F56D9] hover:bg-violet-500 cursor-pointer text-white`} >Check it out!</button>
            </div>

            <section id="Team Members" >
                <TeamMembers />
            </section>



            <Resources />

            <ModalComponent
                onAction={handleInfoAction}
                isOpen={isModalInfoOpen}
                onCancel={() => setIsModalInfoOpen(false)}
                modalTitle="Information"
                button="Understood"
            >
                <div className="mb-6">
                    <div id="description" className="text-justify justify-left"> 
                        <h1 className="text-2xl mb-2 font-bold">What is WaveBrigade?</h1>

                    

                        <p className="mb-4">
                            Inspired by Kahoot and TopHat, WaveBrigade
                            is a web-based platform with the purpose of studying reactions to media while
                            deepening the learning experience 
                            deepening the learning experience by providing instructors with an environment where instructors can 
                            create lesson plans for students in the form of experiments. Instructors are able to create virtual lobbies utilizing the experiment 
                            and present media to students while collecting students' real-time biometric responses, such as temperature, heart rate, and electrodermal activity 
                            utilizing the EmotiBit device. Data is illustrated in charts and graphs with consideration 
                            of their respective data type. Lobbies provide a live chat, which allows for rapid communication
                            between students and instructors. Once the experiment concludes, instructors are able to download
                            participants' data report by viewing or downloading it. 
                            WaveBrigade aims to not only not only to provide a fun platform for real-time interaction, 
                            but also help students understand and reflect on their captured
                        </p>
                    </div>

                </div>
      </ModalComponent>
        </div>
   </div>
    );

}

