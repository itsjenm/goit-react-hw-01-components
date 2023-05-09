import Profile from "./Profile";
import profileData from '../data/data.json'
import statData from '../data/statistics.json'
import Statistics from "./Statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile data={profileData} />
    <Statistics title="Upload stats" stats={statData} />
    </div>
  );
};
