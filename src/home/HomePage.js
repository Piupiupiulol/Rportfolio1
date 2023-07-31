import React, { useEffect } from "react";
import "../css/Home.css";

function HomePage() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                    entry.target.classList.remove('Hidden')
                    console.log( entry.target.classList);
                }else {
                    entry.target.classList.remove('show')
                    entry.target.classList.add('Hidden')
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".Hidden");
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="body">
            <section className="Hidden one"><div className={"sectionOne"}><div className={"menu"}><div  className={"grid_1"}>
                <img style={{position: "relative", maxWidth: "99%", minWidth: "180px" ,height: "90px", marginRight: "30%"}} src={"images/logo.png"} alt={""} /></div><div className={"grid_2"}> One</div><div className={"grid_3"}> Two</div>
                <div className={"grid_4"}>Three</div><div className={"grid_5"}>Four</div><div className={"grid_6"}>Five</div></div></div>


                <div className={"map"} style={{zIndex: "3"}}>
                    <iframe
                        style={{ zIndex: "3", boxShadow: "1px 1px 7px 2px black" }}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2d-1.599884033203125!3d51.472829664858644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM1DCsDE0JzU4LjAiTiAxwrAwMCcwNy4xIlc!5e0!3m2!1sen!2sus!4v1626037632662!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            textAlign: "center",
                            width: "100%",
                            padding: "6px 0",
                            zIndex: "2"
                        }}
                    >
                    </div>

                </div>



                <img style={{ top: "-20%",position: "relative", width: "100vw" ,height: "90vh", opacity: "0.23"}} src={"images/sesimogram.png"} alt={""} /></section>
            {/*<section className="Hidden two"> <img style={{position: "relative", width: "100vw" ,height: "90vh", opacity: "0.03"}} src={"images/sesimogram.png"} alt={""} /></section>*/}

        </div>
    );
}

export default HomePage;
