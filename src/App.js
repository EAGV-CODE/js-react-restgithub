import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import ReactTable from "react-table";
//import 'react-table/react-table.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {keyword: '', data: [] };
  }
  
  
  fetchData = () => {
    //REST API call comes here
    const url =`https://api.github.com/search/repositories?q=${this.state.keyword}`;
    fetch(url).then(response => response.json()).then(responseData => {this.setState({data : responseData.items});
    });
  }

  handleChange = (e) => {
    this.setState({keyword: e.target.value});
  }
  
  render() {
   /*const columns = [{
    Header: 'Name', //Header of the column
    accessor: 'full_name',  //Value accessor
    }, {
    Header: 'URL', 
    accessor: 'html_url',
    }, {
    Header: 'Owner',
    accessor: 'owner.login',
    },{
    id: 'button',
    sortable: false,
    filterable: false,
    width:100,
    accessor: 'full_name',
    Cell: ({value}) => (<button className="btn btn-default btn-link" onClick = {() => {this.btnClick(value)}}>Press me</button>)
    }]*/

    const tableRows = this.state.data.map((item, index) =>
      <tr key={index}><td>{item.full_name}</td>
    <td><a href={item.html_url}>{item.html_url}</a></td></tr>);
     
     
     return (
      <div className="App"> 
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.fetchData} value={this.state.keyword}> Fetch </button>
        <table><body>{tableRows}</body></table>
      </div>    
    );

    /*return (
      <div className="App"> 
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.fetchData} value={this.state.keyword}>Fetch</button>
        <ReactTable
          data={this.state.data}
          columns={columns}
          filterable={true}
          defaultPageSize ={10}
        />
      </div>
    );*/


  }
}

export default App;
