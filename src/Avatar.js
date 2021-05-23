import React , {Component}from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';


class Avatar extends Component {

    constructor(){
        super();
        this.state ={
            name: "Welcome To ZoomAbroad"
        }
    }

    namechange(){
        this.setState (
            {
                name :" Welcome To New Team "
            }
        )
    }
    render(){
        const avtarArry =[

            {
                id: 1,
                name:"mr.chetan",
                work:"Web Developer !!"
            }, 
    
            {
                id: 2,
                name:"ms.Nikita",
                work:" BackEnd Developer !!"
            },
    
            {
                id: 3,
                name:"ms.Sonalib",
                work:"HR Of ZoomAbroad !!"
            },
            {
                id: 4,
                name:"mr.Vinayak ",
                work:"Data Analyst !!"
            }
        ]
    
       const newArray = avtarArry.map((avatarcard,i) =>{
           return <Avatarlist key={i} id ={avtarArry[i].id} name={avtarArry[i].name} work= {avtarArry[i].work}/>
        })
    
        return(
            <div className="hello">
            <div className="main_page">
             <hr/>
             <hr/>
            <h1> {this.state.name}</h1>
            <hr/>
            <hr/>
            {newArray}
            <br/>
            <br/>
            <hr/>
            <hr/>
            <button onClick ={ () => this.namechange()}> Subscribe to my channel !!</button>
             </div>
             </div>
        )
    }
    }
    
export default Avatar;