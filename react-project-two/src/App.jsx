import UserCard from "./components/UserCard"
import dubey from "./assets/dubey.jpg"
import shiv from "./assets/shiv.jpg"
import sun from "./assets/sun.jpg"

function App() {
  return (
   <div className="container">
   <UserCard name="Satyam"  desc="I'm Pro devloper in UAS" image={dubey} style={{"border-radius":"10px"}} />
   <UserCard name="shivam"  desc="I'm govrment Empoloye" image={shiv} style={{"border-radius":"10px"}} />
   <UserCard name="sundram" desc="I'm successfull Business man" image={sun} style={{"border-radius":"10px"}} />
   </div>
  )
}

export default App
