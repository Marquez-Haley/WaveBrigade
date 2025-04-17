import React from "react"

export default function Resources () {

    return (
        <div id="resources" className="text-justify justify-left text-lg">
            <h1 className="text-purple-500 text-4xl mb-5 mt-20 font-bold text-left">Resources</h1>

            <section id="problem-domain-book">
                <h1 className="text-2xl mb-2 font-bold">Problem Domain Book</h1>
                <a href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781663728289/" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                    The Big Ideas Behind Reliable, Scalable, and Maintainable Systems by M. Kleppmann,  Sebastopol, 2018.
                </a>
                <p className="pb-4">A book that provides an understanding of the need for real-time data collection, while giving a comprehensive overview of modern data architecture, data management, and processing. This is crucial for creating a project that collects and visualizes biometric data. Furthermore, Kleppmann highlights the importance of making an application that is scalable, reliable, and maintainable, thus making the book a resource for creating data-driven web applications. </p>
            </section>

            <section id="reference-articles">
                <h1 className="mt-5 text-2xl mb-2 font-bold">Reference Articles</h1>
                <a href="https://doi.org/10.1109/cic.2004.1443001." target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                    <p>M. Oefinger, W. Zong, M. Krieger, and R. G. Mark, “An interactive web-based tool for multi-scale physiological data visualization,” pp. 569–571, Jul. 2005</p>
                </a>
                <p className="pb-5">Journal article that introduces a web-based tool that improves the accuracy and efficiency of analyzing long-term ECG data in cardiovascular studies. The article highlights the development of the tool that enables real-time visualization and analysis of ECG signals. A “point-and-click” interface is acknowledged by the study as well which allows users to switch between data. The tool’s approach to data management and visualization can help improve WaveBrigade’s capabilities in designing a user-friendly platform. </p>

                <a href="https://doi.org/10.1177/1477878518805308" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                    <p>J. R. Reidenberg and F. Schaub, “Achieving Big Data Privacy In Education,” Theory and Research in Education, vol. 16, no. 3, pp. 263–279, Oct. 2018</p>
                </a>
                <p className="pb-4">Journal article that describes the importance of Big Data that creates privacy risks when used in educational technologies. The article highlights the importance of transparency, security, and accountability in Big Data for education. This is particularly important, as a major part of the functionality of WaveBrigade is its data collection and handling. The goal is to be transparent with the user by letting them know where the data is going and asking if they consent to the data being collected. </p>
            </section>
                
            <section id="project-related-websites">
                <h1 className="mt-5 text-2xl mb-2 font-bold">Project-Related Websites</h1>

                <div id="brainflow" className="text-justify justify-left text-lg">
                    <a href="https://brainflow.org" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>Brainflow</p>
                    </a>
                    <p className="pb-5">BrainFlow is a powerful framework that enables seamless integration of biosensor data across multiple platforms. 
                        It served as the bridge between the EmotiBit hardware and WaveBrigade, providing reliable real-time streaming of biometric signals like heart rate, electrodermal activity, and temperature.
                    </p>
                </div>

                <div id="deno" className="text-justify justify-left text-lg">
                    <a href="https://deno.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>Deno</p>
                    </a>
                    <p className="pb-5">
                        Deno was utlilized in our backend to build lightweight, 
                        secure, and TypeScript-native REST APIs. Its built-in support for JavaScript and TypeScript, 
                        as well as ES module support, made it ideal for developing fast and maintainable server-side logic
                        without external dependencies.</p>
                </div>
                
                <div id="electron" className="text-justify justify-left text-lg">
                    <a href="https://www.electronjs.org/docs/latest" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>Electron</p>
                    </a>
                    <p className="pb-5">
                        Wrapping WaveBrigade's Host functionalty using Electron played a large role 
                        in enabling WaveBrigade's Host functionality by providing
                        a cross-platform solution where educators can create and host experiments by downloading the application.
                    </p>
                </div>

                <div id="EmotiBit" className="text-justify justify-left text-lg">
                    <a href="https://www.emotibit.com/" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>EmotiBit</p>
                    </a>
                    <p className="pb-5">
                        The EmotiBit website offers a lot of useful information about the device’s 
                        capabilities and data formats. 
                        Documentation on data collection and visualization, 
                        as well as usage guides, aided the team in incorporating the EmotiBit into 
                        WaveBrigade for real-time biometric data tracking. </p>
                </div>

                <div id="HeroUI" className="text-justify justify-left text-lg">
                    <a href="https://www.heroui.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>HeroUI</p>
                    </a>

                    <p className="pb-5">
                        The holy grail that made this project's UI possible.
                        HeroUI provides a sleek collection of accessible, 
                        prebuilt components that helped us rapidly prototype and polish our interface without sacrificing design quality. 
                        We relied on its consistent styling and flexibility to bring our frontend vision to life without 
                        reinventing the wheel. 
                    </p>
                </div>

                <div id="Kahoot" className="text-justify justify-left text-lg">
                    <a href="https://kahoot.it" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>Kahoot</p>
                    </a>

                    <p className="pb-5">
                        Kahoot served as our main inspiration for the experiment hosting and joining flow.
                        Kahoot's interactive and engaging experience guided our own approach to session-based participation, 
                        making real-time collaboration more intuitive and fun for both students and educators.
                    </p>
                </div>


                <div id="nodejs" className="text-justify justify-left text-lg">
                    <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>Node.js</p>
                    </a>
                    <p className="pb-5"> 
                        A classic runtime, Node.js facilitated our TypeScript-based technology 
                        stack while powering other tools we used, such as Vite and React.
                    </p>
                </div>

                <div id="postgresql" className="text-justify justify-left text-lg">
                    <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>PostgreSQL</p>
                    </a>
                    <p className="pb-5">
                        PostgreSQL served as our relational database solution, offering scalability and data integrity features that make it a 
                        reliable choice for managing user data, experiment logs, and biometric data storage. 
                    </p>
                </div>


                <div id="React" className="text-justify justify-left text-lg">
                    <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold w-min">
                        <p>React</p>
                    </a>
                    <p className="pb-5">
                        A powerful and reactive web development framework, React served as the frontend framework utilized in WaveBrigade, 
                        enabling the team to create reactive and interactive user interfaces.
                    </p>
                </div>

                <div id="Socket.io" className="text-justify justify-left text-lg">
                    <a href="https://socket.io" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>Socket.IO</p>
                    </a>
                    <p className="pb-5">
                        Socket.IO facilitated real-time, 
                        bidirectional communication between clients and the server, allowing us
                        to implement live biometric data updates, live chat within live sessions, 
                        and the ability for a host to kick a user.
                    </p>
                </div>

                <div id="TailwindCSS" className="text-justify justify-left text-lg">
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>Tailwind CSS</p>
                    </a>
                    <p className="pb-5">
                        Tailwind CSS was instrumental in creating a clean and responsive user interface.
                        It allowed for rapid styling and customization, enabling the WaveBrigade team to 
                        maintain a constent design and quickly implement UI redesigns.
                    </p>
                </div>

                <div id="TypeScript" className="text-justify justify-left text-lg">
                    <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline font-bold">
                        <p>TypeScript</p>
                    </a>
                    <p className="pb-5">
                        TypeScript served as the main language used in the development of WaveBrigade. 
                        It's strong typing enhanced the development workflow by facilitating code organization,
                        catching runtime errors, and making the codebase more maintainable.
                    </p>
                </div>
    
            </section>

        </div>
    )
}