import React from 'react'

function Nav() {
    const categories = [
        {
            name: 'Graphic Design',
            description: 'My graphic design work',
        },
        {    
            name: 'Web Development',
            description: 'My web development work'
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

  return (
    <header>
        <h2>
            <a href='/'>
                Trae Valdez
            </a>
        </h2>
        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='#about'>
                        About Me
                    </a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {categories.map((category) => (
                    <li
                    className='mx-1'
                    key = {category.name}
                    >
                        <span onClick={categorySelected}>
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>

  )
}

export default Nav;