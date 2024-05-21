import './Project.css';

export default function Project({ project }) {
  return (
    <div id='projectDiv' className='flex-col justify-between'>
      <h3>{project.name}</h3>
      <img src={project.img} alt="project screenshot" />
      <div className='flex-row justify-around my-1'>
        <a href={project.url} target="_blank" rel="noopener noreferrer">Github Repo</a>
        <a href={project.url} target="_blank" rel="noopener noreferrer">Deployed Application</a>
      </div>
    </div>
  );
}