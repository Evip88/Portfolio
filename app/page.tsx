"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
         <a href="#" className="logo-holder">
          <div className="logo">L</div>
          <div className="logo-text">My Portfolio</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="Elvisponjevic88@gmail.com" className="button">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi I'm</small> Elvis Ponjevic
              </h1>
              <p>
              I’m a dedicated and ambitious Full Stack Developer in training, currently honing my skills in web development. My journey is fueled by a passion for creating seamless, user-friendly digital experiences, combining both frontend creativity and backend logic.
              <br></br>
              <br></br>
                <span> I am continuously learning and expanding my expertise to build modern, scalable applications. I thrive on solving complex problems, optimizing performance, and crafting engaging designs that leave an impact.</span>
              </p>
              <div className="call-to-action">
                <a href="./Sample_Resume_Template.pdf" className="button black">View Resume</a>
                <a href="Elvisponjevic88@gmail.com" className="button white">Contact Me</a>
              </div>
              <div className="social-links">
                <a href="#">
                  <Image src="/imgs/github.png" alt="GitHub" width={48} height={48} />
                </a>
                <a href="#">
                  <Image src="/imgs/linkedin.png" alt="LinkedIn" width={48} height={48} />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <Image src="/imgs/elvisNew.jpg" alt="Elvis Ponjevic" width={500} height={500} />
          </div>
        </section>

        <section className="logos container">
          <div className="marquee">
            <div className="track">
            {["html", "css", "javascript", "sass", "react", "nextjs", "azure", "vscode", "python", "html", "css", "javascript", "sass", "react", "nextjs", "azure", "vscode", "python"].map((tech, index) => (
               <Image key={`${tech}-${index}`} src={`/imgs/${tech}.png`} alt={tech.toUpperCase()} width={128} height={128} />
            ))}

            </div>
          </div>
        </section>

        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small> Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Java</li>
                <li>PHP</li>
                <li>Ruby</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                I am an aspiring Full Stack Developer with a passion for building modern, efficient, and user-friendly web applications. Currently advancing my skills in frontend and backend development, I thrive on problem-solving and crafting seamless digital experiences.
              </p>
              <p>
              With a strong foundation in HTML, CSS, JavaScript, React, and Node.js, I am continuously expanding my expertise to stay ahead in the ever-evolving tech landscape. My approach is driven by clean code, performance optimization, and a user-centric mindset.

I am eager to collaborate, innovate, and grow, bringing value to every project I work on. Let’s connect and create something impactful!
              </p>
            </div>
          </div>
        </section>

        <section className="work-experience container">
			<h2>
				<small>Recent</small>
				Work Experience
			</h2>
			<div className="jobs">
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-1.jpg" alt="Workplace 1 - YouTube Creator" width="100%" />
							<figcaption>
								Workplace - 1 YouTube Creator
							</figcaption>
						</div>
					</figure>
					<h3>YouTube Content Creator</h3>
					<div>2000-2025</div>
					<p>Content creation online teaching people about how to code using HTML, CSS, JS.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-2.jpg" alt="Workplace 2 - Moshi Moshi Marketing" width="100%" />
							<figcaption>
								Workplace - Moshi Moshi Marketing
							</figcaption>
						</div>
					</figure>
					<h3>Moshi Moshi Marketing</h3>
					<div>2000-2025</div>
					<p>Marketing agency building websites and programming them from the ground up. </p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-3.jpg" alt="Workplace 3 - Chamber of Commerce" width="100%" />
							<figcaption>
								Workplace - Chamber of Commerce
							</figcaption>
						</div>
					</figure>
					<h3>Chamber of Commerce</h3>
					<div>2000-2025</div>
					<p>A small to large business organisation that helps facilitate advice and support.</p>
				</article>
				
			</div>
		    </section>

		    <section id="projects" className="bento container">
			<h2>
				<small>
					Previous
				</small>
				Completed Projects
			</h2>
			<div className="bento-grid">
				<a href="#" className="bento-item">
					<img src="./imgs/bento-1.jpg" alt="BGCCI" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-2.jpg" alt="Churhview" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-3.jpg" alt="Harley" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-5.jpg" alt="Bunbury" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-6.jpg" alt="Running" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-7.jpg" alt="School" width="100%" />
				</a>
			</div>
		    </section>

		    <section className="chatbot container">
			<h2>
				<small>
					Talk to me
				</small>
				Chatbot
			</h2>
			<div className="chatbot-blue">
				<div className="chat-info">
					<h3>Azure AI Chatbot</h3>
					<p>I&apos;ve put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I&apos;ve done.</p>
					<p>You can also download my resume here if you want to take a look at it.  I&apos;m currently looking for new opportunities so if you have a project you think I&apos;d be a good fit for, please get in touch!</p>
					<a href="./Sample_Resume_Template.pdf" className="button black">Download Resume</a>
				</div>
				<div className="chat-box">
					<div className="scroll-area">
						<ul id="chat-log">
							<li>
								<span className="avatar bot">AI</span>
								<div className="message">
									Hi, I&apos;m a friendly chatbot that lets you interactive with this portfolio and CV. How can I help?
								</div>
							</li>
							<li>
								<span className="avatar user">User</span>
								<div className="message">
									I have a question to ask you about this resume
								</div>
							</li>
						</ul>
					</div>
					<div className="chat-message">
						<input type="text" placeholder="Hey Elvis, what skills are you best at?"/>
						<button className="button black">Send</button>
					</div>
				</div>
			</div>
		    </section>


      </main>
    </>
  );
}
