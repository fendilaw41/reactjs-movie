import React from 'react';
import './App.css';
import movie from './api/movie'
import ClassComponent from './components/ClassComponent';
import Header from './components/Header';



//ini App adalah react Component
class App extends React.Component { 
 
  state = { 
    movies: [], //ini untuk menampung data awal movies
    input: '',  //ini untuk menampung data awal input
   };
   
  onSearchSubmit = async (event) => {

    event.preventDefault(); //ini untuk event submit tanpa harus button submit
    const response = await movie.get(`/movies?Year=2015`); //ini untuk menampung data awal lanjutan dari api/movies
    const responseJson = response.data.data; //ini untuk menampung data response
    console.log(responseJson);
    this.setState({movies: responseJson}); //ini untuk menampung dan menggabungkan data awal movies dan respon json
  }
  

 render(){
  return (
    <div className="container ">
        <Header />
        <div className='container mt-4'>
          <div className='col col-sm-4 '>
            <form className="d-flex" onSubmit={this.onSearchSubmit}>    {/* ini adalah untuk submit / form action */}
          
              <div className="navbar-nav me-auto mt-5">
              <label> Movies Search</label>
              <input type="number"  value={this.state.input} onChange={e => this.setState({input: e.target.value})} />
              {/* state input untuk menampung state setelah aksi ketik data di form input */}
              {/* this setState adalah nilai yang di ubah dari state awal input: '' menjadi e.target.value */}
              </div>
            </form>
          <ClassComponent movies={this.state.movies} />
          {/* movies ini adalah state yang akan di kirim ke child yaitu classComponent  */}
          </div>
        </div>
    </div>
  );
 }
}

export default App;
