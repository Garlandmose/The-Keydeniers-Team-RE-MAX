// ✅ REBECCA'S CONTACT INFO
const CONTACT = {
  phone: "(407) 404-3546",
  address: "240 Sandy Springs Pl, Atlanta, GA 30328, USA",
  email: "joepossum@gmail.com",
  facebook: "https://facebook.com/KeydeniersRebeccaRealtor"
};

// ✅ FEATURED LISTINGS — Now with full Zillow image arrays (e.g., 32 for CO listing)
const listingsData = [
  {
    id: 1,
    type: 'sale',
    badge: 'FOR SALE',
    price: '$314,900',
    address: '1510 Little Bear Creek Pt UNIT 202, Colorado Springs, CO 80904',
    beds: 3,
    baths: 2,
    sqft: 1328,
    lotSize: 'N/A',
    yearBuilt: 2011,
    images: [
      'https://photos.zillowstatic.com/fp/42f49df29c3f6fd8301225558617766e-cc_ft_1536.webp',
      'https://photos.zillowstatic.com/fp/9bddc00355fdc55b4d53b34594de9fde-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/885d2bf35a0e428d1afcfcbe740e7e3c-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/907a6c81719d5a7fabcffabb531f5801-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/97c67fa2c28f9a53313715c88a47cf62-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/7de0408a173394218f401e3b0737c422-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/aa58c3d202d4aedfba6f4ba834244872-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/352da9a81a4f493731023a3a2d36be2c-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/15145fa1ec6e05db4b914ca26ba0bc0c-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/a921de34ccbf2bebeff8a6cbf7b5b91a-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/787ae214e241c921a497229d394e0ff9-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/985336ef23ecb44d41c9808b7da71ed5-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/d67ec871749dc577c83fea4f4e4a7c2a-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/e5ceeaf6c70af3b21f56da80e17b4843-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/6126986caac173be32916467d0185a4b-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/a76fbcca9e104cb685abaf91e3866a85-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/bd1783e10d5323a5cf306db39029f26e-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/f90436d1dfd299f136d274ec9fba447c-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/2a9cd0644803813e5bad97feee33fac1-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/70b32338d0a29726ce7dd47bc7241de5-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/c1aeca11feca51df4d32a8de1712e0ea-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/ad9505d628a40224a1ebf88216af9a05-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/90beb038911d3839adb07cee9240aaf2-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/beb8c1594b32040bd8a5f67b0aab1772-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/8489b43016d68306d3fce521de559318-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/461c14ee9b4d0420b9ac02b1cbeaa87d-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/d8a150c3c5cf5d8a5f4d5affc458bfb7-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/8ce0bd75dba148a30edc00b0754bca61-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/5dcdc8f1941880d7cc1d8b09366f500d-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/5cf3b6c31c22eee4fcfd3073e64a2054-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/bcbeebb4f0e2e13504a9fdeee5b2d7d0-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/f750af0fac47a856f3bfad8e12b04775-uncropped_scaled_within_1536_1152.webp',
    ],
    features: [
      'Hardwood Floors',
      'Stainless Appliances',
      'Balcony w/ City View',
      '1 Parking Spot',
      'Parking features: 1 Car Garage Detached, Garage Door Opener',
      'Pet Friendly'
    ],
    description: 'Beautiful Condo with Stunning Mountain Views Welcome to this spacious 3-bedroom, 2-bath ranch-style condo offering 1,328 sq. ft. of comfortable living. The open kitchen, dining, and living areas are filled with natural light and feature granite countertops, stainless steel appliances, breakfast bar, recessed lighting, and rich dark wood cabinetry. Cozy up by the corner gas log fireplace or step out onto the private balcony to relax and enjoy the peaceful views. The primary suite boasts a granite double vanity, walk-in shower with built-in seat, and an oversized walk-in closet. Two additional bedrooms share a beautifully updated bath with a tiled tub/shower surround. A full laundry room with shelving and included washer/dryer adds convenience. Every window frames a picturesque mountain view! This home comes with a detached 1-car garage plus plenty of extra parking. Villas at Bear Creek common areas are extremely well maintained. Ideally located across from Bear Creek Dog Park and Bear Creek Regional Park, and minutes from Red Rock Canyon, I-25, and Hwy 24—this is Colorado living at its best!',
    virtualTour: '#'
  },
  {
    id: 2,
    type: 'rent',
    badge: 'FOR RENT',
    price: '$5,500/mo',
    address: '855 Peachtree St NE, Atlanta, GA 30308',
    beds: 2,
    baths: 2,
    sqft: 1138,
    lotSize: 'N/A',
    yearBuilt: 'N/A',
    images: [
      'https://photos.zillowstatic.com/fp/1ea463d206fc140fac2a53bfd44e03cd-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/3ca5987e9daa3a274ce7e4b5a8d415e7-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/7d2c2e3bbf6ab910f181433eecdda6a7-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/7ee8aa36ad10d094d9be3f3c9fe6c8dd-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/7972f733b12870e91b310165a8fd7ce5-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/180dfa335f90c61ef5742e82ff555336-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/ea80ade1dbab95bba3e456219bfad651-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/47eb4527b583c161a15d0ac8c3d42219-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/f4dfc07c6289a23c1cddbc13ee83a4c8-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/8eb06a04cfdf62cd986c3bb392bbb4f0-uncropped_scaled_within_1536_1152.webp',
      'https://photos.zillowstatic.com/fp/9b9f2d9470bdd207aa30ec601118cf28-uncropped_scaled_within_1536_1152.webp',
    ],
    features: [
      'In-Unit Laundry',
      'Updated Kitchen',
      'Walk to BeltLine',
      'Secured Entry',
      'Storage Unit'
    ],
    description: 'Live in luxury in this fully furnished, designer corner condo in one of Midtown Atlanta’s most sought-after high-rises. Renovated by a renowned interior designer, the home features polished tile floors, floor-to-ceiling windows, a spacious balcony, and breathtaking city views.The custom kitchen is ideal for entertaining with quartz countertops, a large island, ebony cabinetry, stainless steel appliances, and a wine rack. The primary suite offers blackout drapes, a one-of-a-kind walk-in closet, and a spa-style marble bath with double shower heads. The second bedroom includes built-ins perfect for a home office.Enjoy spectacular sunrise views of Stone Mountain, Piedmont Park, Ponce City Market, and downtown. Utilities, high-speed internet, and Apple TV included. Building amenities include 24-hour concierge, pool, fitness center, theater room, clubroom, and 2 secure covered parking spaces.Steps from Peachtree St, Fox Theatre, Piedmont Park, dining, shopping, and MARTA.Minimum 1-year lease. Fully furnished. Excellent credit required.',
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
    images: [
      'https://placehold.co/800x600/e63900/ffffff?text=GT+Studio+Front',
      'https://placehold.co/800x600/6c757d/ffffff?text=Study+Nook',
      'https://placehold.co/800x600/1e3a8a/ffffff?text=Bathroom'
    ],
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
    images: [
      'https://placehold.co/800x600/28a745/ffffff?text=Waterfront+View',
      'https://placehold.co/800x600/0056b3/ffffff?text=Pool+Deck',
      'https://placehold.co/800x600/f8f9fa/333333?text=Open+Plan+Kitchen'
    ],
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
    images: [
      'https://placehold.co/800x600/6c757d/ffffff?text=Oxford+Flat+Facade',
      'https://placehold.co/800x600/e63900/ffffff?text=Shared+Kitchen'
    ],
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
    images: [
      'https://placehold.co/800x600/0056b3/ffffff?text=Shanghai+View',
      'https://placehold.co/800x600/28a745/ffffff?text=Smart+Bedroom'
    ],
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
    images: [
      'https://placehold.co/800x600/1e3a8a/ffffff?text=Buckhead+Exterior',
      'https://placehold.co/800x600/f8f9fa/333333?text=Fireplace+Living',
      'https://placehold.co/800x600/e0e0e0/999999?text=Chef+Kitchen',
      'https://placehold.co/800x600/0056b3/ffffff?text=Backyard+Deck'
    ],
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

// ✅ ENHANCED LIGHTBOX — Auto-rotate + arrows + keyboard
const lightboxHTML = `
  <div id="imageLightbox" class="lightbox">
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous image">‹</button>
      <img id="lightbox-img" src="" alt="Property image" class="lightbox-img">
      <div id="lightbox-caption"></div>
      <button class="lightbox-nav lightbox-next" aria-label="Next image">›</button>
      <div id="lightbox-counter"></div>
    </div>
  </div>
`;
if (!document.getElementById('imageLightbox')) {
  document.body.insertAdjacentHTML('beforeend', lightboxHTML);
}

// ✅ Enhanced Lightbox Controller
function openLightbox(images, startIndex = 0, captions = []) {
  const lightbox = document.getElementById('imageLightbox');
  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');
  const counterEl = document.getElementById('lightbox-counter');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  const closeBtn = document.querySelector('.lightbox-close');

  let currentIndex = startIndex;
  let autoInterval;

  const updateLightbox = () => {
    imgEl.src = images[currentIndex];
    captionEl.textContent = captions[currentIndex] || '';
    counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  };

  // Controls
  prevBtn.onclick = (e) => { e.stopPropagation(); prevSlide(); resetAuto(); };
  nextBtn.onclick = (e) => { e.stopPropagation(); nextSlide(); resetAuto(); };
  closeBtn.onclick = () => {
    clearInterval(autoInterval);
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  // Keyboard nav
  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
    else if (e.key === 'Escape') closeBtn.click();
  };
  document.addEventListener('keydown', handleKey);

  // Cleanup on close
  const observer = new MutationObserver(() => {
    if (lightbox.style.display === 'none') {
      clearInterval(autoInterval);
      document.removeEventListener('keydown', handleKey);
      observer.disconnect();
    }
  });
  observer.observe(lightbox, { attributes: true, attributeFilter: ['style'] });

  // Auto-rotate (4s) — pauses on hover/click
  const startAuto = () => {
    autoInterval = setInterval(nextSlide, 4000);
  };
  const resetAuto = () => {
    clearInterval(autoInterval);
    startAuto();
  };

  imgEl.addEventListener('click', resetAuto); // click image → reset timer
  lightbox.addEventListener('mouseenter', () => clearInterval(autoInterval));
  lightbox.addEventListener('mouseleave', startAuto);

  // Init
  updateLightbox();
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  startAuto();
}

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
  // Close lightbox
  if (e.target.classList.contains('lightbox')) {
    e.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// ✅ Lightbox Open/Close
function openLightbox(images, startIndex = 0, captions = []) {
  const lightbox = document.getElementById('imageLightbox');
  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');
  const counterEl = document.getElementById('lightbox-counter');

  let currentIndex = startIndex;

  const updateLightbox = () => {
    imgEl.src = images[currentIndex];
    captionEl.textContent = captions[currentIndex] || '';
    counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
  };

  // Nav
  document.querySelector('.lightbox-prev').onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  };
  document.querySelector('.lightbox-next').onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  };
  document.querySelector('.lightbox-close').onclick = () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  updateLightbox();
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Render Listings
function renderListings(type = 'all') {
  const filtered = type === 'all' ? listingsData : listingsData.filter(item => item.type === type);
  if (listingsContainer) {
    listingsContainer.innerHTML = filtered.map(listing => {
      const firstImg = Array.isArray(listing.images) ? listing.images[0] : listing.img;
      return `
        <div class="listing-card" data-id="${listing.id}">
          <div class="listing-img" style="background-image: url('${firstImg}')">
            <span class="listing-badge">${listing.badge}</span>
            ${listing.images && listing.images.length > 1 
              ? `<button class="view-all-photos" data-id="${listing.id}">📷 ${listing.images.length} Photos</button>` 
              : ''}
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
      `;
    }).join('');
  }
  attachListingEventListeners();
}

// Render Student Listings
function renderStudentListings() {
  let filtered = listingsData.filter(item => item.type === 'student');
  const university = document.querySelector('#university-filter')?.value;
  if (university) filtered = filtered.filter(item => item.university === university);
  if (studentListingsContainer) {
    studentListingsContainer.innerHTML = filtered.map(listing => {
      const firstImg = Array.isArray(listing.images) ? listing.images[0] : listing.img;
      return `
        <div class="listing-card" data-id="${listing.id}">
          <div class="listing-img" style="background-image: url('${firstImg}')">
            <span class="listing-badge">${listing.badge}</span>
            ${listing.images && listing.images.length > 1 
              ? `<button class="view-all-photos" data-id="${listing.id}">📷 ${listing.images.length} Photos</button>` 
              : ''}
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
      `;
    }).join('');
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
  // ✅ Click photos badge → open lightbox
  document.querySelectorAll('.view-all-photos').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(e.target.dataset.id);
      const property = listingsData.find(p => p.id === id);
      if (!property) return;
      const images = property.images || [property.img];
      const captions = images.map((_, i) => `${property.address} — Photo ${i + 1}`);
      openLightbox(images, 0, captions);
    });
  });
}

// ✅ MODAL WITH BOOTSTRAP-STYLE CAROUSEL + CLICKABLE IMAGES
function openModal(id) {
  const property = listingsData.find(p => p.id === id);
  if (!property) return;

  const imageSources = property.images && Array.isArray(property.images) && property.images.length > 0
    ? property.images
    : [property.img];

  const captions = imageSources.map((_, i) => {
    const base = property.address.split(',')[0];
    return i === 0 ? `${base} — Front` :
           i === 1 ? `${base} — Interior` :
           i === 2 ? `${base} — Kitchen` :
           i === 3 ? `${base} — Bedroom` :
           `${base} — View ${i + 1}`;
  });

  let campusInfo = property.campus ? `<p><strong>📍 Campus:</strong> ${property.campus}</p>` : '';
  let leaseInfo = '';
  if (property.leaseTerm || property.utilities) {
    leaseInfo = `
      <div class="feature-item"><span class="feature-icon">📅</span><span><strong>Lease:</strong> ${property.leaseTerm || 'Flexible'}</span></div>
      <div class="feature-item"><span class="feature-icon">💡</span><span><strong>Utilities:</strong> ${property.utilities || 'Not Included'}</span></div>
    `;
  }

  // ✅ Carousel with CLICKABLE images (opens lightbox)
  const carouselHTML = `
    <div class="property-carousel">
      <div class="carousel-inner">
        ${imageSources.map((src, i) => `
          <div class="carousel-item ${i === 0 ? 'active' : ''}" data-index="${i}">
            <img src="${src}" class="d-block w-100 carousel-img clickable-img" data-index="${i}" data-prop-id="${property.id}" alt="${property.address} — Image ${i + 1}">
            <div class="carousel-caption d-none d-md-block">
              <p>${captions[i]}</p>
            </div>
          </div>
        `).join('')}
      </div>
      ${imageSources.length > 1 ? `
        <button class="carousel-control-prev" type="button" aria-label="Previous">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" aria-label="Next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
        <div class="carousel-indicators">
          ${imageSources.map((_, i) => `
            <button type="button" class="${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;

  if (!modalBody) return;
  modalBody.innerHTML = `
    <div class="modal-body">
      ${carouselHTML}

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

  // ✅ Make carousel images clickable (lightbox)
  document.querySelectorAll('.clickable-img').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      const propId = parseInt(img.dataset.propId);
      const idx = parseInt(img.dataset.index);
      const prop = listingsData.find(p => p.id === propId);
      if (!prop) return;
      const imgs = prop.images || [prop.img];
      const caps = imgs.map((_, i) => `${prop.address} — Photo ${i + 1}`);
      openLightbox(imgs, idx, caps);
    });
  });

  // Initialize carousel if multi-image
  if (imageSources.length > 1) {
    initPropertyCarousel();
  }

  // Reattach action buttons
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

// ✅ Lightweight Carousel Controller
function initPropertyCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.carousel-indicators button');
  const prevBtn = document.querySelector('.carousel-control-prev');
  const nextBtn = document.querySelector('.carousel-control-next');
  let currentIndex = 0;
  let autoInterval;

  const showSlide = (index) => {
    currentIndex = ((index % items.length) + items.length) % items.length;
    items.forEach((item, i) => item.classList.toggle('active', i === currentIndex));
    indicators.forEach((ind, i) => ind.classList.toggle('active', i === currentIndex));
  };

  const nextSlide = () => showSlide(currentIndex + 1);
  const prevSlide = () => showSlide(currentIndex - 1);

  nextBtn?.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); resetAuto(); });
  prevBtn?.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); resetAuto(); });

  indicators.forEach((btn, i) => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); showSlide(i); resetAuto(); });
  });

  const startAuto = () => {
    autoInterval = setInterval(nextSlide, 5000);
  };
  const resetAuto = () => {
    clearInterval(autoInterval);
    startAuto();
  };
  startAuto();

  const carousel = document.querySelector('.property-carousel');
  carousel?.addEventListener('mouseenter', () => clearInterval(autoInterval));
  carousel?.addEventListener('mouseleave', startAuto);
}

function openVirtualTourModal(id) {
  const property = listingsData.find(p => p.id === id);
  if (!property) return;
  document.getElementById('virtualTourPropertyAddress').textContent = `Property: ${property.address}`;
  document.getElementById('vt-property-address').value = property.address;
  document.getElementById('virtualTourModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

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

// ✅ Form submission UX feedback
document.addEventListener('DOMContentLoaded', () => {
  renderListings('all');
  renderStudentListings();

  document.querySelectorAll('form').forEach(form => {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) return;

    form.addEventListener('submit', () => {
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '📤 Sending...';
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 3000);
    });
  });
});