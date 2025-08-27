// src/App.jsx
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <h1>User Profiles</h1>

      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Software engineer who enjoys cooking and traveling" 
      />

      <UserProfile 
        name="Charlie" 
        age="28" 
        bio="Passionate about music and outdoor adventures" 
      />
    </div>
  );
}

export default App;
