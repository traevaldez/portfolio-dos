import React from 'react'

function Projects(props) {
    const currentCategory = {
        name: 'graphic design',
        description: 'My graphic design work',
    };

  return (
    <section>
        <h1>{currentCategory.name}</h1>
        <p>{currentCategory.name}</p>
    </section>
  )
}

export default Projects;