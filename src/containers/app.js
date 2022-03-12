import React, {useState,useEffect} from 'react'
import CardList from '../components/cardList'
import Search from '../components/search'
import 'tachyons'
import './app.css'
import Scroll from '../components/Scroll'

function App() {
    const [robots,setRobots] = useState([])
    const [SearchField,setSearchField] = useState('')

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(user=>{setRobots(user)})
    },[]
    )
    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }
        const filteredRobots = robots.filter(robots=>{
            return robots.name.toLowerCase().includes(SearchField.toLowerCase())})
        return(
            <div className='tc'>
               <h1 className='f1'>Robot Friends</h1>
               <Search SearchChange = {onSearchChange}/>
               <Scroll>
                    <CardList robots={filteredRobots}/>
               </Scroll>
           </div>
           )
    
}

export default App;