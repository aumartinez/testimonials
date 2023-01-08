import './App.css';
import { Testimony } from './components/testimonials/testimonials.js'

function App() {
  const seed = [
    {
      name : 'Shawn Wang',
      country : 'Singapore',
      img : 'imgs/t-shawn.png',
      position : 'Software Engineer',
      company : 'Amazon',
      quote : "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
    },
    {
      name : 'Sarah Chima',
      country : 'Nigeria',
      img : 'imgs/t-sarah.png',
      position : 'Software Engineer',
      company : 'ChatDesk',
      quote : "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
    },
    {
      name : 'Emma Bostian',
      country : 'Sweden',
      img : 'imgs/t-emma.png',
      position : 'Software Engineer',
      company : 'Spotify',
      quote : "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
    }
  ];
  return (
    <div className='app'>
      <div className='container'>
        <h1>
          Here is what our alumni say about freeCodeCamp:
        </h1>
        {
          seed.map((item, idx) => {
            return (
              <Testimony 
              key = {idx}
              name = {item.name}
              country = {item.country}
              img = {item.img}
              position = {item.position}
              company = {item.company}
              quote = {item.quote}
              />
            )
          })
        }
      </div>      
    </div>
  );
}

export default App;
