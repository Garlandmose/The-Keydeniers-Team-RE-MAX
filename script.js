// ✅ REBECCA'S CONTACT INFO
const CONTACT = {
  phone: "(407) 404-3546",
  address: "240 Sandy Springs Pl, Atlanta, GA 30328, USA",
  email: "keydeniersrebecca_remax@outlook.com",
  facebook: "https://facebook.com/KeydeniersRebeccaRealtor"
};

// ✅ FEATURED LISTINGS — CLEANED (no trailing spaces)
const listingsData = [
  {
    id: 1,
    type: 'sale',
    badge: 'FOR SALE',
    price: '$425,000',
    address: '123 Peachtree St, Atlanta, GA 30308',
    beds: 3,
    baths: 2,
    sqft: 1850,
    lotSize: '0.15 acres',
    yearBuilt: 2018,
    img: 'https://placehold.co/600x400/e0e0e0/999999?text=Modern+Condo+in+Midtown',
    features: [
      'Hardwood Floors',
      'Stainless Appliances',
      'Balcony w/ City View',
      '2 Parking Spots',
      'Pet Friendly'
    ],
    description: 'Stunning Midtown condo with skyline views, renovated kitchen, and secure parking. Walking distance to Piedmont Park and MARTA.',
    virtualTour: '#'
  },
  {
    id: 2,
    type: 'rent',
    badge: 'FOR RENT',
    price: '$1,850/mo',
    address: '456 Ponce de Leon Ave, Atlanta, GA 30306',
    beds: 2,
    baths: 1,
    sqft: 950,
    lotSize: 'N/A',
    yearBuilt: 2005,
    img: 'https://placehold.co/600x400/0056b3/ffffff?text=Charming+Inman+Park+Apartment',
    features: [
      'In-Unit Laundry',
      'Updated Kitchen',
      'Walk to BeltLine',
      'Secured Entry',
      'Storage Unit'
    ],
    description: 'Pet-friendly Inman Park apartment, walk to BeltLine, updated appliances, and private patio.',
    virtualTour: '#'
  },
  {
    id: 3,
    type: 'student',
    badge: 'OFF-CAMPUS',
    price: '$850/mo',
    address: '789 Ferst Dr, Atlanta, GA 30332',
    campus: 'Georgia Tech (0.3 mi)',
    university: 'georgia-tech',
    beds: 1,
    baths: 1,
    sqft: 450,
    leaseTerm: 'Semester or Annual',
    utilities: 'Included',
    img: 'https://placehold.co/600x400/e63900/ffffff?text=GT+Student+Studio',
    features: [
      'Furnished',
      'High-Speed WiFi',
      'Study Lounge',
      'Gym Access',
      '24/7 Security'
    ],
    description: 'Modern studio near Georgia Tech — includes high-speed internet, gym, study lounge, and roommate-matching service.',
    virtualTour: '#'
  },
  {
    id: 4,
    type: 'sale',
    badge: 'FOR SALE',
    price: 'NZ$1,250,000',
    address: '42 Tamaki Drive, Auckland, New Zealand',
    beds: 4,
    baths: 3,
    sqft: 2200,
    lotSize: '800 sqm',
    yearBuilt: 2015,
    img: 'https://placehold.co/600x400/28a745/ffffff?text=Waterfront+Home+Auckland',
    features: [
      'Harbor Views',
      'Swimming Pool',
      'Double Garage',
      'Outdoor Kitchen',
      'Solar Panels'
    ],
    description: 'Waterfront family home in Auckland — panoramic harbor views, pool, and garage. 10 mins to CBD.',
    virtualTour: '#'
  },
  {
    id: 5,
    type: 'student',
    badge: 'OFF-CAMPUS',
    price: '£650/mo',
    address: '15 Parks Road, Oxford, UK',
    campus: 'University of Oxford (0.2 mi)',
    university: 'oxford',
    beds: 1,
    baths: 1,
    sqft: 320,
    leaseTerm: 'Academic Year',
    utilities: 'Bills Included',
    img: 'https://placehold.co/600x400/6c757d/ffffff?text=Oxford+Student+Flat',
    features: [
      'Historic Building',
      'Shared Kitchen',
      'Bike Storage',
      'Laundry Room',
      '24h Reception'
    ],
    description: 'Historic building flat in Oxford — quiet, secure, and steps from campus. Ideal for grad students.',
    virtualTour: '#'
  },
  {
    id: 6,
    type: 'rent',
    badge: 'FOR RENT',
    price: '¥8,500/mo',
    address: 'Jing’an District, Shanghai, China',
    beds: 1,
    baths: 1,
    sqft: 600,
    lotSize: 'N/A',
    yearBuilt: 2020,
    img: 'https://placehold.co/600x400/0056b3/ffffff?text=Shanghai+Apartment',
    features: [
      'Floor-to-Ceiling Windows',
      'Smart Home System',
      'Gym & Pool',
      'Metro Access',
      '24h Security'
    ],
    description: 'Modern high-rise apartment in Shanghai — metro access, gym, 24h security. Perfect for professionals.',
    virtualTour: '#'
  },
  {
    id: 7,
    type: 'sale',
    badge: 'FOR SALE',
    price: '$550,000',
    address: '100 Lakeview Dr, Atlanta, GA 30328',
    beds: 4,
    baths: 3,
    sqft: 2400,
    lotSize: '0.25 acres',
    yearBuilt: 2022,
    img: 'https://placehold.co/600x400/1e3a8a/ffffff?text=Luxury+Buckhead+Home',
    features: ['Granite Countertops', 'Smart Home', 'Fireplace', 'Deck', '3-Car Garage'],
    description: 'Luxury Buckhead home with pool, smart home system, fireplace, and 3-car garage. Minutes from shopping and top schools.',
    virtualTour: '#'
  }
];

// DOM Elements
const listingsContainer = document.getElementById('listings-container');
const studentListingsContainer = document.getElementById('student-listings');
const modalBody = document.getElementById('modalBody');
const saveNotification = document.getElementById('saveNotification');

// ✅ Universal Modal Close Handler
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')) {
    const modalId = e.target.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
  if (e.target.hasAttribute('data-action') && e.target.getAttribute('data-action') === 'close') {
    const modalId = e.target.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Render Listings
function renderListings(type = 'all') {
  const filtered = type === 'all' ? listingsData : listingsData.filter(item => item.type === type);
  if (listingsContainer) {
    listingsContainer.innerHTML = filtered.map(listing => `
      <div class="listing-card" data-id="${listing.id}">
        <div class="listing-img" style="background-image: url('${listing.img}')">
          <span class="listing-badge">${listing.badge}</span>
        </div>
        <div class="listing-content">
          <div class="listing-price">${listing.price}</div>
          <div class="listing-address">${listing.address}</div>
          <div class="listing-features">
            <span>${listing.beds} BR</span>
            <span>${listing.baths} BA</span>
            <span>${listing.sqft} sqft</span>
          </div>
        </div>
        <div class="listing-footer">
          <button class="btn btn-primary view-details-btn" data-id="${listing.id}">View Details</button>
          <button class="btn save-btn" data-id="${listing.id}">❤️ Save</button>
        </div>
      </div>
    `).join('');
  }
  attachListingEventListeners();
}

// Render Student Listings
function renderStudentListings() {
  let filtered = listingsData.filter(item => item.type === 'student');
  const university = document.querySelector('#university-filter')?.value;
  if (university) filtered = filtered.filter(item => item.university === university);
  if (studentListingsContainer) {
    studentListingsContainer.innerHTML = filtered.map(listing => `
      <div class="listing-card" data-id="${listing.id}">
        <div class="listing-img" style="background-image: url('${listing.img}')">
          <span class="listing-badge">${listing.badge}</span>
        </div>
        <div class="listing-content">
          <div class="listing-price">${listing.price}</div>
          <div class="listing-address">${listing.address}</div>
          <div class="listing-features">
            <span>${listing.beds} BR</span>
            <span>${listing.baths} BA</span>
            <span>${listing.leaseTerm || 'Flexible'}</span>
          </div>
        </div>
        <div class="listing-footer">
          <button class="btn btn-primary view-details-btn" data-id="${listing.id}">Virtual Tour</button>
          <button class="btn contact-btn" data-id="${listing.id}">📞 Contact</button>
        </div>
      </div>
    `).join('');
  }
  attachListingEventListeners();
}

function attachListingEventListeners() {
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      openModal(id);
    });
  });
  document.querySelectorAll('.save-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      saveProperty(id);
    });
  });
  document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('contactOptionsModal').style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
}

function openModal(id) {
  const property = listingsData.find(p => p.id === id);
  if (!property) return;
  currentProperty = property;

  let campusInfo = property.campus ? `<p><strong>📍 Campus:</strong> ${property.campus}</p>` : '';
  let leaseInfo = '';
  if (property.leaseTerm || property.utilities) {
    leaseInfo = `
      <div class="feature-item"><span class="feature-icon">📅</span><span><strong>Lease:</strong> ${property.leaseTerm || 'Flexible'}</span></div>
      <div class="feature-item"><span class="feature-icon">💡</span><span><strong>Utilities:</strong> ${property.utilities || 'Not Included'}</span></div>
    `;
  }

  if (!modalBody) return;
  modalBody.innerHTML = `
    <div class="modal-body">
      <div class="modal-img" style="background-image: url('${property.img}')"></div>
      <div class="modal-details">
        <h2>${property.address}</h2>
        <div class="price">${property.price}</div>
        <p>${property.description}</p>
        <div class="features-grid">
          <div class="feature-item"><span class="feature-icon">🛏️</span><span><strong>${property.beds} Bedrooms</strong></span></div>
          <div class="feature-item"><span class="feature-icon">🛁</span><span><strong>${property.baths} Bathrooms</strong></span></div>
          <div class="feature-item"><span class="feature-icon">📐</span><span><strong>${property.sqft} sqft</strong></span></div>
          ${property.lotSize ? `<div class="feature-item"><span class="feature-icon">🌳</span><span><strong>${property.lotSize}</strong></span></div>` : ''}
          ${property.yearBuilt ? `<div class="feature-item"><span class="feature-icon">📅</span><span><strong>Built: ${property.yearBuilt}</strong></span></div>` : ''}
          ${leaseInfo}
        </div>
        ${campusInfo}
        <h3>Features</h3>
        <ul>${property.features.map(f => `<li>✅ ${f}</li>`).join('')}</ul>
        <div style="margin-top:1.5rem;display:flex;flex-wrap:wrap;gap:0.75rem;">
          <button id="modalVirtualTourBtn" class="btn" style="background:#0056b3;color:white;">🎥 Book Virtual Tour</button>
          <button id="modalContactBtn" class="btn btn-primary">📞 Contact Rebecca</button>
          <button id="modalSaveBtn" class="btn" style="color:#e63900;">❤️ Save</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalVirtualTourBtn')?.addEventListener('click', () => {
    document.getElementById('propertyModal').style.display = 'none';
    openVirtualTourModal(property.id);
  });
  document.getElementById('modalContactBtn')?.addEventListener('click', () => {
    document.getElementById('propertyModal').style.display = 'none';
    document.getElementById('contactOptionsModal').style.display = 'block';
  });
  document.getElementById('modalSaveBtn')?.addEventListener('click', () => {
    saveProperty(property.id);
  });

  document.getElementById('propertyModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function openVirtualTourModal(id) {
  const property = listingsData.find(p => p.id === id);
  if (!property) return;
  document.getElementById('virtualTourPropertyAddress').textContent = `Property: ${property.address}`;
  document.getElementById('vt-property-address').value = property.address;
  document.getElementById('virtualTourModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// ✅ Contact Form with Email Validation
document.getElementById('contact-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const emailInput = form.querySelector('#email');
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending...';

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    alert('❌ Please enter a valid email address (e.g., name@example.com).');
    btn.disabled = false;
    btn.textContent = 'Send Message';
    return;
  }

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    btn.disabled = false;
    btn.textContent = 'Send Message';

    if (res.ok) {
      alert('✅ Message sent successfully!\n\nRebecca will contact you within 2 hours. Thank you!');
      form.reset();
    } else {
      const error = await res.json().catch(() => ({}));
      alert(`❌ Submission failed: ${error.error || 'Unknown error'}`);
    }
  } catch (err) {
    btn.disabled = false;
    btn.textContent = 'Send Message';
    alert('❌ Network error. Please check your connection or try emailing directly.');
  }
});

// ✅ Virtual Tour Form with Validation
document.getElementById('virtualTourForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const emailInput = form.querySelector('#vt-email');
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Booking...';

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    alert('❌ Please enter a valid email address (e.g., name@example.com).');
    btn.disabled = false;
    btn.textContent = '✅ Book Virtual Tour';
    return;
  }

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    btn.disabled = false;
    btn.textContent = '✅ Book Virtual Tour';

    if (res.ok) {
      alert('✅ Virtual tour request sent!\n\nRebecca will contact you shortly to confirm your appointment. You’ll also receive a confirmation email.');
      form.reset();
      document.getElementById('virtualTourModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    } else {
      const error = await res.json().catch(() => ({}));
      alert(`❌ Booking failed: ${error.error || 'Please try again or call directly.'}`);
    }
  } catch (err) {
    btn.disabled = false;
    btn.textContent = '✅ Book Virtual Tour';
    alert('❌ Network error. Please check your connection.');
  }
});

// Save Property
function saveProperty(id) {
  const saved = JSON.parse(localStorage.getItem('savedProperties') || '[]');
  if (!saved.includes(id)) {
    saved.push(id);
    localStorage.setItem('savedProperties', JSON.stringify(saved));
    const btn = document.querySelector(`.save-btn[data-id="${id}"]`);
    if (btn) {
      btn.innerHTML = '❤️ Saved';
      btn.style.color = '#e63900';
    }
    if (saveNotification) {
      saveNotification.classList.add('show');
      setTimeout(() => saveNotification.classList.remove('show'), 2000);
    }
  }
}

// Tab & Filter Listeners
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderListings(btn.dataset.tab);
  });
});

document.getElementById('distance-filter')?.addEventListener('input', (e) => {
  document.getElementById('distance-value').textContent = `${e.target.value} miles`;
});

document.getElementById('university-filter')?.addEventListener('change', renderStudentListings);
document.querySelectorAll('input[name="room-type"]').forEach(r => r.addEventListener('change', renderStudentListings));

// Mobile Menu
document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('show');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (!this.getAttribute('href') || ['#'].includes(this.getAttribute('href'))) return;
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      document.querySelector('.nav-links')?.classList.remove('show');
    }
  });
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderListings('all');
  renderStudentListings();
});