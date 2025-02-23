export default function Hero() {
    return (
        <>
            <h1>Coffee Tracking for Coffee <abbr title ="An enthusiast or devotee">Fiends</abbr>!</h1>
            <div className = "benefits-list">
                <h3 className = "font-bolder">Try <span className= "text-gradient">Caffiend</span> and start ...</h3>
                <p>✅ Tracking ever coffee</p>
                <p>✅ Measuring your blood caffeine levels</p>
                <p>✅ Costing and quantifying your addiction</p>
            </div>
            <div className = "card info-card">
                <div>
                    <i className="fa-solid fa-circle-info"></i>
                    <h3>Did you know...</h3>
                </div>
                {/* &appos; is how you add an html recognized ' */}
                <h5>That caffeine&apos;s half-liofe is about 5 hours?</h5>
                <p>
                    This means thaT after 5 hoursm half the caffeine you consumed is still in your system, keeping you alert longer!
                    So if you drink a cup of coffee with 200mg of caffeinem 5 hours later you&apos;ll still have about 100mg of 
                    caffeine in your system.
                </p>
            </div>
        
        </>
    )
}