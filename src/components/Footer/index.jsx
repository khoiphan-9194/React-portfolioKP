import './Footer.css';

export const Footer = () => {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/DaniDrury"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/danidrury/"
    },
    {
      name: "fab fa-instagram",
      link: "https://www.instagram.com/danidrury98/"
    }
  ];

  const iconList = icons.map(icon => (
    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={`${icon.name} fa-2x`}></i></a>
  ));

  return (
    <footer className="flex-row justify-center">
      <div className="flex-row justify-around w-60">
        {iconList}
      </div>
    </footer>
  );
}