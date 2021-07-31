import logo from './logo.svg';
import './App.css';

const users = [
{
  name:"ajayraj",
  email:"ajayraj@gmail.com",
  age:20

},
{
  name:"raj",
  email:"raj@gmail.com",
  age:21

},
{
  name:"ajay",
  email:"ajay@gmail.com",
  age:22

},
]


function UserDetails(){

return(
<div>
      <h1>Hello World!!</h1> 
      <h4>
        {
          users.map((user)=>{
            return <p>{user.name}</p>
          })
        }
      </h4>
      </div>
)
}



function App() {
   
  return (
    <h1>{UserDetails()}</h1>
  );
}

export default App;
