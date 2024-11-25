import './App.css'

export function App (){

    return(

          <article className='md-followCard'>
                <header className='md-followCard-header'>
                    <img alt="El avatar de fabio" src="https://avatars.githubusercontent.com/u/70769049?v=4&size=64"/>
                    <div>
                    <strong className='md-followCard-strong'>Fabio Urrea Q.</strong>
                    <span className='md-followCard-span'>@f.urrea.saf@gmail.com</span>
                    </div>
                </header>
                
                <aside className='md-followCard-aside'>
                    <button className='md-followCard-button'>
                        seguir
                    </button>
                </aside>
          </article>
    )

}