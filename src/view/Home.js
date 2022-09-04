import React, { useState } from 'react';

function Home() {
    const[input, setinput] = useState({email:'',weight:0,height:0});
  const handleSubmit  = (e) => {
    localStorage.setItem('user', JSON.stringify(input));
    e.preventDefault();
    e.target.reset()
  }
  const inputsHandler = (e) =>{
    setinput({...input,[e.target.name]: e.target.value });
    e.preventDefault();
  }
  return (
    <div>
        Home
      <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="row pt-5 mx-auto">
            <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="อีเมล" name="email" onChange={inputsHandler}/>
                </div>
                <div className="col-8 form-group mx-auto">
                    <input type="number" className="form-control" placeholder="น้ำหนัก" name="weight" onChange={inputsHandler}/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="number" className="form-control" placeholder="ส่วนสูง" name="height" onChange={inputsHandler}/>
                </div>
                <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="submit"></input>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
