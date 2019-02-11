import React, {Component} from 'react'
import Minofedulogo from './images/minofedulogo4.png'
import { Link , NavLink } from 'react-router-dom'
import MenuData from "../Header/menudata.json";




class header extends Component {

    constructor(props){
        super(props);
        this.state = {
            services:[],
            news:[]
            
        };

      }

      componentDidMount = () =>{
        var services = MenuData.services;
        var news = MenuData.news;
       
        
        this.setState({services:services,news:news})
      }

    render(){  
        return(
            <div className="wrapper">
                <nav className="nav-wrapper header" id="headernav">
                        <div className="row" id="headerrow">
                            
                            <div className="col s7 push-s5 title">
                                <span className="title1">The Ministry of Education</span>
                            </div>
                            <div className="col s5 pull-s7">
                                <a className=""><img className="logo" src={Minofedulogo}/></a>
                            </div>
                            
                        </div>
                    
            </nav>
            <nav className="nav-wrapper menu" id="menunav">
                    <div className="row">
                    
                        <div className="col s4 push-s8 ">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><NavLink to="/">About</NavLink></li>
                                
                                <li class="dropdown"><a class="dropdown-toggle "  href="#">Services</a>
                                    <ul class="dropdown-menu w3-card-4 w3-animate-zoom" id="menu2">
                                    {
                                    this.state.services.map((obj) => 
                                    (<li><a className="dropi" href="#"> {obj} </a></li>))
                                    }
                                    </ul>
                                </li>
                                <li> <NavLink to="/">Contact</NavLink> </li>
                                <li class="dropdown"><a class="dropdown-toggle"  href="#">News</a>
                                    <ul class="dropdown-menu w3-card-4 w3-animate-zoom" id="menu3">
                                    {
                                    this.state.news.map((obj) => 
                                    (<li><a className="dropi" href="#"> {obj} </a></li>))
                                    }
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    
                        
                    </div>
                    
                </nav>
            </div>
           
        )
        

        
    }
}




export default header;