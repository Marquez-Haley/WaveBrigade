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
                <h1 className="text-4xl pb-2 text-purple-500 font-bold">WaveBrigade</h1>
                <p>University of Nevada, Reno Department of Computer Science & Engineering</p>
                {/* <p>Department of Computer Science & Engineering</p> */}
                <p>CS 426: Senior Projects in Computer Science - Team 09</p>
                <p>Spring 2025</p>
            </section>

            <div id="description" className="text-justify justify-left text-lg">
                <h1 className="text-purple-500 text-4xl mb-2 font-bold">What is WaveBrigade?</h1>
                <p className="mb-4">WaveBrigade, inspired by Kahoot and TopHat, is a web-based platform with the purpose of deepening the learning experience by providing instructors with an interactive and user-friendly interface to create lesson plans for students. These lesson plans will be used and presented to students to collect real-time responses from them, utilizing the EmotiBit. In addition, this data will be illustrated through charts and graphs with consideration of their respective data type. WaveBrigade offers an environment where instructors can create virtual lobbies, create lesson plans, and introduce different types of media (such as videos and images) to enhance engagement amongst students. Students can join these lobbies with an access code, participate in the session, and capture their reactions to the media via the EmotiBit. Therefore, students can understand and reflect on the data captured to better understand the lesson material. </p>
                <p>WaveBrigade’s main functionality for instructors includes the creation of virtual lobbies, lesson plans, and the ability to manage a dynamic dashboard containing the media chosen, and the data collected from specific students. The host will be able to record the lobby as well as manage the data report by viewing or downloading it. A live chat functionality will be included for students and instructors to talk to each other when they need to. Our goal is not only to provide a platform for real-time interaction but to create a sense of community and resource-sharing among educators and students. </p>
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
                        <p className="mb-4">WaveBrigade, inspired by Kahoot and TopHat, is a web-based platform with the purpose of deepening the learning experience by providing instructors with an interactive and user-friendly interface to create lesson plans for students. These lesson plans will be used and presented to students to collect real-time responses from them, utilizing the EmotiBit. In addition, this data will be illustrated through charts and graphs with consideration of their respective data type. WaveBrigade offers an environment where instructors can create virtual lobbies, create lesson plans, and introduce different types of media (such as videos and images) to enhance engagement amongst students. Students can join these lobbies with an access code, participate in the session, and capture their reactions to the media via the EmotiBit. Therefore, students can understand and reflect on the data captured to better understand the lesson material. </p>
                    </div>

                </div>
      </ModalComponent>
        </div>
   </div>
    );

}

