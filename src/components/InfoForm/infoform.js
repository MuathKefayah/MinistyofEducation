import React, {Component} from 'react'
import $ from 'jquery'
import Data from "../InfoForm/data.json";


class infoform extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            file: null,
            cities:[],
            villages:[],
            streets:[],
            schools:[],
            classes:[],
            branches:[]
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSel1Change = this.handleSel1Change.bind(this);


      }


      handleChange(e) {
        this.setState({
          file: URL.createObjectURL(e.target.files[0])
        })
      }

      
      

      




     
   componentDidMount=()=>{
    $('#sch').removeClass("hiddenschool");
    $('#uni').removeClass("hiddenuniversity");
    
    $('input:radio[name="leveledu"]').change(
        function(){
            if ($(this).is(':checked') && $(this).val() == "school") {
                $('#sch').removeClass("hiddenschool");           
                $('#sch').addClass("displayschool");
                $('#uni').addClass("hiddenuniversity");

            }
            else if($(this).is(':checked') && $(this).val() == "university"){
                $('#uni').removeClass("hiddenuniversity");
                $('#uni').addClass("displayuniversity");
                $('#sch').addClass("hiddenschool");
                
            }
            
        }); 

        var cities = Data.cities;
        var villages = Data.villages;
        var streets = Data.streets;
        var schools = Data.schools;
        var classes = Data.classes;
        var branches = Data.branches;
        
        this.setState({cities:cities,villages:villages,streets:streets,schools:schools,classes:classes,branches:branches})
        
        // var city = this.state.cities;
        // var village = this.state.villages;

        // function updatevillages(city,village){
        //     var Village=[];
        //     for (var i = 0; i < city.length; i++) {
        //         if( $("#sel").val(city[i])){
        //             for (var j = 0; j < village.length; j++) {
        //                 if(village[j].includes(city[i])){

        //                 }
        //             }

        //         }

               
        //       }
        // }
     
        // handleSel1Change(){
        //     this.setState({
        //       villages:  
        //     })
        // }
   }
      


    render(){
     
        
        
        let style = {
            cursor:'pointer'
          };
        return(
            <div className="main">
            <div className="form-container shadow bx-center ">
                <h1 class="center bg-green clr-gold">Information Form</h1>
                            <form action="" method="post" class="bg-white ">
                                
                                    <div className="row">
                                        <div className="input-field col">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input type="text" name="txtFirstName" placeholder="First Name" required pattern="[A-Za-z ]{1,}" title="firstname cannot contain numbers!" tabindex="1" style={style}/>
                                        </div>
                                        <div className="input-field col">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input type="text" name="txtLastName" placeholder="Last Name" required pattern="[A-Za-z ]{1,}" title="lastname cannot contain numbers!" tabindex="1"style={style}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col">
                                            <i className="material-icons prefix">date_range</i>
                                            <input type="text" name="txtbirthdate" placeholder="Birth Date" style={style}/>
                                        </div>
                                        <div className="input-field col">
                                            <i className="material-icons prefix">home</i>
                                            <input type="text" name="txtbirthplace" placeholder="Birth Place" style={style} />
                                        </div>
                                    </div>
                                 
                                    <div className="row">
                                        <div className="input-field col">
                                            <i className="material-icons prefix">mail_outline</i>
                                            <input type="email" name="emailaddress" placeholder="Email Address"title="Email must contain @ !" tabindex="1" style={style}/>
                                        </div>    
                                    </div>
                                  
                                    <div className = "row">
                                    
                                            <div className="col">
                                                <p className="genderlable">Gender</p>
                                            </div>
                                           
                                            
                                            <div className="col">
                                                <input id = "male" type = "radio" name = "gender"
                                                        value = "male" checked />
                                                <label for = "male">Male</label>
                                                
                                            </div>
                                            <div className="col">
                                                
                                                    <input id = "female" type = "radio" name = "gender"
                                                        value = "female" checked />
                                                    <label for = "female">Female</label>
                                                
                                            </div>
                                           
                                        
                                    </div> 

                                    <div className="row">
                                        <div className="col">
                                            <p className="addresslable">Address</p>
                                        </div>
                                        <div className="input-field col">
                                            <div className="form-group">
                                                <select className="form-control" id="sel1" style={style} onChange={this.handleSel1Change}>
                                                    <option value="" disabled selected>City</option>
                                                   {
                                                    this.state.cities.map((obj) => 
                                                    (<option value={obj}>{obj}</option>))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="input-field col">
                                            <div className="form-group">
                                                <select className="form-control" id="sel2" style={style}>
                                                    <option value="" disabled selected>Village</option>
                                                    {
                                                    this.state.villages.map((obj) => 
                                                    (<option value={obj}>{obj}</option>))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="input-field col">
                                            <div className="form-group">
                                                <select className="form-control" id="sel3" style={style}>
                                                    <option value="" disabled selected>Street</option>
                                                    {
                                                    this.state.streets.map((obj) => 
                                                    (<option value={obj}>{obj}</option>))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                        <p className="edulable">Educational Level</p>
                                        </div>
                                    
                                        
                                        <div className="col">
                                            <input id = "school" type = "radio" name = "leveledu"
                                                    value = "school"  checked />
                                            <label for = "school">School</label>
                                            
                                        </div>
                                        <div className="col">
                                            
                                                <input id = "university" type = "radio" name = "leveledu"
                                                    value = "university" checked   />
                                                <label for = "university">University</label>
                                            
                                        </div>

                                    </div>

                                    <div className="row browse">
                                        <div className="col">
                                            <div className = "file-field input-field">
                                            <div className = "btn" id="browsebtn">
                                                <span>Browse</span>
                                                <input type = "file" onChange={this.handleChange} />
                                            </div>
                                                
                                            <div className = "file-path-wrapper">
                                                <input className = "file-path validate" type = "text"
                                                    placeholder = "Upload Your Photo" />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="Profileimage">
                                                <img id="image" src={this.state.file} alt="Your photo" width="100" height="100"/>
                                                <div className="Profileimagepopup">
                                                <img src={this.state.file} width="300" height="200"/>
                                                <div className="desc">Your Photo looks so beautiful !
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>

                                     <div className="row">
                                        
                                     </div>

                                     <div id="sch" >
                                        <div className="row" >
                                                <div className="col"></div>
                                                <div className="col"> <p className="schlable">School Information</p></div>   
                                                <div className="col"></div>                                    
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="input-field col">
                                                    <div class="form-group">
                                                        <select className="form-control" id="sel4" style={style}>
                                                            <option value="" disabled selected>School</option>
                                                            {
                                                    this.state.schools.map((obj) => 
                                                    (<option value={obj}>{obj}</option>))
                                                    }
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="input-field col">
                                                <div className="form-group">
                                                        <select className="form-control" id="sel5" style={style}>
                                                            <option value="" disabled selected>Class</option>
                                                            {
                                                            this.state.classes.map((obj) => 
                                                            (<option value={obj}>{obj}</option>))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div id="uni">

                                            <div className="row" >
                                                <div className="col"></div>
                                               <div className="col"> <p className="uninfolable">University Information</p> </div>   
                                               <div className="col"></div>                                    
                                            </div>
                                            <div className="row">
                                                <div className="input-field col">
                                                        <input type="text" name="txtuniname" placeholder="University Name" required pattern="[A-Za-z ]{1,}" title="University name cannot contain numbers!" tabindex="1" style={style}/>
                                                    </div>
                                                    <div className="input-field col">
                                                        <input type="text" name="txtspec" placeholder="Specialization" required pattern="[A-Za-z ]{1,}" title="Specialization  cannot contain numbers!" tabindex="1" style={style}/>
                                                    </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col">
                                                    <input type="text" name="txtgraduatedschool" placeholder="Graduated School" required pattern="[A-Za-z ]{1,}" title="Graduated school cannot contain numbers!" tabindex="1" style={style}/>
                                                </div>
                                                <div className="input-field col">
                                                    <input type="text" name="txtgpa" placeholder="GPA" style={style}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                    <div className="col">
                                                            <p className="addresslable">Branch</p>
                                                    </div>
                                                    <div className="input-field col">
                                                            <div class="form-group">
                                                                <select className="form-control" id="sel6" style={style}>
                                                                    <option value="" disabled selected>Branch</option>
                                                                    {
                                                                    this.state.branches.map((obj) => 
                                                                    (<option value={obj}>{obj}</option>))
                                                                    }
                                                                </select>
                                                            </div>
                                                    </div>
                                                    <div className="col"></div>
                                                    <div className="col"></div>
            
                                            </div>
                                        
                                            
                                            
                                    </div>
                                          
 
         
                            </form>
            </div>
            </div>
            
                    
            )
    }

}




  
export default infoform;

    