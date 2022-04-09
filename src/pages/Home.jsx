import $ from 'jquery';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        $('input').focus(function () {
            console.log("Focused");
            $(this).parents('.form-group').addClass('focused');
        });

        $('input').blur(function () {
            var inputValue = $(this).val();
            if (inputValue == "") {
                $(this).removeClass('filled');
                $(this).parents('.form-group').removeClass('focused');
            } else {
                $(this).addClass('filled');
            }
        })
    }, [])


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
                    <div className="form-wrapper">

                        <form action="" className="form">
                            <div className="form-group">
                                <label className="form-label" htmlFor="first">Email Address</label>
                                <input id="first" className="form-input" type="text" />
                            </div>

                        </form>
                    </div>
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