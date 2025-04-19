

const navbar = `
<nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="#">
                  <img src="assets/img/logo.png" class="img-fluid" width="50px" alt=""> Safe Carz
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                           Insurance Companies
                        </a>
                        <ul class="dropdown-menu">
                            <li class="nav-item dropend">
                                <a class="nav-link dropdown-toggle" href="plan-zurich.html">
                                    Zurich Insurance
                                </a>
                               
                            </li>
                            <li class="nav-item dropend">
                                <a class="nav-link dropdown-toggle" href="plan-reliance.html" >
                                    Reliance Insurance
                                </a>
                            </li>
                            <li class="nav-item dropend">
                                <a class="nav-link dropdown-toggle" href="plan-hdfc.html" >
                                    HDFC Ergo
                                </a>
                              
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about-us.html">about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true"></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

let getNavbar = document.getElementById("navbar");
getNavbar.innerHTML = navbar;


const footer = ` 

<footer class="footer">
        <div class="container">
            <div class="row">

                <div class="col-md-3">
                    <h5 class="text-white fw-bold">Safe Carz</h5>
                    <p class="small">Drive confidently with affordable and reliable car insurance. Your safety is our
                        priority.</p>
                </div>

                <div class="col-md-3">
                    <h6 class="fw-bold text-white">Navigation</h6>
                    <ul class="list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about-us.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h6 class="fw-bold text-white">Partners</h6>
                    <ul class="list-unstyled">
                        <li><a href="plan-zurich.html">Zurich Insurance</a></li>
                        <li><a href="plan-reliance.html">Reliance Insurance</a></li>
                        <li><a href="plan-hdfc.html">HDFC Ergo</a></li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h6 class="fw-bold text-white">Connect with us</h6>
                    <div class="social-icons mt-2">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

            </div>

            <div class="footer-bottom mt-4">
                &copy; 2025 Safe Carz. All rights reserved.
            </div>
        </div>
    </footer>
`
let getfooter = document.getElementById("footer");
getfooter.innerHTML = footer;

const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});


const plansHdfc = [
    {
        id: 1,
        planName: "HDFC Ergo Rider Plan",
        vehicleType: "Two Wheeler",
        basePrice: "$25",
        summary: "Instant online claim approval, theft & accident covered.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Roadside Assistance", "Personal Accident Cover"],
        claimSettlementRatio: "96%",
        customerSupport: "24x7 Helpline",
        exclusions: ["Mechanical breakdown", "Racing damage"],
        idvRange: "$240 - $960",
        renewalBenefits: ["No Claim Bonus up to 50%"]
    },
    {
        id: 2,
        planName: "HDFC Complete Car Plan",
        vehicleType: "Four Wheeler",
        basePrice: "$90",
        summary: "Bumper-to-bumper cover with zero paperwork.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Zero Depreciation", "Engine Protection"],
        claimSettlementRatio: "94%",
        customerSupport: "Dedicated Car Support Team",
        exclusions: ["Wear & tear", "Drunk driving damage"],
        idvRange: "$3010 - $12050",
        renewalBenefits: ["Free Car Wash Coupon", "NCB Retention"]
    },
    {
        id: 3,
        planName: "HDFC Supreme EV Plan",
        vehicleType: "Four Wheeler (Electric)",
        basePrice: "$99",
        summary: "Best plan for EVs, battery & fire covered.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Battery Replacement Cover", "Charging Station Coverage"],
        claimSettlementRatio: "97%",
        customerSupport: "EV Specialist Team Support",
        exclusions: ["Self-inflicted damage", "Unauthorized usage"],
        idvRange: "$3615 - $18070",
        renewalBenefits: ["Battery Checkup Coupon", "NCB up to 50%"]
    },
    {
        id: 4,
        planName: "HDFC Bike Secure+",
        vehicleType: "Two Wheeler",
        basePrice: "$25",
        summary: "Cashless claims and roadside assistance.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Helmet Cover", "Pillion Cover"],
        claimSettlementRatio: "95%",
        customerSupport: "Bike Support Team",
        exclusions: ["Racing", "Unlicensed driving"],
        idvRange: "$360 - $1205",
        renewalBenefits: ["NCB Transferable", "Free Chain Lubing"]
    }
];
const plansReliance = [
    {
        id: 1,
        planName: "Reliance Smart Drive",
        vehicleType: "Four Wheeler",
        basePrice: "$70",
        summary: "Fast claim process, covers accidents and theft.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Third-Party Cover", "Accident Cover", "Online Claims"],
        claimSettlementRatio: "92%",
        customerSupport: "24/7 Support & App Assistance",
        exclusions: ["Illegal racing", "Mechanical failure"],
        idvRange: "$2400 - $10840",
        renewalBenefits: ["NCB up to 50%", "Loyalty Discount"]
    },
    {
        id: 2,
        planName: "Reliance Bike Easy Plan",
        vehicleType: "Two Wheeler",
        basePrice: "$25",
        summary: "Inexpensive and reliable protection for bikes.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Helmet Cover", "Pillion Insurance", "Natural Calamity Coverage"],
        claimSettlementRatio: "93%",
        customerSupport: "Bike Insurance Helpline",
        exclusions: ["Off-roading damage", "Unlicensed rider"],
        idvRange: "$240 - $1025",
        renewalBenefits: ["NCB Transfer", "Zero Paper Renewal"]
    },
    {
        id: 3,
        planName: "Reliance Zero Dep Plan",
        vehicleType: "Four Wheeler",
        basePrice: "$107",
        summary: "No depreciation, free pickup and drop.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Zero Depreciation", "Doorstep Pickup & Drop", "Cashless Garage Network"],
        claimSettlementRatio: "95%",
        customerSupport: "Premium Claims Desk",
        exclusions: ["Electrical failure", "Violation of traffic rules"],
        idvRange: "$4215 - $13250",
        renewalBenefits: ["NCB Boost", "Free Service Check"]
    },
    {
        id: 4,
        planName: "Reliance Highway Rescue",
        vehicleType: "Four Wheeler",
        basePrice: "$77",
        summary: "Includes towing, battery jumpstart, fuel delivery.",
        coverageDuration: "1 Year",
        addOnBenefits: ["24x7 Roadside Assistance", "Flat Tyre Repair", "Towing up to 50 km"],
        claimSettlementRatio: "91%",
        customerSupport: "Highway Emergency Helpline",
        exclusions: ["Out-of-service zone support", "Vehicle misuse"],
        idvRange: "$3010 - $12050",
        renewalBenefits: ["Free Towing Renewal", "Loyalty Bonus"]
    }
];
const plansZurich = [
    {
        id: 1,
        planName: "Zurich Basic Car Protect",
        vehicleType: "Four Wheeler",
        basePrice: "$78",
        summary: "Affordable car plan with third-party liability and own-damage cover.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Personal Accident Cover", "Third-Party Liability"],
        claimSettlementRatio: "93%",
        customerSupport: "24x7 Claims Assistance",
        exclusions: ["Drunk driving", "Wear and tear"],
        idvRange: "$2400 - $9650",
        renewalBenefits: ["No Claim Bonus up to 50%", "Online Renewal Discount"]
    },
    {
        id: 2,
        planName: "Zurich Two Wheeler Shield",
        vehicleType: "Two Wheeler",
        basePrice: "$28",
        summary: "Covers theft, accident, and natural calamities for bikes/scooters.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Helmet Damage Cover", "Pillion Rider Cover"],
        claimSettlementRatio: "94%",
        customerSupport: "Bike Insurance Helpline",
        exclusions: ["Unauthorized racing", "Intentional damage"],
        idvRange: "$300 - $1080",
        renewalBenefits: ["NCB Retention", "Free Towing Up to 20 km"]
    },
    {
        id: 3,
        planName: "Zurich Premium Auto Plus",
        vehicleType: "Four Wheeler",
        basePrice: "$112",
        summary: "Zero depreciation and roadside assistance included.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Zero Depreciation Cover", "24x7 Roadside Assistance", "Engine Protection"],
        claimSettlementRatio: "95%",
        customerSupport: "Premium Customer Care",
        exclusions: ["Mechanical breakdown", "Driving without valid license"],
        idvRange: "$3615 - $14450",
        renewalBenefits: ["NCB Booster", "Free Tyre Replacement Offer"]
    },
    {
        id: 4,
        planName: "Zurich EV Secure",
        vehicleType: "Four Wheeler (Electric)",
        basePrice: "$94",
        summary: "Tailored for electric cars, battery damage and towing covered.",
        coverageDuration: "1 Year",
        addOnBenefits: ["Battery Replacement", "Charging Station Network Access"],
        claimSettlementRatio: "96%",
        customerSupport: "EV Support Desk",
        exclusions: ["Battery degradation", "Using non-certified chargers"],
        idvRange: "$4820 - $16870",
        renewalBenefits: ["Battery Health Report", "NCB Up to 50%"]
    }
];

