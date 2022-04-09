export default function Home() {
    return (
        <>
            <div className="wrapper">
                <Header />
                {/* Banner Section */}
                <section className="banner">
                    <div className="overlay-backgroud">
                        <img srcSet="/images/netflix_bg.jpeg" alt="" />
                    </div>
                    <h1>Unlimited movies, TV<br />shows, and more.</h1>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </section>
            </div>
        </>
    );
}

const Header = () => {
    return <header className="d-flex justify-content-between align-items-start" >
        <img src="/images/netflix.svg" alt="Netflix" />
        <a href="#"> Sign In </a>
    </header>
}