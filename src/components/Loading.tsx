const Loading = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center' style={{background: 'var(--bg)'}}>
            <div className="terminal-text text-center">
                <p className="text-2xl font-bold" style={{color: 'var(--amber)'}}>VM<span style={{color: 'var(--text-muted)'}}>_</span></p>
                <p className="text-sm mt-4" style={{color: 'var(--text-muted)'}}>
                    <span style={{color: 'var(--amber)'}}>$</span> loading...
                    <span className="inline-block w-2 h-4 ml-1" style={{
                        background: 'var(--amber)',
                        animation: 'blink 1s step-end infinite'
                    }}/>
                </p>
            </div>
        </div>
    )
}

export default Loading;
