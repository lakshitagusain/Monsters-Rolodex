/*
import {Component} from 'react';
import CardList from './components/card-list/card-list.components'
import './App.css';
import SearchBox from './components/search-box/search-box.components';


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(
      () => {
      return {monsters: users};
      },
    ))
  }

  onSearchChange = (event) =>{
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render(){
    console.log('render from appjs')
      const {monsters, searchField} = this.state;
      const {onSearchChange} = this;

      const filteredMonsters = monsters.filter((monster) =>{
        return monster.name.toLocaleLowerCase().includes(searchField);
      });

      return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
        className = 'search-box'
        onChangeHandler = {onSearchChange} 
        placeholder = 'search monster'
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}


*/
import {useEffect, useState} from 'react';
import CardList from './components/card-list/card-list.components'
import './App.css';
import SearchBox from './components/search-box/search-box.components';


const App = () => {
  console.log('render');

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  },[])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  },[monsters, searchField])

  return(
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>

    <SearchBox 
    className = 'search-box'
    onChangeHandler = {onSearchChange} 
    placeholder = 'search monster'
    />

    { <CardList monsters = {filteredMonsters}/> }
    </div>
  )
}
export default App;