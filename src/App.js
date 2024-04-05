import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCogs } from "@fortawesome/free-solid-svg-icons";
import TabBar from "./components/TabBar";
import BuildOrg from "./components/BuildOrg";
import AdminMang from "./components/AdminMang";

function App() {
  const tabs = [
    { name: "all", title: "All People" },
    { name: "groups", title: "Groups" },
    { name: "events", title: "Managed Events", isBeta: true }
  ];
  return (
    <div className='relative App'>
      <button className='absolute right-0 p-4 text-sm font-light -rotate-90 border top-48 shadow-3xl shadow-gray-600 text-slate-500 rounded-t-md sm:top-1/2'>
        FeedBack
      </button>
      <button className='absolute hidden p-4 text-sm font-light text-white rounded-lg sm:hidden 2xl:block sm:right-5 sm:top-3/4 bg-slate-800'>
        Getting Started
      </button>
      <div className='flex flex-col items-center justify-top'>
        <div className='w-full text-left max-w-7xl '>
          <Navbar />
          <AdminMang />
          <TabBar tabs={tabs} />
          <div className='flex justify-center mt-8 mb-5 text-center sm:mb-28'>
            <BuildOrg />
          </div>
          <div className='sm:flex sm:gap-7'>
            <Cards
              icon={<FontAwesomeIcon icon={faCalendarAlt} size='2x' />}
              title='Round Robin Scheduling'
              description='Automatically assign meetings based on what makes the most sense for your team’s goals — whether by availability, priority, or equity.'
              cta={
                <button className='inline-block py-2 mt-3 text-blue-500 rounded focus:outline-none'>
                  Watch Video
                </button>
              }
            />
            <Cards
              icon={<FontAwesomeIcon icon={faCogs} size='2x' />}
              title='Access Powerful Management Tools'
              description='Get new and existing users up to speed and engaged with event type
templates to make sure everyone’s set up for efficient scheduling.'
              cta={
                <button className='inline-block py-2 mt-3 text-blue-500 rounded focus:outline-none'>
                  Watch Video
                </button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
