import React, {Component} from 'react'

import citiesData from '../InfoForm/data/cities';
import villagesData from '../InfoForm/data/villages';
import streetsData from '../InfoForm/data/streets';
import schoolsData from '../InfoForm/data/Schools';
import classesData from '../InfoForm/data/classes';
import branchesData from '../InfoForm/data/branches';

// import allData from '../InfoForm/data/data';



class infoform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                file: null,
                first_name:null,
                last_name:null,
                birth_date:null,
                birth_place:null,
                email:null,
                gender: undefined,
                education_level: undefined,

                city: undefined,
                village: undefined,
                street: undefined,
                school: undefined,

                class: undefined,
                branch: undefined
            },

            options: {
                cities: [],
                villages: [],
                streets: [],
                schools: [],
                branches: [],
                classes: []
            }


        };
        this.handleChange = this.handleChange.bind(this);


    }


    handleChange(e) {
        this.setState({
            data: {
                ...this.state.data,
                file: URL.createObjectURL(e.target.files[0])
            }
        })
    }


    componentDidMount = () => {
        this.setState({
            options: {
                ...this.state.options,
                cities: citiesData.cities,
                branches: branchesData.branches,
                classes: classesData.classes
            }
        })

    };


    render() {

        let style = {
            cursor: 'pointer'
        };
        return (
            <div className="main">
                <div className="form-container shadow bx-center ">
                    <h1 class="center bg-green clr-gold">Information Form</h1>
                    <form action="" method="post" class="bg-white ">

                        <div className="row">
                            <div className="input-field col">
                                <i className="material-icons prefix">account_circle</i>
                                <input type="text" name="txtFirstName" placeholder="First Name" required
                                       pattern="[A-Za-z ]{1,}" title="firstname cannot contain numbers!" tabindex="1"
                                       style={style}
                                       onChange={(event)=>(
                                           this.handleDataChange("first_name",event.target.value)
                                       )}
                                       />
                            </div>
                            <div className="input-field col">
                                <i className="material-icons prefix">account_circle</i>
                                <input type="text" name="txtLastName" placeholder="Last Name" required
                                       pattern="[A-Za-z ]{1,}" title="lastname cannot contain numbers!" tabindex="1"
                                       style={style}
                                       onChange={(event)=>(
                                           this.handleDataChange("last_name",event.target.value)
                                       )}
                                       />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col">
                                <i className="material-icons prefix">date_range</i>
                                <input type="text" name="txtbirthdate" placeholder="Birth Date" style={style}
                                onChange={(event)=>(
                                           this.handleDataChange("birth_date",event.target.value)
                                       )}
                                />
                            </div>
                            <div className="input-field col">
                                <i className="material-icons prefix">home</i>
                                <input type="text" name="txtbirthplace" placeholder="Birth Place" style={style}
                                onChange={(event)=>(
                                           this.handleDataChange("birth_place",event.target.value)
                                       )}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col">
                                <i className="material-icons prefix">mail_outline</i>
                                <input type="email" name="emailaddress" placeholder="Email Address"
                                       title="Email must contain @ !" tabindex="1" style={style}
                                       onChange={(event)=>(
                                           this.handleDataChange("email",event.target.value)
                                       )}
                                       />
                            </div>
                        </div>

                        <div className="row">

                            <div className="col">
                                <p className="genderlable">Gender</p>
                            </div>


                            <div className="col">
                                <input id="male"
                                       type="radio"
                                       name="gender"
                                       value="M"
                                       checked={this.state.data.gender === 'M'}
                                       onChange={(event) => {
                                           this.handleDataChange('gender', event.target.value)
                                       }}
                                />
                                <label for="male">Male</label>

                            </div>
                            <div className="col">

                                <input id="female"
                                       type="radio"
                                       name="gender"
                                       value="F"
                                       checked={this.state.data.gender === 'F'}
                                       onChange={(event) => {
                                           this.handleDataChange('gender', event.target.value)
                                       }}
                                />
                                <label for="female">Female</label>

                            </div>


                        </div>

                        <div className="row">
                            <div className="col">
                                <p className="addresslable">Address</p>
                            </div>
                            <div className="input-field col">
                                <div className="form-group">
                                    {this.renderSelect('city', 'cities')}
                                </div>
                            </div>
                            <div className="input-field col">
                                <div className="form-group">
                                    {this.renderSelect('village', 'villages')}
                                </div>
                            </div>
                            <div className="input-field col">
                                <div className="form-group">
                                    {this.renderSelect('street', 'streets')}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p className="edulable">Educational Level</p>
                            </div>


                            <div className="col">
                                <input
                                    id="school"
                                    type="radio"
                                    name="leveledu"
                                    value="SCHOOL"
                                    checked={this.state.data.education_level === 'SCHOOL'}
                                    onChange={(event) => {
                                        this.handleDataChange('education_level', event.target.value)
                                    }}

                                />
                                <label for="school">School</label>

                            </div>
                            <div className="col">

                                <input id="university"
                                       type="radio"
                                       name="leveledu"
                                       value="UNIVERSITY"
                                       checked={this.state.data.education_level === 'UNIVERSITY'}
                                       onChange={(event) => {
                                           this.handleDataChange('education_level', event.target.value)
                                       }}
                                />
                                <label for="university">University</label>

                            </div>

                        </div>

                        <div className="row browse">
                            <div className="col">
                                <div className="file-field input-field">
                                    <div className="btn" id="browsebtn">
                                        <span>Browse</span>
                                        <input type="file" onChange={this.handleChange}/>
                                    </div>

                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text"
                                               placeholder="Upload Your Photo"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                {
                                    this.state.data.file !== null
                                    ?
                                        (
                                            <div className="Profileimage">
                                                <img id="image" src={this.state.data.file} alt="Your photo" width="100" height="100"/>
                                                <div className="Profileimagepopup">
                                                    <img src={this.state.data.file} width="300" height="200"/>
                                                    <div className="desc">Your Photo looks so beautiful !
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }
                            </div>

                        </div>

                        <div className="row">

                        </div>

                        {
                            this.state.data.education_level === 'SCHOOL'
                                ?
                                (
                                    <div id="sch">
                                        <div className="row">
                                            <div className="col"></div>
                                            <div className="col"><p className="schlable">School Information</p></div>
                                            <div className="col"></div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="input-field col">
                                                <div className="form-group">
                                                    <select className="form-control" id="sel4" style={style}>
                                                        <option value="" disabled selected>School</option>
                                                        {this.mapOptionsToSelect("schools")}

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input-field col">
                                                <div className="form-group">
                                                    <select className="form-control" id="sel5" style={style}>
                                                        <option value="" disabled selected>Class</option>
                                                        {this.mapOptionsToSelect("classes")}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                :
                                null
                        }

                        {
                            this.state.data.education_level === 'UNIVERSITY'
                                ?
                                (
                                    <div id="uni">

                                        <div className="row">
                                            <div className="col"></div>
                                            <div className="col"><p className="uninfolable">University Information</p>
                                            </div>
                                            <div className="col"></div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col">
                                                <input type="text" name="txtuniname" placeholder="University Name"
                                                       required
                                                       pattern="[A-Za-z ]{1,}"
                                                       title="University name cannot contain numbers!"
                                                       tabIndex="1" style={style}/>
                                            </div>
                                            <div className="input-field col">
                                                <input type="text" name="txtspec" placeholder="Specialization" required
                                                       pattern="[A-Za-z ]{1,}"
                                                       title="Specialization  cannot contain numbers!"
                                                       tabIndex="1" style={style}/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col">
                                                <input type="text" name="txtgraduatedschool"
                                                       placeholder="Graduated School" required
                                                       pattern="[A-Za-z ]{1,}"
                                                       title="Graduated school cannot contain numbers!"
                                                       tabIndex="1" style={style}/>
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
                                                <div className="form-group">
                                                    <select className="form-control" id="sel6" style={style}>
                                                        <option value="" disabled selected>Branch</option>
                                                        {this.mapOptionsToSelect("branches")}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col"></div>
                                            <div className="col"></div>

                                        </div>


                                    </div>
                                )
                                :
                                null
                        }


                    </form>
                </div>
            </div>


        )
    }


    mapOptionsToSelect = (key) => {

        if (this.state.options[key] === undefined) {
            return (
                <option value="" disabled selected>{key}</option>
            )
        } else {
            const options = this.state.options[key].map((obj) => {
                return (
                    <option value={obj}>{obj}</option>
                )
            });
            console.log(options);
            //<option value="" disabled selected>Street</option> +
            return options;
        }

    };

    handleDataChange = (key, value) => {

        this.setState({
            data: {
                ...this.state.data,
                [key]: value,
            }
        });
        let villages = [];
        let streets = [];
        let schools = [];
        let optionsObject = {};
        switch (key) {
            case 'city':
                villages = villagesData.villages[value];
                optionsObject = {
                    'villages': villages,
                    'streets': []
                };
                if (this.state.data.gender !== undefined) {
                    schools = schoolsData.schools[value][this.state.data.gender];
                    optionsObject['schools'] = schools;
                }
                this.updateLists(null, null, optionsObject);
                this.setState({
                    data: {
                        ...this.state.data,
                        [key]: value,
                        village: undefined,
                        street: undefined,
                    }
                });
                break;
            case 'village':
                streets = streetsData.streets[value];
                this.updateLists('streets', streets);
                this.setState({
                    data: {
                        ...this.state.data,
                        [key]: value,
                        street: undefined,
                    }
                });
                break;
            case 'gender':
                if (this.state.data.city !== undefined) {
                    schools = schoolsData.schools[this.state.data.city][value];
                    this.updateLists("schools", schools);
                }
                break;
        }
    };

    updateLists = (key, data, optionsObject = null) => {
        optionsObject !== null
            ?
            (this.setState({
                options: {
                    ...this.state.options,
                    ...optionsObject
                }
            }))
            :
            (this.setState({
                options: {
                    ...this.state.options,
                    [key]: data
                }
            }))
    };

    renderSelect = (dataKey, optionsKey) => {
        return (
            <select value={this.state.data[dataKey]}
                    className="form-control"
                    id={dataKey}
                    onChange={
                        (event) => {
                            this.handleDataChange(dataKey, event.target.value)
                        }
                    }
            >
                <option value="" disabled selected={this.state.data[dataKey] === undefined}>{dataKey}</option>
                {this.mapOptionsToSelect(optionsKey)}
            </select>
        )
    }
}


export default infoform;

