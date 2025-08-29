// Vehicle data with real-world specifications
const vehicles = [
    {
        name: "Tesla Model 3",
        category: "sedan",
        batteryCapacity: 75,
        range: 358,
        efficiency: 25,
        price: "$41,990",
        chargingSpeed: "250 kW",
        acceleration: "3.1s",
        topSpeed: "162 mph",
        icon: "🚗"
    },
    {
        name: "Tesla Model Y",
        category: "suv",
        batteryCapacity: 75,
        range: 330,
        efficiency: 28,
        price: "$47,740",
        chargingSpeed: "250 kW",
        acceleration: "3.5s",
        topSpeed: "155 mph",
        icon: "🚙"
    },
    {
        name: "Ford Mustang Mach-E",
        category: "suv",
        batteryCapacity: 88,
        range: 314,
        efficiency: 28,
        price: "$42,995",
        chargingSpeed: "150 kW",
        acceleration: "3.8s",
        topSpeed: "130 mph",
        icon: "🐎"
    },
    {
        name: "Chevrolet Bolt EV",
        category: "sedan",
        batteryCapacity: 65,
        range: 259,
        efficiency: 28,
        price: "$26,500",
        chargingSpeed: "55 kW",
        acceleration: "6.5s",
        topSpeed: "93 mph",
        icon: "⚡"
    },
    {
        name: "Nissan Leaf",
        category: "sedan",
        batteryCapacity: 62,
        range: 226,
        efficiency: 30,
        price: "$28,140",
        chargingSpeed: "100 kW",
        acceleration: "7.4s",
        topSpeed: "90 mph",
        icon: "🍃"
    },
    {
        name: "BMW i4",
        category: "luxury",
        batteryCapacity: 83.9,
        range: 301,
        efficiency: 27,
        price: "$52,200",
        chargingSpeed: "200 kW",
        acceleration: "3.9s",
        topSpeed: "124 mph",
        icon: "🏎️"
    },
    {
        name: "Mercedes EQS",
        category: "luxury",
        batteryCapacity: 107.8,
        range: 350,
        efficiency: 30,
        price: "$102,310",
        chargingSpeed: "200 kW",
        acceleration: "3.8s",
        topSpeed: "130 mph",
        icon: "⭐"
    },
    {
        name: "Rivian R1T",
        category: "suv",
        batteryCapacity: 135,
        range: 314,
        efficiency: 35,
        price: "$73,000",
        chargingSpeed: "200 kW",
        acceleration: "3.0s",
        topSpeed: "115 mph",
        icon: "🚛"
    },
    {
        name: "Lucid Air",
        category: "luxury",
        batteryCapacity: 118,
        range: 520,
        efficiency: 25,
        price: "$77,400",
        chargingSpeed: "300 kW",
        acceleration: "2.8s",
        topSpeed: "168 mph",
        icon: "✨"
    },
    {
        name: "Hyundai Ioniq 5",
        category: "suv",
        batteryCapacity: 77.4,
        range: 303,
        efficiency: 26,
        price: "$41,450",
        chargingSpeed: "350 kW",
        acceleration: "5.0s",
        topSpeed: "115 mph",
        icon: "🔋"
    },
    {
        name: "Kia EV6",
        category: "suv",
        batteryCapacity: 77.4,
        range: 310,
        efficiency: 26,
        price: "$42,600",
        chargingSpeed: "350 kW",
        acceleration: "5.1s",
        topSpeed: "115 mph",
        icon: "⚡"
    },
    {
        name: "Volkswagen ID.4",
        category: "suv",
        batteryCapacity: 82,
        range: 275,
        efficiency: 29,
        price: "$38,790",
        chargingSpeed: "135 kW",
        acceleration: "7.1s",
        topSpeed: "112 mph",
        icon: "🌍"
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
    const efficiency = parseFloat(document.getElementById('efficiency').value) || 30;
    const temperature = parseFloat(document.getElementById('temperature').value) || 70;
    const speed = parseFloat(document.getElementById('speed').value) || 65;

    // Calculate ideal range
    const idealRange = (batteryCapacity / efficiency) * 100;
    
    // Calculate cold weather impact (up to 40% reduction at 0°F)
    const tempFactor = Math.max(0.6, 1 - (70 - temperature) * 0.006);
    const coldRange = idealRange * tempFactor;
    
    // Calculate highway impact (higher speeds reduce efficiency)
    const speedFactor = Math.max(0.7, 1 - (speed - 55) * 0.01);
    const highwayRange = idealRange * speedFactor;
    
    // Calculate battery degradation over 5 years (typically 10-15%)
    const degradationFactor = 0.88; // 12% degradation
    const degradedRange = idealRange * degradationFactor;

    // Display results
    document.getElementById('idealRange').textContent = `${Math.round(idealRange)} miles`;
    document.getElementById('coldRange').textContent = `${Math.round(coldRange)} miles`;
    document.getElementById('highwayRange').textContent = `${Math.round(highwayRange)} miles`;
    document.getElementById('degradation').textContent = `${Math.round(degradedRange)} miles`;

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
    const electricityRate = 0.14; // Average US electricity rate per kWh
    const costPerCharge = batteryCapacity * electricityRate;
    const costPerMile = costPerCharge / ((batteryCapacity / 30) * 100); // Assuming 30 kWh/100mi efficiency
    
    return {
        costPerCharge: costPerCharge.toFixed(2),
        costPerMile: costPerMile.toFixed(3)
    };
}

// Add environmental impact calculator
function calculateEnvironmentalImpact() {
    const batteryCapacity = parseFloat(document.getElementById('batteryCapacity').value) || 75;
    const efficiency = parseFloat(document.getElementById('efficiency').value) || 30;
    const range = (batteryCapacity / efficiency) * 100;
    
    // CO2 emissions comparison (gas car emits ~404g CO2/mile)
    const gasEmissions = range * 404; // grams
    const evEmissions = range * 100; // grams (from electricity generation)
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
            <span>$${energyCost.costPerCharge}</span>
        </div>
        <div class="result-item">
            <span>Cost per mile:</span>
            <span>$${energyCost.costPerMile}</span>
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
