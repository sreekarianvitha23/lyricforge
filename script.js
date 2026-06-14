// ===== MOOD CHIP TOGGLE =====
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

function getSelectedMood() {
  const active = document.querySelector('.chip.active');
  return active ? active.dataset.mood : 'Hopeful';
}

// ===== LYRICS BANK =====
// Organized by mood. Each entry has verse1, verse2, chorus, bridge sections.
const lyricsBank = {
  Hopeful: [
    {
      verse1: `I've been walking through the dark so long\nForgot the feeling of the morning sun\nBut something tells me I'm not alone\nAnd maybe this is how the healing's done`,
      verse2: `The road is long but I can see the light\nA flicker at the edge of all my doubt\nI've got the scars to prove I've had to fight\nBut now I know what living's all about`,
      chorus: `I'm rising up from the ashes of before\nBreaking every chain they locked me in\nToday I open up a brand new door\nThis is where my life begins again`,
      bridge: `Don't give up, don't give in\nEvery ending is a new begin\nHold on, hold on tight\nMorning always follows through the night`
    },
    {
      verse1: `Packed my bags on a Tuesday dawn\nLeft the city and the weight I'd worn\nSomewhere out there past the horizon line\nThere's a version of me that's gonna shine`,
      verse2: `Called my mother, said I'll be just fine\nShe said baby let the stars align\nYou were born to do more than survive\nGo find the reason that you're still alive`,
      chorus: `I can feel it in my bones tonight\nSomething beautiful is on its way\nAll the pieces falling into light\nHope has got me and I'm here to stay`,
      bridge: `Through every storm I held on\nNow I can finally see\nAll the pain was just the song\nLeading me back to me`
    }
  ],
  Heartbroken: [
    {
      verse1: `Your coffee cup still sits beside the sink\nI keep it there so I don't have to think\nAbout the morning you just walked away\nLeft nothing but the echo of your name`,
      verse2: `I changed the sheets but still smell your perfume\nYour ghost is breathing in every room\nI delete your number and add it back\nThis heart of mine keeps going off the track`,
      chorus: `How do you unlove someone like you\nHow do I fill the hole you left behind\nI'm standing in the ruins of us two\nWith nothing left but memories and time`,
      bridge: `Maybe one day I'll forget your face\nMaybe one day someone takes your place\nBut tonight I'm still drowning in this space\nWishing love had never felt so safe`
    }
  ],
  Romantic: [
    {
      verse1: `You smiled across the room at half past nine\nThe world went slow like it had lost its mind\nI never really believed in signs\nUntil your eyes met mine and realigned`,
      verse2: `We talked until the city went to sleep\nEvery word a secret we could keep\nI didn't know that I was lost until\nYou found me and the world became still`,
      chorus: `This is what they wrote the songs about\nThis is what I never lived without\nYou are every reason and every doubt\nAnd I wouldn't change a single thing about us`,
      bridge: `Take my hand and let's stay here\nIn this moment, crystal clear\nEvery heartbeat, every breath\nI'd choose you a thousand times till death`
    }
  ],
  Empowering: [
    {
      verse1: `They told me I was too loud, too much\nSaid my dreams were out of touch\nBut I've been building brick by brick\nEvery scar became my trick`,
      verse2: `No more waiting for permission slips\nNo more silence on my lips\nI am everything they said I'd never be\nWatch me burn so brilliantly`,
      chorus: `I am the storm they couldn't stop\nI am the fire at the top\nEvery wall they built I broke it down\nNobody puts me in the ground\nI rise, I rise, I rise`,
      bridge: `Not for them, not for the crowd\nI do this for me, I say it loud\nEvery version of me that hid away\nSteps into the light today`
    }
  ],
  Nostalgic: [
    {
      verse1: `Old photographs in a shoebox lid\nA younger face, a carefree kid\nSummer nights and borrowed bikes\nForgetting time was something we liked`,
      verse2: `The old street looks the same but feels so changed\nThe people moved, the fences rearranged\nI can almost hear us laughing still\nAt the bottom of that old green hill`,
      chorus: `Take me back to where we started\nBefore we all grew up and parted\nBack when trouble had a simpler name\nAnd everything felt like a simple game`,
      bridge: `You can't step in the same river twice\nBut sometimes late at night I try\nI'd give anything for one more day\nBefore we all just drifted away`
    }
  ],
  Angry: [
    {
      verse1: `You lied right to my face and smiled\nPlayed me like I was a little child\nBuilt a house of cards and called it love\nNow you want forgiveness from above`,
      verse2: `I wasted years believing in your game\nFollowed every story, took the blame\nBut I am done with swallowing my rage\nI'm writing myself out of this cage`,
      chorus: `Don't call my name, don't knock my door\nI've heard your sorry one too many times before\nYou burned the bridge so watch it fall\nI don't need you at all`,
      bridge: `This anger is my fuel now\nWatch what I become\nEvery word you said to bring me down\nI'll use to rise above`
    }
  ],
  Dark: [
    {
      verse1: `The lights are low and the city breathes\nA cold reminder underneath\nOf everything I've tried to hide\nThis hollow ache I carry inside`,
      verse2: `The mirror shows a face I don't know\nA stranger in the afterglow\nOf all the nights I tried to feel\nSomething close to something real`,
      chorus: `Falling through the cracks of in-between\nLiving in the spaces no one sees\nWearing all these masks to just survive\nSometimes I forget I'm still alive`,
      bridge: `In the dark there's something growing\nSomething only I can see\nIn the silence something knowing\nThere's still something left of me`
    }
  ],
  Chill: [
    {
      verse1: `Sunday morning, windows open wide\nCoffee in my hand, the world outside\nNothing on my mind but where the light falls\nOn the dust that drifts beside the walls`,
      verse2: `Got no plans and that feels just right\nYesterday is gone, tomorrow's out of sight\nJust this moment breathing slow and sweet\nEverything I need is incomplete`,
      chorus: `Let the world keep spinning without me\nI'll be here just floating in the breeze\nAll the noise can wait, come find me\nSomewhere in between asleep and free`,
      bridge: `No rush, no race\nJust this moment, just this place\nLet it go, let it be\nThis right here is everything`
    }
  ]
};

// ===== STRUCTURE BUILDER =====
function buildLyrics(sections, structure) {
  const { verse1, verse2, chorus, bridge } = sections;
  let result = '';

  if (structure === 'full') {
    result = `[Verse 1]\n${verse1}\n\n[Chorus]\n${chorus}\n\n[Verse 2]\n${verse2}\n\n[Chorus]\n${chorus}\n\n[Bridge]\n${bridge}\n\n[Chorus]\n${chorus}`;
  } else if (structure === 'short') {
    result = `[Verse 1]\n${verse1}\n\n[Chorus]\n${chorus}\n\n[Verse 2]\n${verse2}\n\n[Chorus]\n${chorus}`;
  } else if (structure === 'verse') {
    result = `[Verse 1]\n${verse1}\n\n[Verse 2]\n${verse2}`;
  } else if (structure === 'chorus') {
    result = `[Chorus]\n${chorus}`;
  }

  return result;
}

// ===== RENDER LYRICS WITH STYLED LABELS =====
function renderLyrics(text) {
  return text.replace(/\[(.*?)\]/g, '<span class="section-label">[$1]</span>');
}

// ===== MAIN GENERATE FUNCTION =====
function generateLyrics() {
  const theme = document.getElementById('theme').value.trim();
  const mood = getSelectedMood();
  const structure = document.getElementById('structure').value;
  const genre = document.getElementById('genre').value;
  const artist = document.getElementById('artist').value.trim();

  if (!theme) {
    showError('Please enter a theme or story for your song first.');
    return;
  }

  hideError();
  showLoading(true);
  document.getElementById('generateBtn').disabled = true;
  document.getElementById('outputCard').classList.remove('visible');

  // Simulate a short "generating" delay for realism
  setTimeout(() => {
    const pool = lyricsBank[mood] || lyricsBank['Hopeful'];
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const raw = buildLyrics(pick, structure);
    const rendered = renderLyrics(raw);

    const titleLabel = artist
      ? `${mood} ${genre} Lyrics · ${artist} style`
      : `${mood} ${genre} Lyrics`;

    document.getElementById('outputTitle').textContent = titleLabel;
    document.getElementById('lyricsOutput').innerHTML = rendered;
    document.getElementById('outputCard').classList.add('visible');

    showLoading(false);
    document.getElementById('generateBtn').disabled = false;
  }, 1200);
}

// ===== COPY TO CLIPBOARD =====
function copyLyrics() {
  const text = document.getElementById('lyricsOutput').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
}

// ===== HELPERS =====
function showLoading(show) {
  document.getElementById('loading').classList.toggle('visible', show);
}

function showError(msg) {
  const el = document.getElementById('errorMsg');
  el.textContent = msg;
  el.classList.add('visible');
}

function hideError() {
  document.getElementById('errorMsg').classList.remove('visible');
}
