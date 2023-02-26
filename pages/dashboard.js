import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  const logOut = () => {
    Cookies.remove("loggedin");
    router.push("/");
  };

  return (
    <main>
      <section className="dashboard">
        <h1>Welcome to home page. You Are Logged In!</h1>
        <button className="button" type="submit" onClick={() => logOut()}>
          Log Out
        </button>
      </section>
    </main>
  );
};

export default Dashboard;
