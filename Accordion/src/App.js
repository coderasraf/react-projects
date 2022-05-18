import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
function App() {

const [Questions, setQuestions] = useState(data)
  return <main>
    <div className='container'>
      <h3>Question and answer about login</h3>

      <section className='info'>
        {Questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />
        })}
      </section>
    </div>
  </main>
}

export default App;
