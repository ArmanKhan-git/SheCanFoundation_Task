import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { state } = useLocation(); 

  if (!state) return <p className="p-6 text-red-500">User not found</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome, {state.name}</h2>
      <p>Referral Code: <strong>{state.referralCode}</strong></p>
      <p>Total Donations Raised: ₹{state.donationsRaised}</p>
    </div>
  );
};

export default Dashboard;
