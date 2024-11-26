
export function TwitterFollowCard ({userName, name, isFollowing}){

    

    return(

          <article className='md-followCard'>
                <header className='md-followCard-header'>
                    <img alt="El avatar de fabio" src={'https://avatars.githubusercontent.com/u/70769049?v=4&size=64${userName}'}/>
                    <div>
                    <strong className='md-followCard-strong'>{name}</strong>
                    <span className='md-followCard-span'>@{userName}</span>
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