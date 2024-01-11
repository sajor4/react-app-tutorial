import '../styles/App.css'

export function App() {
    return (
       <article>
        <header>
            <div className='img-container'>
            <img src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4" alt="avatar" />
            </div>
        <div>
            <strong className='name'>Miguel Angel</strong>
            <span className='username'>@elloco</span>
        </div>
        </header>
        <aside>
            <button>Segui</button>
        </aside>
       </article>
    )
}