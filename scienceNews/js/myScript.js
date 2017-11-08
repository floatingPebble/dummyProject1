var funfact = ["Mercury and Venus are the only two planets in our solar system that do not have any moons.",
               "If a star passes too close to a black hole, it can be torn apart.",
               "The solar system is around 4.6 billion years old.Scientist estimate that it will probably last another 5000 million years.",
               "Enceladus, one of Saturn's smaller moons, reflects some 90% of the sunlight, making it more reflective than snow!",
               "The Whirpool Galaxy(M51) was the very first celestial object to be identified as being spiral.",
               "The width of the Milky Way is around 100,000 light years.",
               "Because of the lower gravity, a person who weighs 100kg on Earth, would only weigh 38kg on surface of Mars.",
               "Scientists believe there are 67 moons that orbit Jupiter, however only 53 of these have been named.",
               "The Martian day is 24 hours 39 minutes and 35 seconds.",
               "Venus is the only planet that spins backwards relative to the other planets.",
               "There are more volcanos on Venus than on any other planet within our solar system.",
               "Because of its unique tilt, a single night on Uranus lasts 21 years!",
               "Charon is one of the moons of Pluto, and is only slightly smaller than Pluto itself."

];

function randFact(){
	var x = Math.floor(Math.random() * funfact.length);
	return x; 
}
    
var missions = ["Autumn(2017) – Private company Asgardia, which wants to create the first “space-based nation”, will launch its first unmanned satellite.",
                "November(2017) – SpaceX will perform an unmanned test of its Crew Dragon vehicle in orbit. A manned flight is scheduled to follow in May 2018.",
                "December(2017) – Russia's long-awaited Nauka module, also called the Multipurpose Laboratory Module (MLM), is scheduled to launch to the International Space Station (ISS).",
                "December(2017) – By the end of the year, Blue Origin is expected to begin manned launches to space, ahead of paid space tourism flights.",
                "December(2017) – A new NASA planet-hunting telescope, the Transiting Exoplanet Survey Satellite (TESS), should launch by the end of the year.",
                "December 19(2017) – A new European planet-hunting telescope, the Characterising Exoplanets Satellite (CHEOPS), will be ready to launch.",
                "TBD(2017) – XCOR’s Lynx spaceplane is set to begin test flights. The plane will seat two people on short hops into space.",
                "TBD(2017) – Private Arizona-based company World View Enterprises aims to start sending paying customers on high-altitude balloon rides, spending two hours at an altitude of 30,500 meters (100,000 feet) for $75,000.",
                "TBD(2017) – China will attempt to return samples from the Moon with its Chang’e 5 mission. This will be the first lunar sample return mission since 1976.",
                "TBD(2017) – Two competitors in Google's Lunar XPRIZE, Moon Express and SpaceIL, are expected to launch to the Moon and attempt to land unmanned probes, the first ever private lunar landings. Several other companies also have launch contracts.",
                "TBD(2017) – SpaceX's new heavy-lift rocket, the Falcon Heavy, should launch for the first time.",
                "January(2018) – Proposed launch date for Inspiration Mars, a private mission to send two people on a flyby of Mars. It’s highly unlikely the mission will ever happen, however.",
                "February(2018) – NASA’s Juno mission, which is currently studying Jupiter, is scheduled to end. A recent issue with the spacecraft, however, has meant the mission may be extended beyond 2019.",
                "April(2018) – The European Space Agency (ESA) will launch BepiColombo, Europe’s first mission to Mercury.",
                "May 5(2018) – NASA will launch its delayed InSight lander to Mars. Touchdown is expected on November 26. The unmanned probe will study the interior of the Red Planet.",
                "May(2018) – SpaceX plans to launch its first unmanned mission to Mars, which will also be the first private Mars mission.",
                "June(2018) – First unmanned test of Boeing's Starliner crew capsule. A manned flight will follow in August 2018.",
                "July 31(2018) – NASA’s Solar Probe Plus mission will launch, the first mission to fly into the Sun’s upper atmosphere, approaching within just 8.5 solar radii of the “surface”.",
                "July(2018) – Japan’s Hayabusa 2 spacecraft will arrive at its target, the asteroid Ryugu. It launched on December 3, 2014, on its way to the asteroid, and will attempt to return a sample to Earth in December 2020.",
                "August(2018) – NASA’s OSIRIS-REx spacecraft will arrive at the asteroid Bennu, returning to Earth in September 2023 with a sample of between 60 grams and 2 kilograms (0.1 and 4.4 pounds) – the largest sample returned to Earth since the Apollo missions.",
                "October(2018) – NASA’s huge new rocket, the Space Launch System (SLS), is scheduled to launch for the first time. It will send the Orion spacecraft on a three-week mission around the Moon, although rumors abound that one – or both – of the SLS or Orion may be scrapped.",
                "October(2018) – NASA’s James Webb Space Telescope (JWST), the high-profile successor to the Hubble space telescope that has experienced numerous cost overruns and delays, will finally launch.",
                "October(2018) - ESA will launch its Solar Orbiter (SolO), a mission that will study the Sun's heliosphere, its poles, and solar wind.",
                "December(2018) – India will launch its next mission to the Moon, Chandrayaan-2, which will include an orbiter, lander, and rover.",
                "TBD(2018) – Japan will launch a new Moon mission called SELENE-2, a successor to 2007’s SELENE mission. Like India’s mission, it will consist of an orbiter, lander, and rover.",
                "TBD(2018) – China will aim to become the first nation to land a probe on the far side of the Moon with its Chang’e 4 lunar lander.",
                "January 1(2019) – New Horizons will perform a flyby of an object in the outer Solar System, a Kuiper Belt object called 2014 MU69.",
                "October(2019) – The Sierra Nevada Corporation’s unmanned Dream Chaser vehicle, a space plane about a quarter the size of the Space Shuttle, will launch for the first time atop an Atlas V rocket.",
                "Late 2019 – Japan’s unmanned Smart Lander for Investigating Moon (SLIM) is expected to launch. It will be able to perform a precise landing by analyzing the ground during its approach.",
                "TBD(2019) – 2019 may be the year that Virgin Galactic finally starts sending paying customers into space.",
                "TBD(2019) – Asteroid mining company Deep Space Industries may launch its first unmanned spacecraft to an asteroid called Prospector 1.",
                "July(2020) – NASA’s next Mars rover, tentatively named the Mars 2020 rover, will launch to the Red Planet. It will aim to search for signs of past life on Mars. This, and the other Mars missions below, will arrive in early 2021.",
                "July(2020) – ESA’s Exomars rover will launch to Mars, searching for signs of past or present life.",
                "July(2020) – The United Arab Emirates (UAE) will attempt to launch its first mission to Mars, an orbiter called Hope.",
                "July(2020) – India will launch its second mission to Mars, an orbiter called Mangalyaan 2. It may also include a lander and rover.",
                "July(2020) – SpaceX may launch its next unmanned mission to Mars.",
                "July/August(2020) – China plans to launch an orbiter, lander, and rover to Mars, its first mission to the Red Planet.",
                "October(2020) – The Asteroid Impact Mission (AIM), a joint NASA-ESA mission to see how slamming a spacecraft into an asteroid changes its trajectory, will launch. The status of the mission is currently in jeopardy, however, after ESA pulled its funding.",
                "TBD(2020) – Chang’e 6, another Chinese mission to the Moon, will launch. It’s not clear what this mission will do.",
                "TBD(2020) – The Square Kilometer Array (SKA), the world’s largest radio telescope array with a collecting area of one square kilometer (0.39 square miles), will switch on for the first time.",
                "TBD(2020) – Bigelow Aerospace hopes to start construction of the first space hotel with its B330 module.",
                "TBD(2020) – ESA’s Euclid mission will launch. It will be tasked with studying the acceleration of the universe by measuring the redshift of distant galaxies, giving us a greater understanding of dark energy and dark matter.",
                "October(2021) – NASA will launch a spacecraft called Lucy to study Jupiter's Trojan asteroids, and one main belt asteroid, from August 2027 to March 2033.",
                "TBD(2021) – Earliest date for NASA’s Orion spacecraft to launch with a crew for the first time on a mission to lunar orbit and back. The target is between 2021 and 2023 for this mission.",
                "TBD(2021) – India plans to launch its first manned mission.",
                "TBD(2022) – ESA will launch its Jupiter Icy Moons Explorer (JUICE), a spacecraft to study the Jovian moons Ganymede, Callisto, and Europa. It would enter orbit around Jupiter in 2030 and Ganymede in 2033.",
                "TBD(2022) – China will launch the first part of a new large space station, about one-seventh the size of the ISS. This first module will be called Tiangong-3.",
                "TBD(2022) – The Thirty Meter Telescope (TMT), an extremely large telescope that will be built in either Hawaii or the Canary Islands, will become operational.",
                "TBD(2022) – At some point in the mid-2020s, possibly 2022, NASA will launch its Europa Multiple-Flyby Mission. This spacecraft will perform repeated flybys of Jupiter’s moon Europa to study its subsurface ocean and ascertain its habitability, and may also include a lander.",
                "TBD(2022) – Japan may launch a mission to return a sample from the Martian moon Phobos.",
                "October(2023) – NASA will launch the Psyche mission, to study a metal-rich asteroid of the same name in 2030.",
                "TBD(2024) – SpaceX plans to launch the first manned Mars mission, part of its bold Interplanetary Transport System (ITS) project.",
                "TBD(2024) – ESA may launch a sample return mission to the Martian moon Phobos, called Phootprint.",
                "TBD(2024) – The European Extremely Large Telescope (E-ELT), the world’s largest optical telescope, will become operational.",
                "TBD(2024) – The International Space Station (ISS) will be closed and later de-orbited. This date may be extended to 2028 or even later, though.",
                "TBD(2024) – ESA’s Planetary Transits and Oscillations of Stars (PLATO) satellite is expected to launch, which will search for planetary systems beyond our own, with an emphasis on Earth-like planets around Sun-like stars.",
                "TBD(2025) – At some point in the mid-2020s, NASA may launch a mission to return a sample of material from the surface of Mars.",
                "TBD(2025) – NASA will launch its Wide Field Infrared Survey Telescope (WFIRST) in the mid-2020s, which will study dark energy and search for planetary systems like our own.",
                "TBD(2026) – Proposed year for the launch of NASA’s Asteroid Redirect Mission (ARM), which will see a crew in an Orion capsule visit a captured asteroid in lunar orbit. This may be combined with the previous Orion mission or scrapped entirely, though.",
                "TBD(2028) – ESA will launch its Athena mission, a space telescope that will map the hot gas in the universe, and study supermassive black holes.",
                "TBD(2030s) – NASA may launch humans into orbit around Mars, possibly landing on the Martian moon Phobos and operating rovers on the surface of Mars. They are aiming for manned missions to the surface of Mars by the end of the 2030s.",
                "TBD(2030s) – Around this time, China and Russia have tentative proposals to land people on the Moon.",
                "TBD(2031) – Proposed launch for Russia’s Mercury-P spacecraft, which will perform the first ever landing on Mercury.",
                "TBD(2031) – Russia wants to perform its first manned lunar landing.",
                "TBD(2036) – Breakthrough Starshot, a bold initiative to send spacecraft to our nearest star, Proxima Centauri, is expected to launch.",         
];	

var missIndx = 0;

function next(){
	missIndx = missIndx + 1;
	missIndx = missIndx % missions.length;
	return missions[missIndx];
}

function previous(){
	if(missIndx === 0){
		missIndx = missions.length;
	}
	missIndx = missIndx - 1;
	return missions[missIndx];
}

