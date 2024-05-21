import Project from '../Project';
import './Portfolio.css';

const projectArr = [
  {
    name: "PropertyPlus Care",
    github: "https://github.com/stephen-scheiman/PropertyPlus-Care",
    url: "https://property-plus-care-dab80668cb03.herokuapp.com/",
    img: "/assets/img/proppluscare.png"
  },
  {
    name: "Entertainment Search",
    github: "https://github.com/DaniDrury/entertainment-search",
    url: "https://danidrury.github.io/entertainment-search/",
    img: "/assets/img/entertainmentsearch.png"
  },
  {
    name: "Dani's Tech Blog",
    github: "https://github.com/DaniDrury/tech-blog",
    url: "https://dnd-tech-blog-ad0fb839885d.herokuapp.com/",
    img: "/assets/img/techblog.png"
  },
  {
    name: "Weather Dashboard",
    github: "https://github.com/DaniDrury/weather-dashboard",
    url: "https://danidrury.github.io/weather-dashboard/",
    img: "/assets/img/weatherdashboard.png"
  },
  {
    name: "Work Day Scheduler",
    github: "https://github.com/DaniDrury/work-day-scheduler",
    url: "https://danidrury.github.io/work-day-scheduler/",
    img: "/assets/img/work-day-scheduler.png"
  },
  {
    name: "Coding Quiz Game",
    github: "https://github.com/DaniDrury/quiz-game",
    url: "https://danidrury.github.io/quiz-game/",
    img: "/assets/img/quizgame.png"
  },
]

export default function Portfolio() {
  return (
    <div id='portfolioDiv' className="flex-row">
      {/* map through project array passing each project to Project component */}
      { projectArr.map((project) => 
        <Project key={project.name} project={ project } />
      )}
    </div>
  );
}