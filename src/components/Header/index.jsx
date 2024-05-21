import './Header.css';

export const Header = (props) => {
  return (
    <header className='flex-row justify-center'>
      <div id='header-div' className="flex-row justify-between px-1">
        <h1>Dani Drury</h1>
        {props.children}
      </div>
    </header>
  );
}