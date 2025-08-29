// Vehicle data with European specifications and Euro pricing
const vehicles = [
    {
        name: "Tesla Model 3",
        category: "sedan",
        batteryCapacity: 75,
        range: 358,
        efficiency: 25,
        price: "€42,990",
        chargingSpeed: "250 kW",
        acceleration: "3.1s",
        topSpeed: "261 km/h",
        icon: "🚗"
    },
    {
        name: "Tesla Model Y",
        category: "suv",
        batteryCapacity: 75,
        range: 330,
        efficiency: 28,
        price: "€48,740",
        chargingSpeed: "250 kW",
        acceleration: "3.5s",
        topSpeed: "250 km/h",
        icon: "🚙"
    },
    {
        name: "Volkswagen ID.3",
        category: "sedan",
        batteryCapacity: 77,
        range: 340,
        efficiency: 26,
        price: "€39,995",
        chargingSpeed: "125 kW",
        acceleration: "7.3s",
        topSpeed: "160 km/h",
        icon: "🌍"
    },
    {
        name: "Volkswagen ID.4",
        category: "suv",
        batteryCapacity: 82,
        range: 275,
        efficiency: 29,
        price: "€44,790",
        chargingSpeed: "135 kW",
        acceleration: "7.1s",
        topSpeed: "180 km/h",
        icon: "🌍"
    },
    {
        name: "BMW i4",
        category: "luxury",
        batteryCapacity: 83.9,
        range: 301,
        efficiency: 27,
        price: "€52,200",
        chargingSpeed: "200 kW",
        acceleration: "3.9s",
        topSpeed: "200 km/h",
        icon: "🏎️"
    },
    {
        name: "BMW iX",
        category: "luxury",
        batteryCapacity: 111.5,
        range: 380,
        efficiency: 30,
        price: "€84,100",
        chargingSpeed: "200 kW",
        acceleration: "4.6s",
        topSpeed: "200 km/h",
        icon: "🏎️"
    },
    {
        name: "Mercedes EQS",
        category: "luxury",
        batteryCapacity: 107.8,
        range: 350,
        efficiency: 30,
        price: "€102,310",
        chargingSpeed: "200 kW",
        acceleration: "3.8s",
        topSpeed: "210 km/h",
        icon: "⭐"
    },
    {
        name: "Mercedes EQB",
        category: "suv",
        batteryCapacity: 66.5,
        range: 260,
        efficiency: 28,
        price: "€54,500",
        chargingSpeed: "100 kW",
        acceleration: "8.0s",
        topSpeed: "160 km/h",
        icon: "⭐"
    },
    {
        name: "Audi Q4 e-tron",
        category: "suv",
        batteryCapacity: 82,
        range: 300,
        efficiency: 28,
        price: "€47,500",
        chargingSpeed: "125 kW",
        acceleration: "6.2s",
        topSpeed: "180 km/h",
        icon: "🏎️"
    },
    {
        name: "Hyundai Ioniq 5",
        category: "suv",
        batteryCapacity: 77.4,
        range: 303,
        efficiency: 26,
        price: "€44,450",
        chargingSpeed: "350 kW",
        acceleration: "5.0s",
        topSpeed: "185 km/h",
        icon: "🔋"
    },
    {
        name: "Kia EV6",
        category: "suv",
        batteryCapacity: 77.4,
        range: 310,
        efficiency: 26,
        price: "€45,600",
        chargingSpeed: "350 kW",
        acceleration: "5.1s",
        topSpeed: "185 km/h",
        icon: "⚡"
    },
    {
        name: "Peugeot e-208",
        category: "sedan",
        batteryCapacity: 50,
        range: 225,
        efficiency: 24,
        price: "€32,500",
        chargingSpeed: "100 kW",
        acceleration: "8.3s",
        topSpeed: "150 km/h",
        icon: "🇫🇷"
    },
    {
        name: "Renault Zoe",
        category: "sedan",
        batteryCapacity: 52,
        range: 240,
        efficiency: 25,
        price: "€29,500",
        chargingSpeed: "50 kW",
        acceleration: "9.5s",
        topSpeed: "135 km/h",
        icon: "🇫🇷"
    },
    {
        name: "Skoda Enyaq",
        category: "suv",
        batteryCapacity: 82,
        range: 290,
        efficiency: 29,
        price: "€42,500",
        chargingSpeed: "125 kW",
        acceleration: "6.9s",
        topSpeed: "180 km/h",
        icon: "🇨🇿"
    },
    {
        name: "Polestar 2",
        category: "sedan",
        batteryCapacity: 78,
        range: 300,
        efficiency: 27,
        price: "€48,900",
        chargingSpeed: "150 kW",
        acceleration: "4.7s",
        topSpeed: "205 km/h",
        icon: "🇸🇪"
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeVehicles();
    initializeFilters();
    initializeMobileMenu();
    initializeSmoothScrolling();
});

// Initialize vehicle display
function initializeVehicles() {
    const vehiclesGrid = document.getElementById('vehiclesGrid');
    displayVehicles(vehicles);
}

// Display vehicles in the grid
function displayVehicles(vehiclesToShow) {
    const vehiclesGrid = document.getElementById('vehiclesGrid');
    vehiclesGrid.innerHTML = '';

    vehiclesToShow.forEach(vehicle => {
        const vehicleCard = createVehicleCard(vehicle);
        vehiclesGrid.appendChild(vehicleCard);
    });
}

// Create vehicle card element
function createVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.setAttribute('data-category', vehicle.category);

    card.innerHTML = `
        <div class="vehicle-image">
            <span style="font-size: 4rem;">${vehicle.icon}</span>
        </div>
        <div class="vehicle-info">
            <h3>${vehicle.name}</h3>
            <div class="vehicle-specs">
                <div class="spec-item">
                    <span class="spec-label">Range:</span>
                    <span class="spec-value">${vehicle.range} mi</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Battery:</span>
                    <span class="spec-value">${vehicle.batteryCapacity} kWh</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Efficiency:</span>
                    <span class="spec-value">${vehicle.efficiency} kWh/100mi</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Price:</span>
                    <span class="spec-value">${vehicle.price}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Charging:</span>
                    <span class="spec-value">${vehicle.chargingSpeed}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">0-60:</span>
                    <span class="spec-value">${vehicle.acceleration}</span>
                </div>
            </div>
        </div>
    `;

    return card;
}

// Initialize filter functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter vehicles
            if (category === 'all') {
                displayVehicles(vehicles);
            } else {
                const filteredVehicles = vehicles.filter(vehicle => vehicle.category === category);
                displayVehicles(filteredVehicles);
            }
        });
    });
}

// Initialize mobile menu
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Range calculator function
function calculateRange() {
    const batteryCapacity = parseFloat(document.getElementById('batteryCapacity').value) || 75;
    const efficiency = parseFloat(document.getElementById('efficiency').value) || 18;
    const temperature = parseFloat(document.getElementById('temperature').value) || 20;
    const speed = parseFloat(document.getElementById('speed').value) || 105;

    // Calculate ideal range
    const idealRange = (batteryCapacity / efficiency) * 100;
    
    // Calculate cold weather impact (up to 40% reduction at 0°C)
    const tempFactor = Math.max(0.6, 1 - (20 - temperature) * 0.006);
    const coldRange = idealRange * tempFactor;
    
    // Calculate highway impact (higher speeds reduce efficiency)
    const speedFactor = Math.max(0.7, 1 - (speed - 90) * 0.01);
    const highwayRange = idealRange * speedFactor;
    
    // Calculate battery degradation over 5 years (typically 10-15%)
    const degradationFactor = 0.88; // 12% degradation
    const degradedRange = idealRange * degradationFactor;

    // Display results
    document.getElementById('idealRange').textContent = `${Math.round(idealRange)} km`;
    document.getElementById('coldRange').textContent = `${Math.round(coldRange)} km`;
    document.getElementById('highwayRange').textContent = `${Math.round(highwayRange)} km`;
    document.getElementById('degradation').textContent = `${Math.round(degradedRange)} km`;

    // Add visual feedback
    const results = document.querySelector('.calculator-results');
    results.style.animation = 'none';
    results.offsetHeight; // Trigger reflow
    results.style.animation = 'fadeIn 0.5s ease-in-out';
}

// Add CSS animation for results
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .vehicle-card {
        animation: slideIn 0.5s ease-out;
    }
    
    @keyframes slideIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .charging-card, .vehicle-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add battery level indicator animation
function createBatteryAnimation() {
    const batteryLevels = document.querySelectorAll('.battery-level');
    batteryLevels.forEach(level => {
        const percentage = level.getAttribute('data-level');
        level.style.width = percentage + '%';
        level.style.animation = 'batteryPulse 2s infinite';
    });
}

// Add CSS for battery animation
const batteryStyle = document.createElement('style');
batteryStyle.textContent = `
    @keyframes batteryPulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
`;
document.head.appendChild(batteryStyle);

// Initialize battery animations
document.addEventListener('DOMContentLoaded', createBatteryAnimation);

// Add real-time range updates based on driving conditions
function updateRangeInRealTime() {
    const rangeInputs = document.querySelectorAll('#calculator input');
    rangeInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value) {
                calculateRange();
            }
        });
    });
}

// Initialize real-time updates
document.addEventListener('DOMContentLoaded', updateRangeInRealTime);

// Add charging station finder simulation
function simulateChargingStations() {
    const chargingCards = document.querySelectorAll('.charging-card');
    chargingCards.forEach(card => {
        card.addEventListener('click', function() {
            const type = this.querySelector('h3').textContent;
            alert(`Finding ${type} charging stations near you...\n\nThis would integrate with real charging station APIs like ChargePoint, Tesla Supercharger, or Electrify America.`);
        });
    });
}

// Initialize charging station simulation
document.addEventListener('DOMContentLoaded', simulateChargingStations);

// Add vehicle comparison feature
function addVehicleComparison() {
    const vehicleCards = document.querySelectorAll('.vehicle-card');
    vehicleCards.forEach(card => {
        card.addEventListener('dblclick', function() {
            const vehicleName = this.querySelector('h3').textContent;
            alert(`Added ${vehicleName} to comparison list!\n\nThis would allow users to compare multiple vehicles side by side.`);
        });
    });
}

// Initialize vehicle comparison
document.addEventListener('DOMContentLoaded', addVehicleComparison);

// Add energy cost calculator
function calculateEnergyCost() {
    const batteryCapacity = parseFloat(document.getElementById('batteryCapacity').value) || 75;
    const electricityRate = 0.25; // Average European electricity rate per kWh
    const costPerCharge = batteryCapacity * electricityRate;
    const costPerKm = costPerCharge / ((batteryCapacity / 18) * 100); // Assuming 18 kWh/100km efficiency
    
    return {
        costPerCharge: costPerCharge.toFixed(2),
        costPerKm: costPerKm.toFixed(3)
    };
}

// Add environmental impact calculator
function calculateEnvironmentalImpact() {
    const batteryCapacity = parseFloat(document.getElementById('batteryCapacity').value) || 75;
    const efficiency = parseFloat(document.getElementById('efficiency').value) || 18;
    const range = (batteryCapacity / efficiency) * 100;
    
    // CO2 emissions comparison (gas car emits ~120g CO2/km in Europe)
    const gasEmissions = range * 120; // grams
    const evEmissions = range * 50; // grams (from European electricity generation)
    const emissionsSaved = gasEmissions - evEmissions;
    
    return {
        gasEmissions: (gasEmissions / 1000).toFixed(1),
        evEmissions: (evEmissions / 1000).toFixed(1),
        emissionsSaved: (emissionsSaved / 1000).toFixed(1)
    };
}

// Add these calculations to the range calculator
function enhancedCalculateRange() {
    calculateRange();
    
    const energyCost = calculateEnergyCost();
    const environmentalImpact = calculateEnvironmentalImpact();
    
    // Add cost and environmental info to results
    const resultsDiv = document.querySelector('.calculator-results');
    const additionalInfo = document.createElement('div');
    additionalInfo.innerHTML = `
        <div class="result-item">
            <span>Cost per charge:</span>
            <span>€${energyCost.costPerCharge}</span>
        </div>
        <div class="result-item">
            <span>Cost per km:</span>
            <span>€${energyCost.costPerKm}</span>
        </div>
        <div class="result-item">
            <span>CO2 saved vs gas:</span>
            <span>${environmentalImpact.emissionsSaved} kg</span>
        </div>
    `;
    
    // Remove previous additional info if exists
    const existingInfo = resultsDiv.querySelector('.additional-info');
    if (existingInfo) {
        existingInfo.remove();
    }
    
    additionalInfo.className = 'additional-info';
    resultsDiv.appendChild(additionalInfo);
}

// Replace the original calculateRange function with enhanced version
window.calculateRange = enhancedCalculateRange;
