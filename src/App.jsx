import Profile from "./components/Profile";
import profileData from './data/data.json';
import statData from './data/statistics.json';
import Statistics from "./components/Statistics";
import FriendsList from "components/FriendsList";
import friendData from './data/friends.json';
import TransactionHistory from "components/Transaction";
import transactions from './data/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile data={profileData} />
    <Statistics title="Upload stats" stats={statData} />
    <FriendsList friends={friendData}/>
    <TransactionHistory items={transactions} />
    </div>
    
  );
};
