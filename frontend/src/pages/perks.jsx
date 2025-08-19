import Card from "../components/Card";
import perkstyles from  '../styles/PerksStyle.module.css';
import {  useState, useEffect } from "react";

export default function Perks() {
  const [active, setActive] = useState(1);

  // Scroll tracking for active card
  useEffect(() => {
    const cards = document.querySelectorAll(`.${perkstyles.perkcard}`);
    const handleScroll = () => {
      let current = 1;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          current = index + 1;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={perkstyles.container}>
      <div className={perkstyles.layout}>
        {/* LEFT SIDE - CARDS */}
        <div className={perkstyles["cards-section"]}>
          <Card
            color="#E57373"
            title="🎤 Gain confidence in communicating and presenting ideas"
            image="https://slidemodel.com/wp-content/uploads/0003-public-speaking-podium-ppt-template.png"
            zIndex={active === 1 ? 3 : 1}
          />
          <Card
            color="#81C784"
            title="🧠 Experience cross-functional learning through content, events, research, and outreach"
            image="https://onethreadapp.com/blog/wp-content/uploads/2023/08/What-is-Cross-Functional-Collaboration.png"
            zIndex={active === 2 ? 3 : 2}
          />
               <Card
        color="#64B5F6"
         title="💡 Work on projects you can actually showcase in your portfolio"
        image="https://miro.medium.com/v2/resize:fit:1400/1*xTY5YRxZiXJnTXpp7GUGSA.jpeg"
        zIndex={active === 3 ? 3 : 2}
      />
      <Card
        color="#90A4AE"
        title="🚀Make your resume stand out with impactful internship experience"
        image="https://www.myperfectresume.com/wp-content/uploads/2022/03/skills-section-on-resume-hero.png?w=550"
          zIndex={active === 4 ? 4 : 2}
      />
      <Card
        color="#FFD54F"
        title="🤝 Chance to become a part of Team InternWare"
        image="https://media.istockphoto.com/id/1346611118/vector/scene-with-business-people-working-in-the-office.jpg?s=612x612&w=0&k=20&c=NH5XYaUYJan2QuqR6zHC0AFT8D29Cd6ynMqxExPm4kA="
        zIndex={active === 5 ? 5 : 2}
      />
      <Card
        color="#BA68C8"
        title="🎯 Apply what you know and learn what truly works in real settings"
        image="https://img.freepik.com/premium-vector/girl-studying-with-book_113065-239.jpg"
        zIndex={active === 6 ? 6 : 2}
      />
      <Card
        color="#4DB6AC"
        title=" 🤝 Collaborate with teams and build real professional exposure"
        image="https://t4.ftcdn.net/jpg/11/01/41/53/360_F_1101415358_vxJLD1OVC8SlwRBJ3DSeSIeIaVK1th9m.jpg"
        zIndex={active === 7 ? 7 : 2}
      />
      <Card
        color="#FF8A65"
        title="💡 Get guidance from experienced mentors and seniors"
        image="https://www.brickworkindia.com/adminfiles/The-Role-of-Mentorship-in-Professional-Development_2.jpg"
        zIndex={active === 8 ? 8 : 2}

/></div>
      

<div className={perkstyles["perk-heading"]}>
    <div className={perkstyles["arrow-shape"]}>
      <span className={perkstyles["perk-text"]}>PERKS</span>
    </div>
  </div>
      </div>

      {/* scroll space */}
      <div style={{ height: "200vh" }} />
    </div>
  );
}

 