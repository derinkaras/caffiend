import CoffeeForm from "./components/CoffeeForm" 
import History from "./components/History"
import Layout from "./components/Layout"
import Stats from "./components/Stats"
import Hero from "./components/Hero"  
import { useAuth } from "./context/AuthContext"
import { coffeeConsumptionHistory } from "./utils"

function App() {
  const {globalUser, globalData, isLoading} = useAuth()
  const isAuthenticated = globalUser
  const isData = globalData && !!Object.keys(globalData || {}).length // Basically we need global data and we need a length for the global data to be > 1 to consider we have data, the double !! forces anything that could be truthy or falsy to a boolean val 0 is false > 0 is true



  const authenticatedContent = (
    <>
      <Stats/>
      <History/>
    </>
  )

  return (
    // Reusable component for multiple pages  + This is a new way of passing props, you pass it as children to the component
    <Layout>  
      {/* Self closing to show it intentionally doesn't have any children element  */}
      <Hero />
      <CoffeeForm isAuthenticated = {isAuthenticated}/>
      { (isAuthenticated && isLoading) && (
        <p>Loading data...</p>
      )}
      {/*Conditional rendering in jsx, if the user is authenticated then it shows the authenticated content */}
      {(isAuthenticated && isData) && (authenticatedContent)} 
    </Layout>
 
  )
}

export default App
