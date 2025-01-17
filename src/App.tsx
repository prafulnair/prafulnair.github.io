// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// function App() {
//   return (
//     <div style={{ textAlign: 'center', padding: '50px' }}>
//       <h1>Welcome to My Portfolio</h1>
//       <p>Due to some ongoing improvements, this portfolio is currently under construction.</p>
//       <h1>🚧 Portfolio Under Construction 🚧</h1>
//       <p style={{ maxWidth: '600px', margin: 'auto', lineHeight: '1.6' }}>
//       Hi there! Thanks for stopping by. I’m currently rebuilding my portfolio website from scratch to better showcase my skills and projects. The original site had to be removed due to deployment issues with GitHub Pages, so I’m taking this opportunity to create a complete overhaul.        Please check back soon for updates or feel free to connect with me on{' '}
//         <a href="https://linkedin.com/in/praful-nair-3a5a87181" target="_blank" rel="noopener noreferrer">LinkedIn</a> in the meantime.
//       </p>
//       <p>— Praful</p>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to My Portfolio</h1>
      <p>Due to some ongoing improvements, this portfolio is currently under construction.</p>
      <h1>🚧 Portfolio Under Construction 🚧</h1>
      <p style={{ maxWidth: '600px', margin: 'auto', lineHeight: '1.6' }}>
        Hi there! Thanks for stopping by. I’m currently rebuilding my portfolio website from scratch to better showcase my skills and projects. The original site had to be removed due to deployment issues with GitHub Pages, so I’m taking this opportunity to create a complete overhaul. Please check back soon for updates or feel free to connect with me on{' '}
        <a
          href="https://linkedin.com/in/praful-nair-3a5a87181"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        in the meantime.
      </p>
      <p>— Praful</p>

      {/* Quote Section */}
      <blockquote
        style={{
          fontStyle: 'italic',
          fontSize: '1.5rem',
          margin: '20px auto',
          maxWidth: '600px',
          color: '#555',
          borderLeft: '4px solid #ccc',
          paddingLeft: '15px',
        }}
      >
        "A portfolio may impress, but a well-placed semicolon saves the day..."
      </blockquote>


    </div>
  );
}

export default App;




