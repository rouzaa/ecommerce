import './categories.styles.scss';
const App = () => {
   const categories =[
    {
      id: 1,
      title:'Hats',
    },
    {
      id: 2,
      title:'Jackets',
    },
    {
      id: 3,
      title:'sneackers',
    },
    {
      id: 4,
      title:'womens',
    },
    {
      id: 5,
      title:'mens',
    },
   ];
  
  
  return (

    <div className='categories-container'>
      { categories.map(({title}) => (
      // eslint-disable-next-line react/jsx-key
      <div className='category-container'>
      <div   className='background-image'/>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
   ))}
   </div>
  );
};
      

export default App;