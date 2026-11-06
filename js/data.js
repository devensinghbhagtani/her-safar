/* Her Safar trip data. Facts (timings, rules, distances) researched from public travel sources, Nov 2026.
   Names of stays, drivers, reviews and ratings are SAMPLE content. Replace before launch. */
(function () {
  const I = (n) => `assets/img/${n}.jpg`;
  const L = { ok: 1, part: 2, no: 0 }; // accessibility levels
  const d5 = (a, b, c, d, e) => [a, b, c, d, e];

  const IMGS = {
    mandu: [I('mandu-1'), I('mandu-2')],
    mahesh: [I('narmada-1'), I('narmada-2')],
    ujjain: [I('mahakal-1'), I('mahakal-2'), I('mahakal-3')],
    jaipur: [I('jaipur-1'), I('jaipur-2')],
    udaipur: [I('udaipur-2'), I('udaipur-1')],
    kerala: [I('kerala-1'), I('kerala-2')]
  };
  const ALBUM = { name: 'Udaipur Lakes', group: 'Udaipur Udaan', imgs: ['album-1', 'album-2', 'album-3', 'album-4', 'album-5'].map(I) };

  const tempo = (driver, rating, route) => ({
    id: 'tt', name: 'AC Tempo Traveller', type: 'van', seats: '12 seats', ac: 'Air-conditioned', luggage: '12 small bags', driver, rating, route,
    features: ['Seat belts on every seat', 'GPS tracked with live link for family', 'First-aid kit onboard', 'Phone charging at each row'],
    access: [[L.part, 'Two steps to board, with a hand rail'], [L.ok, 'Front seats kept free for seniors'], [L.no, 'No wheelchair lift'], [L.ok, 'Trip manager helps with boarding and a folding walker fits in the boot']]
  });

  const D = {
    /* ------------------------------------------------------------------ MANDU */
    mandu: {
      chips: ['Verified stops', 'Back by 8 pm'],
      dist: 'Indore to Mandu about 95 km, 2 to 2.5 hours each way',
      about: 'Mandu is a ruined hill-fort city of the Malwa Sultanate. In one day you see the Jahaz Mahal between two lakes, Hoshang Shah\'s marble tomb and Rani Rupmati\'s pavilion above the Narmada valley.',
      itin: [
        ['6:00 am Pickups begin, Indore', 'Palasia, Vijay Nagar or Bus Stand'],
        ['9:30 Jahaz Mahal and Hindola Mahal', 'Guided story walk, tea on the way'],
        ['11:30 Hoshang Shah\'s Tomb and Jama Masjid', 'India\'s first marble tomb'],
        ['1:00 pm Lunch at MPT Malwa Resort', 'Dal bafla, veg and Jain thali, rest in the shade'],
        ['3:00 pm Rani Rupmati\'s Pavilion', 'Valley view from the hilltop'],
        ['5:15 pm Drive back to Indore', 'Back at pickup points by 8 pm']
      ],
      hub: [{ t: 'Day 1 · Mandu', d: 'Sat 21 Nov', items: [['6:35 am Pickup, Indore', 'Report 15 minutes before'], ['9:30 Jahaz Mahal and Hindola Mahal', 'Guided story walk'], ['1:00 pm Lunch at MPT Malwa Resort', 'Veg and Jain'], ['3:00 pm Rani Rupmati\'s Pavilion', 'Valley view']] }],
      tips: ['Best from October to March. Summer afternoons are very hot, so we start early.', 'Jahaz Mahal has a steep stair to the terrace. The ground floor and lake edge are an easy walk.', 'Monument gates charge small entry fees (about ₹5 to ₹25 for Indian adults, sources differ). Confirm before you go.'],
      food: ['Veg', 'Jain on request'],
      access: [['Ground-level lunch area at the resort', 1], ['Step-free path at Jahaz Mahal lake edge', 0], ['Vehicle with wheelchair lift', 0], ['Trip manager assists on request', 1]],
      incl: ['AC travel both ways', 'Lunch and evening tea', 'Trip manager and local guide', 'Water bottles on the way', 'Travel insurance'],
      notIncl: ['Monument entry tickets', 'Snacks between meals', 'Shopping and tips'],
      pickups: [['Palasia Square', '6:35 am', 1], ['Vijay Nagar Square', '6:20 am'], ['Indore Bus Stand, Gate 2', '6:00 am']],
      vehicles: [tempo('Dinesh P.', 4.7, 'Indore, Mandu, Indore'), {
        id: 'ert', name: 'Ertiga', type: 'suv', seats: '6 seats', ac: 'Air-conditioned', luggage: '6 small bags', driver: 'Salim A.', rating: 4.8, route: 'Same route, smaller group',
        features: ['Seat belts on every seat', 'GPS tracked with live link', 'Smooth ride on the ghat road'], access: [[L.ok, 'Low step, easy to board'], [L.ok, 'Folding wheelchair fits in the boot']] }],
      stay: {
        name: 'MPT Malwa Resort', label: 'Lunch stop', kind: 'Mandu · lunch and rest, no overnight', sub: 'Garden lunch and an hour of rest', photos: [IMGS.mandu[0], IMGS.mandu[1]],
        note: 'A calm garden lunch and an hour in the shade before the afternoon walk.', times: 'Lunch 1:00 pm · Rest till 2:30 pm', meals: 'Lunch and evening tea',
        rating: { avg: 4.4, count: 63, dist: d5(34, 20, 7, 2, 0) },
        incl: ['Veg and Jain lunch', 'Evening tea', 'Garden seating', 'Clean washrooms', 'Parking for the group'], notIncl: ['Drinks and snacks outside the set menu', 'Overnight stay'],
        access: [[L.ok, 'Ground-level dining area'], [L.part, 'Short gravel path from the parking'], [L.ok, 'Washroom on the ground floor']],
        reviews: [['Anjali', 'Bhopal', 5, 'Dal bafla in the garden after a morning of climbing was exactly right.'], ['Ritu', 'Delhi', 4, 'Clean, calm and the staff were quick with a big group.'], ['Kavita', 'Indore', 4, 'Good lunch. The path from parking is a little rough.']] }
    },

    /* ------------------------------------------------------------------ MAHESHWAR */
    mahesh: {
      chips: ['Verified stay', 'Back by 8 pm'],
      dist: 'Indore to Maheshwar about 95 km, Maheshwar to Omkareshwar about 65 km',
      about: 'Follow the Narmada to Maheshwar, the riverfront town of Rani Ahilyabai Holkar, then cross to Omkareshwar, a sacred jyotirlinga island shaped like the Om symbol. Fort, ghats, weavers and an aarti at dusk.',
      itin: [
        ['Day 1 · 6:00 am pickups begin, Indore', 'Palasia, Vijay Nagar or Bus Stand'],
        ['10:00 Ahilya Fort and Akhileshwar temple', 'Guided walk, breakfast on the way'],
        ['2:00 pm Lunch and weaving cooperative', 'See a Maheshwari saree made on the loom'],
        ['4:30 pm Ahilya Ghat walk and optional boat ride', 'Boat is paid separately'],
        ['6:30 pm Narmada aarti, dinner, stay', 'Heritage stay near the ghat'],
        ['Day 2 · Omkareshwar and return', 'Darshan, Mamleshwar temple, boat ride, back by 8 pm']
      ],
      hub: [
        { t: 'Day 1 · Maheshwar', d: 'Sat 28 Nov', items: [['6:35 am Pickup, Indore', 'Report 15 minutes before'], ['10:00 Ahilya Fort and Akhileshwar temple', 'Guided walk, breakfast on the way'], ['2:00 pm Lunch and weaving cooperative', 'Maheshwari saree workshop'], ['6:30 pm Narmada aarti, dinner, stay', 'Narmada Heritage Stay, 2 to a room']] },
        { t: 'Day 2 · Omkareshwar', d: 'Sun 29 Nov', items: [['7:30 am Breakfast and check-out', 'At the stay'], ['9:30 Omkareshwar darshan and Mamleshwar temple', 'Bridge or boat to the island'], ['1:00 pm Lunch', 'Veg and Jain'], ['3:30 pm Drive back to Indore', 'Back at pickup points by about 8 pm']] }
      ],
      tips: ['Omkareshwar has steps up to the temple. The 7 km island parikrama is optional.', 'Maheshwar is famous for Maheshwari sarees. The weaving cooperative is a good place to buy directly.', 'Boating at the ghat and the Omkareshwar abhishek are paid separately.'],
      food: ['Veg', 'Jain on request'],
      access: [['Ramp and ground-floor room at stay', 1], ['Step-free access at Maheshwar Ghat', 0], ['Vehicle with wheelchair lift', 0], ['Trip manager assists on request', 1]],
      incl: ['AC travel both ways', 'Verified stay, 2 to a room', '3 meals (veg, Jain on request)', 'Trip manager throughout', 'Weaving cooperative visit', 'Travel insurance'],
      notIncl: ['Boat rides at the ghat', 'Abhishek and puja charges', 'Personal shopping', 'Snacks between meals'],
      pickups: [['Palasia Square', '6:35 am', 1], ['Vijay Nagar Square', '6:20 am'], ['Indore Bus Stand, Gate 2', '6:00 am']],
      vehicles: [tempo('Mahesh V.', 4.8, 'Indore, Maheshwar, Omkareshwar, Indore'), {
        id: 'inn', name: 'Innova Crysta', type: 'suv', seats: '6 seats', ac: 'Air-conditioned', luggage: '6 small bags', driver: 'Farhan Q.', rating: 4.9, route: 'Same route, smaller group',
        features: ['Seat belts on every seat', 'GPS tracked with live link', 'Driver who knows the Narmada road'], access: [[L.ok, 'Low step, easy to board'], [L.ok, 'Folding wheelchair fits in the boot'], [L.part, 'Rear row is tight for tall travellers']] }],
      stay: {
        name: 'Narmada Heritage Stay', label: 'Stay', kind: 'Maheshwar · heritage stay near the ghat', sub: 'Shared rooms, 2 to a room', photos: [IMGS.mahesh[1], IMGS.mahesh[0]],
        note: 'A heritage-style stay a short walk from the ghat and the fort. Rooms are twin-sharing and our group is kept on the same floor.', times: 'Check-in 4 pm · Check-out 8 am', meals: 'Dinner and breakfast',
        rating: { avg: 4.7, count: 91, dist: d5(68, 17, 5, 1, 0) },
        incl: ['Twin-sharing room, group on one floor', 'Dinner and breakfast', 'Hot water 24 hours', 'Courtyard seating', 'CCTV in corridors'], notIncl: ['Room service', 'Laundry', 'Meals outside the set menu'],
        access: [[L.ok, 'Ramp at the entrance'], [L.ok, 'Ground-floor rooms on request'], [L.part, 'Few steps to the courtyard'], [L.no, 'No lift']],
        reviews: [['Pooja', 'Mumbai', 5, 'Walking to the ghat for the aarti, then back to a warm room. Perfect.'], ['Deepa', 'Surat', 5, 'Simple, clean and the food was home-style.'], ['Rashmi', 'Indore', 4, 'Lovely place. Wish the rooms had a bit more storage.']] }
    },

    /* ------------------------------------------------------------------ UJJAIN */
    ujjain: {
      chips: ['Verified stops', 'Back by 8 pm'],
      dist: 'Indore to Ujjain about 55 km, 1.5 hours each way',
      about: 'One calm day in the city of the Mahakal Jyotirlinga. Walk the Mahakal Lok corridor, take darshan at Mahakaleshwar, sit by the Shipra at Ram Ghat and visit Harsiddhi Mata and Kal Bhairav.',
      itin: [
        ['6:00 am Pickups begin, Indore', 'Palasia, Vijay Nagar or Bus Stand'],
        ['8:30 Ram Ghat on the Shipra', 'Short walk, tea and a quiet start'],
        ['9:30 Mahakal Lok and Mahakaleshwar darshan', 'Trip manager handles the queue'],
        ['12:30 pm Lunch', 'Veg and Jain thali'],
        ['2:00 pm Harsiddhi Mata and Kal Bhairav temples', 'Short rides between stops'],
        ['5:00 pm Drive back to Indore', 'Back at pickup points by 8 pm']
      ],
      hub: [{ t: 'Day 1 · Ujjain', d: 'Sun 6 Dec', items: [['6:35 am Pickup, Indore', 'Report 15 minutes before'], ['9:30 Mahakal Lok and darshan', 'Trip manager handles the queue'], ['12:30 pm Lunch', 'Veg and Jain'], ['2:00 pm Harsiddhi Mata and Kal Bhairav', 'Short rides between stops']] }],
      tips: ['Temple opens around 4 am and stays open till about 11 pm. Timings shift on festival days.', 'Modest traditional clothing covering shoulders and knees is expected. A saree or salwar suit is best. Phones and bags are not allowed inside, so we arrange lockers.', 'Bhasma Aarti (4 to 6 am) needs an advance pass from the official temple site (about ₹200) and an ID. It is not part of this day trip.'],
      food: ['Veg', 'Jain on request'],
      access: [['Benches and rest stops every 20 minutes', 1], ['Step-free path in the Mahakal Lok corridor', 1], ['Vehicle with wheelchair lift', 0], ['Trip manager assists on request', 1]],
      incl: ['AC travel both ways', 'Lunch and evening tea', 'Trip manager throughout', 'Locker help at the temple', 'Travel insurance'],
      notIncl: ['Bhasma Aarti pass', 'Sheeghra Darshan pass (about ₹250)', 'Puja items and offerings', 'Snacks between meals'],
      pickups: [['Palasia Square', '6:35 am', 1], ['Vijay Nagar Square', '6:20 am'], ['Indore Bus Stand, Gate 2', '6:00 am']],
      vehicles: [tempo('Ramesh K.', 4.8, 'Indore, Ujjain, Indore'), {
        id: 'inn', name: 'Innova Crysta', type: 'suv', seats: '6 seats', ac: 'Air-conditioned', luggage: '6 small bags', driver: 'Imran S.', rating: 4.9, route: 'Same route, smaller group',
        features: ['Seat belts on every seat', 'GPS tracked with live link', 'Quieter ride for older travellers'], access: [[L.ok, 'Low step, easy to board'], [L.ok, 'Folding wheelchair fits in the boot'], [L.part, 'Rear row is tight for tall travellers']] }],
      stay: {
        name: 'Shipra Bhojanalay', label: 'Lunch stop', kind: 'Ujjain · lunch near the temples', sub: 'Veg and Jain thali', photos: [IMGS.ujjain[1], IMGS.ujjain[2]],
        note: 'A simple vegetarian restaurant ten minutes from Mahakal Lok, booked for our group so there is no waiting.', times: 'Lunch 12:30 pm · Rest till 1:45 pm', meals: 'Lunch and evening tea',
        rating: { avg: 4.5, count: 118, dist: d5(72, 33, 10, 3, 0) },
        incl: ['Veg and Jain thali', 'Evening tea', 'Reserved group table', 'Clean washrooms', 'Parking nearby'], notIncl: ['Sweets and extras', 'Overnight stay'],
        access: [[L.ok, 'Ground-level dining hall'], [L.ok, 'Washroom on the ground floor'], [L.part, 'One step at the entrance']],
        reviews: [['Neha', 'Pune', 5, 'Hot food right when we were hungry after darshan.'], ['Sunita', 'Jaipur', 4, 'Good thali and a place to sit down. Needed after the queue.'], ['Meera', 'Nagpur', 4, 'Simple and clean. The manager was very helpful.']] }
    },

    /* ------------------------------------------------------------------ JAIPUR */
    jaipur: {
      chips: ['Verified stay', 'Airport pickup'],
      dist: 'Jaipur airport to the Old City about 15 km',
      about: 'A first Jaipur done well: Hawa Mahal in the morning light, Amber Fort on its hill, the City Palace and Jantar Mantar, and an afternoon at a block-printing studio. You stay in a haveli inside the Old City.',
      itin: [
        ['Day 1 · Arrive and Old City', 'Pickup from airport or station, check in'],
        ['3:30 pm Hawa Mahal and Johari Bazaar', 'Rooftop chai and bangles'],
        ['Day 2 · 8:30 am Amber Fort', 'Before the crowds. Open 8 am to 5:30 pm'],
        ['12:30 pm Lunch near Jal Mahal', 'Photo stop on Man Sagar lake'],
        ['2:30 pm City Palace and Jantar Mantar', 'With a local guide'],
        ['Day 3 · Block printing and goodbye', 'Print your own scarf, drop at airport or station']
      ],
      hub: [
        { t: 'Day 1 · Arrival', d: 'Sat 12 Dec', items: [['12:00 pm Pickup at airport or station', 'Check in at the haveli'], ['3:30 pm Hawa Mahal and Johari Bazaar', 'Rooftop chai'], ['8:30 pm Dinner', 'Rajasthani thali']] },
        { t: 'Day 2 · Amber Fort', d: 'Sun 13 Dec', items: [['8:30 am Amber Fort', 'Guided, 2 hours'], ['12:30 pm Lunch near Jal Mahal', 'Veg thali'], ['2:30 pm City Palace and Jantar Mantar', 'Free time to shop after']] },
        { t: 'Day 3 · Block printing', d: 'Mon 14 Dec', items: [['9:30 am Hand-block printing workshop', 'Print your own scarf'], ['12:30 pm Lunch and shopping', 'Bapu Bazaar'], ['3:00 pm Drop at airport or station', 'Flights after 6 pm']] }
      ],
      tips: ['Best from October to March. Winter mornings are cool and the light is soft.', 'Hawa Mahal is open about 9 am to 5 pm (entry around ₹50 for Indian adults). Amber Fort is about ₹100 and City Palace about ₹200. Fees change, so we confirm before the trip.', 'Amber Fort has a long climb. Jeeps run to the gate for a fee.'],
      food: ['Veg', 'Jain on request'],
      access: [['Ground-floor rooms on request at the haveli', 1], ['Step-free access at Amber Fort', 0], ['Vehicle with wheelchair lift', 0], ['Trip manager assists on request', 1]],
      incl: ['Airport or station pickup and drop', '2 nights in a heritage haveli', '2 breakfasts, 2 dinners, 1 lunch', 'Guide at Amber Fort and City Palace', 'Block-printing workshop', 'Travel insurance'],
      notIncl: ['Monument entry tickets', 'Jeep ride at Amber Fort', 'Flights or trains to Jaipur', 'Personal shopping'],
      pickups: [['Jaipur Airport (JAI)', '12:00 pm', 1], ['Jaipur Railway Station', '12:30 pm'], ['Hotel in the Old City', '1:00 pm']],
      vehicles: [tempo('Bhanwar S.', 4.9, 'Airport, haveli, Amber, City Palace, airport'), {
        id: 'er', name: 'Electric rickshaw', type: 'erick', seats: '4 seats', ac: 'Open air', luggage: 'Small bags only', driver: 'Local driver', rating: 4.6, route: 'Haveli, Hawa Mahal and the bazaar lanes',
        features: ['Used only inside the Old City lanes', 'Quiet, no fumes', 'Trip manager rides alongside'], access: [[L.part, 'One high step to board'], [L.no, 'No space for a wheelchair'], [L.ok, 'Hand rails on both sides']] }],
      stay: {
        name: 'Haveli Anaar', label: 'Stay', kind: 'Jaipur · heritage haveli in the Old City', sub: '2 nights, 2 to a room', photos: [IMGS.jaipur[1], IMGS.jaipur[0]],
        note: 'Courtyard rooms with painted arches, a rooftop for chai and a kitchen that cooks for the group. Twin-sharing, one floor for our group.', times: 'Check-in 12 pm · Check-out 11 am', meals: '2 breakfasts, 2 dinners, 1 lunch',
        rating: { avg: 4.8, count: 142, dist: d5(118, 18, 4, 2, 0) },
        incl: ['Twin-sharing room, group on one floor', 'Breakfast and dinner', 'Rooftop chai', 'Wi-Fi', 'Hot water 24 hours'], notIncl: ['Laundry', 'Room service', 'Meals outside the set menu'],
        access: [[L.part, 'A few steps at the entrance'], [L.ok, 'Ground-floor rooms on request'], [L.no, 'No lift in the old building'], [L.ok, 'Attached bathroom in every room']],
        reviews: [['Shalini', 'Bengaluru', 5, 'Staying inside the Old City meant I could walk to the bazaar in the evening and feel safe.'], ['Priya', 'Kolkata', 5, 'The rooftop at sunset was the best part of the trip.'], ['Nandini', 'Hyderabad', 5, 'Beautiful haveli and warm staff. The stairs are steep.']] }
    },

    /* ------------------------------------------------------------------ UDAIPUR */
    udaipur: {
      chips: ['Verified stay', 'Life jackets on boats'],
      dist: 'Udaipur airport to the City Palace about 25 km',
      about: 'The White City of lakes. You walk the City Palace, take a sunset boat on Lake Pichola with a stop at Jag Mandir, and end the day with the lake lights from a rooftop dinner.',
      itin: [
        ['Day 1 · 10:00 am Pickup, check in', 'Airport or station'],
        ['12:30 pm Lunch in the old city', 'Veg and Jain'],
        ['2:30 pm City Palace with a guide', 'Open 9:30 am to 5:30 pm'],
        ['4:45 pm Sunset boat on Lake Pichola', 'Jag Mandir stop, life jackets for all'],
        ['7:30 pm Rooftop dinner facing the lake', 'Lake-view haveli'],
        ['Day 2 · Saheliyon ki Bari and Fateh Sagar', 'Gardens, tea by the water, drop at 2:30 pm']
      ],
      hub: [
        { t: 'Day 1 · City Palace and the lake', d: 'Sat 19 Dec', items: [['10:00 am Pickup, check in', 'Airport or station'], ['2:30 pm City Palace with a guide', 'Courtyards and mirror work'], ['4:45 pm Sunset boat on Lake Pichola', 'Jag Mandir stop'], ['7:30 pm Rooftop dinner', 'Lake view']] },
        { t: 'Day 2 · Gardens and goodbye', d: 'Sun 20 Dec', items: [['8:30 am Saheliyon ki Bari', 'Garden walk'], ['10:30 am Fateh Sagar Lake', 'Tea by the water'], ['2:30 pm Drop at airport or station', 'Flights after 6 pm']] }
      ],
      tips: ['The sunset boat leaves from the City Palace jetty at Rameshwar Ghat. We book the one that stops at Jag Mandir.', 'City Palace has many staircases between courtyards. Sit-down breaks are built in.', 'Best from October to March.'],
      food: ['Veg', 'Jain on request'],
      access: [['Lift to all floors at the haveli', 1], ['Step-free access at City Palace', 0], ['Boat with wheelchair access', 0], ['Trip manager assists on request', 1]],
      incl: ['Airport or station pickup and drop', '1 night in a lake-view haveli', 'Dinner, breakfast and lunch', 'Sunset boat ride on Lake Pichola', 'Guide at City Palace', 'Travel insurance'],
      notIncl: ['City Palace entry ticket', 'Camera fee at the palace', 'Flights or trains to Udaipur', 'Personal shopping'],
      pickups: [['Udaipur Airport (Dabok)', '10:00 am', 1], ['Udaipur City Railway Station', '10:30 am'], ['Chetak Circle', '11:00 am']],
      vehicles: [tempo('Gopal M.', 4.8, 'Airport, haveli, gardens, airport'), {
        id: 'bt', name: 'Lake Pichola sunset boat', type: 'boat', seats: '20 seats', ac: 'Open deck with canopy', luggage: 'Small bags only', driver: 'Boatman', rating: 4.7, route: 'City Palace jetty, Jag Mandir, back',
        features: ['Life jackets for everyone', 'Jag Mandir island stop', '45 to 60 minute ride'], access: [[L.part, 'Narrow steps down to the jetty'], [L.part, 'Boatman helps you step on and off'], [L.no, 'No wheelchair access']] }],
      stay: {
        name: 'Pichola Pol Haveli', label: 'Stay', kind: 'Udaipur · lake-view haveli near City Palace', sub: '1 night, 2 to a room', photos: [IMGS.udaipur[0], IMGS.udaipur[1]],
        note: 'Rooms look out onto the lake and a rooftop restaurant serves dinner with a view of the island palaces. Twin-sharing, group on one floor.', times: 'Check-in 11 am · Check-out 11 am', meals: 'Dinner, breakfast and lunch',
        rating: { avg: 4.8, count: 126, dist: d5(104, 15, 5, 2, 0) },
        incl: ['Twin-sharing room, group on one floor', 'Dinner and breakfast', 'Rooftop restaurant', 'Wi-Fi', 'Hot water 24 hours'], notIncl: ['Laundry', 'Room service', 'Meals outside the set menu'],
        access: [[L.part, 'Narrow lane to the entrance'], [L.ok, 'Lift to all floors'], [L.ok, 'Ground-floor rooms on request']],
        reviews: [['Sonal', 'Ahmedabad', 5, 'Rooftop dinner with the lake lights was dreamy.'], ['Aarti', 'Pune', 5, 'Everyone in the group looked after each other. Lovely stay.'], ['Lata', 'Mumbai', 5, 'Woke up to the lake from my window. Highly recommend.']] }
    },

    /* ------------------------------------------------------------------ KERALA */
    kerala: {
      chips: ['Verified houseboat', 'Life jackets on boats'],
      dist: 'Kochi to Alappuzha about 60 km, 1.5 to 2 hours',
      about: 'Five slow days in God\'s own country: Fort Kochi, a night on a private houseboat on Vembanad Lake, village canoes through Kuttanad and a quiet morning at Kumarakom.',
      itin: [
        ['Day 1 · Kochi arrival', 'Fort Kochi walk, Chinese fishing nets at sunset'],
        ['Day 2 · Alappuzha and the houseboat', 'Board around noon, cruise Vembanad Lake'],
        ['5:30 pm Anchor for the night', 'Boats do not cruise after dark'],
        ['Day 3 · Kumarakom', 'Checkout 9 am, bird sanctuary and village canoe'],
        ['Day 4 · Kuttanad villages', 'Canoe through the canals, Kerala home meal'],
        ['Day 5 · Farewell', 'Breakfast and drop at Kochi airport or station']
      ],
      hub: [
        { t: 'Day 1 · Kochi', d: 'Tue 12 Jan', items: [['Pickup at Kochi airport or station', 'Check in'], ['4:30 pm Fort Kochi walk', 'Chinese fishing nets at sunset']] },
        { t: 'Day 2 · Houseboat', d: 'Wed 13 Jan', items: [['9:30 am Drive to Alappuzha', 'About 60 km'], ['12:00 pm Board the houseboat', 'Welcome drink, lunch on board'], ['5:30 pm Anchor for the night', 'Dinner on the deck']] },
        { t: 'Day 3 · Kumarakom', d: 'Thu 14 Jan', items: [['9:00 am Checkout and drive to Kumarakom', 'Bird sanctuary walk'], ['1:00 pm Lunch', 'Kerala meal']] },
        { t: 'Day 4 · Kuttanad', d: 'Fri 15 Jan', items: [['9:00 am Village canoe through the canals', 'About 45 minutes'], ['1:00 pm Home-cooked meal', 'In a village home']] },
        { t: 'Day 5 · Farewell', d: 'Sat 16 Jan', items: [['8:00 am Breakfast', 'At the stay'], ['11:00 am Drop at Kochi airport or station', 'Flights after 3 pm']] }
      ],
      tips: ['Houseboats board around 11:30 am to noon and check out about 9 am the next day.', 'Air conditioning on most boats runs from about 9 pm to 6 am. Boats anchor by 5:30 pm.', 'Best from October to March. Monsoon rides are quieter but wetter.'],
      food: ['Veg', 'Jain on request'],
      access: [['Private bathroom in every cabin', 1], ['Step-free boarding onto the houseboat', 0], ['Vehicle with wheelchair lift', 0], ['Trip manager assists on request', 1]],
      incl: ['Airport or station pickup and drop', '1 night on a private AC houseboat', '4 nights in verified stays', 'All meals on the houseboat', 'Canoe ride in Kuttanad', 'Travel insurance'],
      notIncl: ['Flights or trains to Kochi', 'Drinks other than bottled water', 'Tips for the boat crew', 'Personal shopping'],
      pickups: [['Kochi Airport (Nedumbassery)', '9:30 am', 1], ['Ernakulam Junction', '10:30 am'], ['Fort Kochi', '11:00 am']],
      vehicles: [tempo('Sajeev N.', 4.9, 'Kochi, Alappuzha, Kumarakom, Kochi'), {
        id: 'cn', name: 'Village canoe', type: 'boat', seats: '6 seats', ac: 'Open air', luggage: 'No luggage', driver: 'Boatman', rating: 4.8, route: 'Jetty, village canals, jetty',
        features: ['Life jackets for everyone', 'About 45 minutes through narrow canals', 'Quiet and low to the water'], access: [[L.part, 'Low seat, crew helps you step in'], [L.no, 'No wheelchair access']] }],
      stay: {
        name: 'Kuttanad Rani Houseboat', label: 'Stay', kind: 'Alappuzha · private AC houseboat', sub: '1 night, twin-sharing cabins', photos: [IMGS.kerala[1], IMGS.kerala[0]],
        note: 'One private houseboat for our group. AC cabins with attached bathrooms, an open deck and a crew of three: captain, cook and helper.', times: 'Board 12 pm · Checkout 9 am', meals: 'Lunch, snacks, dinner and breakfast',
        rating: { avg: 4.9, count: 121, dist: d5(110, 8, 2, 1, 0) },
        incl: ['AC cabin with attached bath', 'Kerala meals cooked on board', 'Bottled water', 'Life jackets', 'Welcome drink'], notIncl: ['Drinks other than bottled water', 'Tips for the crew'],
        access: [[L.part, 'Plank walkway to board, crew helps'], [L.part, 'One step into each cabin'], [L.no, 'Ladder to the upper deck']],
        reviews: [['Divya', 'Chennai', 5, 'Sunset on the deck with a cup of tea. I did nothing for a day and loved it.'], ['Radha', 'Delhi', 5, 'The cook\'s fish curry and rice, I still think about it.'], ['Smita', 'Pune', 5, 'Felt completely safe. The crew was respectful.']] }
    }
  };

  window.HSD = { D, IMGS, ALBUM, L };
})();
