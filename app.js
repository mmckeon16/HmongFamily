const { useState, useEffect } = React;

function App() {
    const [currentDonation, setCurrentDonation] = useState(202);
    const [goalAmount] = useState(3500);
    const [progressPercentage, setProgressPercentage] = useState(0);

    useEffect(() => {
        // Simulate progress animation
        const timer = setTimeout(() => {
            setProgressPercentage((currentDonation / goalAmount) * 100);
        }, 500);
        return () => clearTimeout(timer);
    }, [currentDonation, goalAmount]);

    const handleDonationClick = (amount) => {
        alert(`Thank you for your interest in donating $${amount}! Please contact us for donation details.`);
    };

    return (
        <div className="container">
            <header className="header">
                <div className="campaign-tag">
                    <i className="fas fa-heart"></i>
                    <span>Humanitarian Campaign</span>
                </div>
                <h1>Helping Hmong Family in Northern Thai Village</h1>
                <p>Every contribution brings us closer to rebuilding their home and securing a better future.</p>
            </header>

            <main className="main-content">

                <section className="video-section">
                    <h2 className="section-title">See Their Story</h2>
                    <div className="video-container">
                        <video 
                            controls 
                            width="100%" 
                            height="auto"
                        >
                            <source src="Hmongfamily.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="section-title">About This Campaign</h2>
                    <div className="content-text">
                        <p>This campaign aims to help a Hmong family in a remote northern Thai village. They live in extremely poor conditions, and your donation will go directly toward rebuilding their home and providing essential resources. Updates, photos, and receipts will be shared here to ensure transparency.</p>
                        
                        <p>Every cent donated will go directly to materials for the home, bags of concrete (that can be delivered to the village) to replace the dirt floor, and proper blocks for the walls that will basically turn it from a temporary structure into a home. The wonderful news is that villagers can perform the labor once I secure the investment towards the materials.</p>
                    </div>

                    <div className="highlight-box">
                        <h3>Enable Education</h3>
                        <p>If we manage to secure enough funds, then we can also send the daughter to a proper school — I have been told she would like to be a nurse in the future.</p>
                    </div>

                    <div className="content-text">
                        <p>The husband has abandoned this family, and sadly, 5 kids are living there — you can see the baby in the video. Rest assured I will personally travel to the village on any of my time off from teaching. I have already given some funds for rice and pork, but food isn't the issue — the upcoming winter in the mountains is coming soon.</p>
                        
                        <p>I will photo and video the progress, and no actual money will go to the family; instead, materials will be bought and delivered so we can rest assured all will be done with integrity.</p>
                    </div>

                    <div className="highlight-box">
                        <h3>Target Goal: $3,500 USD</h3>
                        <p>Even if we fall short of that target we can totally change the lives of this family. As a side note, I am planning on having the water tested as well, as there are signs of possible runoff contamination.</p>
                    </div>

                    <div className="content-text">
                        <p>Finally, I would like to tell you how this is an incredibly special village of loving families, and I personally am committed to finding a way to help this particular family. Your loving generosity is the key, and if you cannot help, I totally understand — but perhaps you know someone who can. Either way, thank you so much, and God bless you for taking the time.</p>
                    </div>
                </section>

                <section className="goal-section">
                    <div className="goal-amount">${currentDonation.toLocaleString()}</div>
                    <div className="goal-label">Raised of ${goalAmount.toLocaleString()} Goal</div>
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                    <p>Your support makes all the difference</p>
                </section>

                <section className="donation-section">
                    <h3>How You Can Help</h3>
                    {/* <p>Choose an amount that works for you, or contact us for custom donation options</p>
                    
                    <div className="donation-options">
                        <div className="donation-option" onClick={() => handleDonationClick(25)}>
                            <div className="donation-amount">$25</div>
                            <div className="donation-description">Concrete bags</div>
                        </div>
                        <div className="donation-option" onClick={() => handleDonationClick(50)}>
                            <div className="donation-amount">$50</div>
                            <div className="donation-description">Building blocks</div>
                        </div>
                        <div className="donation-option" onClick={() => handleDonationClick(100)}>
                            <div className="donation-amount">$100</div>
                            <div className="donation-description">Roof materials</div>
                        </div>
                        <div className="donation-option" onClick={() => handleDonationClick(250)}>
                            <div className="donation-amount">$250</div>
                            <div className="donation-description">Complete wall section</div>
                        </div>
                        <div className="donation-option" onClick={() => handleDonationClick(500)}>
                            <div className="donation-amount">$500</div>
                            <div className="donation-description">School tuition fund</div>
                        </div>
                    </div>
                     */}
                    <p>All donations are used directly for materials and resources</p>
                    <div className="qrCodeContainer">
                        <img src="qr-code.jpg" alt="donate here"/>
                        <p>Scan to donate</p>
                    </div>
                    {/* <p>Or click here to donate <a href="https://www.paypal.com/paypalme/msuffici">https://www.paypal.com/paypalme/msuffici</a></p> */}
                </section>

                <section className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>For donation details, updates, or questions about this campaign</p>
                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>Email us for donation information</span>
                        </div>
                        {/* <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>Contact for phone details</span>
                        </div> */}
                        {/* <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Northern Thai Village Project</span>
                        </div> */}
                    </div>
                </section>
            </main>

            {/* <footer className="footer">
                <p>&copy; 2024 Hmong Family Fundraiser. All donations go directly to materials and resources for the family.</p>
            </footer> */}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root')); 