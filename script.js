
const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  const target = document.getElementById(id);
  if (!target) return;

  screens.forEach((screen) => {
    const active = screen.id === id;
    screen.classList.toggle("active", active);
    screen.setAttribute("aria-hidden", String(!active));
  });

  document.body.dataset.atmosphere = id;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Navigation between stages
document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.go);
  });
});

document.getElementById("brand-link").addEventListener("click", (event) => {
  event.preventDefault();
  showScreen("welcome");
});

// --------------------------------------------------
// LOVE LETTER
// Edit the paragraphs below to personalize your letter.
// --------------------------------------------------

const chapters = [
  {
    label: "WHAT YOU MEAN TO ME",
    title: "My Dragon,",
    paragraphs: [
      "Sometimes, I find myself wondering how one person can mean so much to me. How one person can be so many things at once. How someone can be my comfort, my happiness, my warmth, my peace, and sometimes, the very person who makes me want to pull my hair out when we're arguing.(WHAHAHAHAHA KA CORNY PERO MWA). But somehow, even with all those things, you remain my favorite person in this world. And I don't think words will ever be enough to explain just how much you mean to me, baba.",
      "You are such a beautiful person babuu, inside and out. And when I say beautiful, I don't mean just the kind of beauty that catches someone's eyes. I mean the kind that stays with someone, the kind that makes a person want to know you more, understand you more, and love you in all the ways you deserve to be loved. You have such a soft and gentle soul, such a big heart, and a way of caring that makes people feel seen and understood. You're an empath, someone who feels deeply, someone who carries so much in that heart of yours. And I hope you know how precious that is. I hope the world never makes you believe that your softness is something you need to hide, because to me, it is one of the most beautiful things about you, my baba Jirah.",
      "I love how I can be serious with you, how we can talk about life and the things that weigh on our minds, reflect on ourselves, and open up about the things we don't always know how to explain. I love that I can have deep conversations with you and still, a few moments later, be laughing with you over the most ridiculous things. I love our playful banter, our little jokes, the way we can tease each other, and how you can be both my person for the deepest conversations and my partner in the silliest moments. With you, I don't have to choose between being serious and being childish. I can be both. I can be every version of myself, and somehow, you still feel like the person I want beside me, baba.",
      "And there's something about being in your embrace that makes me feel so small in the most comforting way. Like a little child who has finally found somewhere safe to rest. For a moment, I don't have to be strong, I don't have to figure everything out, and I don't have to pretend that I have everything under control. I can simply exist in your arms, feel your warmth, and let the world be quiet for a while. You make me feel like I can put down all the things I've been carrying, even if only for a little while. And I don't know if you realize how special that is to me. To find someone who makes you feel safe enough to be soft, especially in a world that can be so exhausting, is something I will never take for granted.",
      "You are my home in ways I never expected another person could be. Not a place made of walls or a roof, but a feeling. A warmth that reaches me even on my coldest days. A blessing that came into my life and made ordinary things feel a little more meaningful. When life becomes too much, when my thoughts become too loud, or when I simply need someone to talk to, you are one of the people I want to turn to. You remind me that there is still gentleness in this world, that there are still people worth trusting with the most vulnerable parts of ourselves, and that love can feel like resting after a long, tiring day. And I'm so thankful that I have you gaa.",
      "And, of course, I cannot forget that you also have your dragon mode moments. (di nako mo dungag WAHHAAH). My soft-hearted, gentle girl who can suddenly become the fiercest creature alive when we're arguing or not in good terms. Sometimes, you really test my patience, and I'm sure I test yours, too. But even then, you're still you. You're still the girl I adore, the girl whose feelings matter to me, the girl I want to understand even when we're having a hard time understanding each other. Loving you doesn't mean I think you're perfect or that every moment between us will be easy. It means I love the whole of you, your softness, your strength, your moods, your laughter, your stubbornness, and all the little things that make you the person I fell in love with, jirah.",
      "If there's one thing I hope you never forget, it's that you don't have to do anything extraordinary just to deserve my love. You don't have to be happy all the time, strong all the time, or have everything figured out. You don't have to prove that you're worthy of being cared for. You are already someone worth loving simply because you are you. And if I could give you one thing, aside from all the love I have for you, it would be the ability to see yourself through my eyes, even just for a moment. Maybe then, you'd understand why I feel so lucky to have you, why I admire you so much, and why my heart continues to find its way back to you, baba.",
      "Because, my love, you are so much more than someone I love. You are someone I am grateful to know, grateful to hold, grateful to laugh with, and grateful to share this life with. And every day that I get to call you mine is another day I find a new reason to be thankful for you." 
    ],
    signature: "You are everything to me. ♡"
  },
  {
    label: "OUR LITTLE WORLD",    
    title: "The little things matter.",
    paragraphs: [
      "When I think about us, baba, I realize that some of my favorite memories aren't necessarily the biggest or most extraordinary ones. They're the little things. The things that might seem ordinary to other people, but somehow become special when it's you and me. The moments that don't need a special occasion, an expensive gift, or a perfectly planned day. Just your presence, mine, and the little world we've made between us.",
      "I think about the times we wait for each other after practices, just so we can go home together. Something as simple as waiting might not mean much to someone else, but to me, it says so much. Out of all the things we could be doing, we choose to spend those extra moments together. We choose to wait. We choose to walk together, to share the journey home, and to make a little more time for each other. And I love that about us. I love how even the end of an ordinary day can become something I look forward to because I know there's a chance I'll get to spend it with you, jirah.",
      "I think about going home together, too. About how the journey itself becomes part of the memory, how the simple act of being beside you can make an ordinary day feel different. Riding love bus or mintal roxas boulebai jeep to Mintal, knowing you'd get your ride to Quarry afterward, is one of those little pieces of our story that I hold close. They're not the kinds of moments people would necessarily write poems about, but that's what makes them so special to me. They're ours. They're little pieces of a life we're living together, and I wouldn't want to trade them for some perfect story that never really happened, baba.",
      "And speaking of the little pieces of our story, baba, I can't forget the first time I got to meet kuya Lendell. We were both nervous and scared about what was going to happen next, especially knowing that he didn't really permit you to have a boyfriend till you graduate senior high school. And yet, here we were, still choosing to take that chance. I went out of my way to meet him, probably thinking about all the possible things that could happen and how he might react to me. And then we ended up twisting the story, telling him that I was still courting you instead of telling him that we were already boyfriend and girlfriend. (ka mga mantas jod oy). Looking back, it's honestly so funny to think about how nervous we were and how we tried to make everything work out. But beneath all that nervousness, I think there was something sweet about that moment, too. We were scared of what might happen, but we still faced it together. And now, it's one of those memories that makes me smile whenever I think about our little story. It's such a funny little chapter in our relationship, baba, one of those moments that probably wouldn't make sense to anyone else the way it makes sense to us. And if I could go back to that day, knowing everything I know now, I think I'd still go and meet your brother, nervousness and all, because getting to be with you has always been worth taking a deep breath for.",
      "And then there's you coming to my house early in the morning just to wake me up knowing we'll probably gonna get late or di jud mo sud ug morning (peace yow). I don't know if you understand how cute that is to me, jirah. There you are, making your way into my morning, becoming part of the very first moments of my day. It's such a simple thing, but there's something so intimate about it. The thought of being someone you want to see, someone you make time for, someone you willingly come to, means more to me than I can properly explain. You become part of my days in the smallest ways, and those are the things that make you feel so deeply woven into my life, baba.",
      "I treasure our cuddles, too. The moments when I can hold you close, feel you beside me, and just enjoy the fact that we're together. I love the random kisses, the unexpected hugs, the little touches, the sneaky moments, and all those little things that belong to us alone. I love the playful side of our relationship, the moments when we're being clingy, silly, or a tung tung sahur moments. There's something beautiful about having a person with whom you can share that kind of closeness, someone who can make you laugh one second and make your heart feel so full the next",
      "Even sharing food with you has its own kind of sweetness. Giving you something to eat, receiving food from you, offering each other a bite, or simply thinking of each other when there's something to share. It's such a small gesture, but I think love lives in those things, too. Sometimes, love isn't a grand declaration. Sometimes, it's just remembering that the other person might be hungry. Sometimes, it's offering the last bite, sharing what you have, or making sure the person beside you gets some, too. And I love that we have those little ways of caring for each other babaaa",
      "But perhaps one of the things I treasure most is how we've learned to open up to each other. How we've shared parts of ourselves that aren't always easy to show. How we've comforted one another after something bad happened, how we've been there when things felt heavy, and how we've allowed ourselves to be vulnerable. We've cried to each other, listened to each other, and let each other see the feelings that we might otherwise keep hidden. I think there's a special kind of closeness that comes from being able to cry in front of someone without having to pretend you're okay. To let someone see you when you're hurting and trust that they will try to understand instead of making you feel weak",
      "I'm grateful that we've had moments like those. Not because I want you to be sad or because I want us to go through difficult things, but because those moments have shown me that our relationship can hold more than just happiness. We can share the laughter, the sweetness, the excitement, and the fun, but we can also make room for sadness, frustration, fear, and uncertainty. We can be there for each other when life doesn't go the way we hoped. And to me, that matters so much, jirah.",
      "I love that our little world has room for all of it. The random kisses and long embraces. The laughter and the serious conversations. The playful arguments and the moments when we have to work through our differences. The food we share, the journeys home, the waiting after practices, the mornings that begin with you, and the nights when we comfort each other through whatever life has placed on our shoulders.",
      "Maybe one day, we'll look back on these moments and realize how much we miss the little things we once did without thinking twice. Maybe we'll laugh about the silly things, remember the places we've gone, and smile at how happy we could be just by spending time together. And if that day comes, I hope we can say that we didn't let those moments pass us by without appreciating them. I hope we can remember that even when life was busy, even when we were tired, even when there were so many other things demanding our attention, we still found little ways to make time for each other",
      "Because that's what our little world means to me. It's not about having the most perfect relationship or living a life where everything goes according to plan. It's about having someone with whom even the most ordinary moments become worth remembering. It's about the little routines, the familiar warmth, the shared food, the quiet embraces, and the simple happiness of knowing that somewhere in this big and complicated world, there is a person with whom I get to share a part of my life.",
      "And that person is you, baba.",
      "If I could keep every little moment we've shared somewhere safe, I would. Not because I want to live in the past, but because each one is a reminder of what we have, of what we've shared, and of how much meaning can exist in the smallest things when they're shared with the right person.",
      "Our little world may be made of simple things, my love, but to me, it is one of the most precious places I know."

    ],
    signature: "Every moment is a treasure. ♡"
  },
  {
    label: "WHAT I WANT YOU TO KNOW",
    title: "A promise from me,",
    paragraphs: [
      "Baba, if there's anything I want these words to do, it's to remind you of just how important you are to me. Not only when I'm telling you that I love you, not only when we're together, and not only when everything between us is going well. I want you to feel it in the way I treat you, in the way I listen to you, in the way I make time for you, and in the way I continue to choose you even when life becomes difficult.",

"I want you to know how proud I am of you. Proud of the person you've become, proud of the person you're becoming, and proud of the strength you carry even on the days when you might not feel strong at all. I know that growing up and becoming the person you want to be isn't always easy. There will be days when you question yourself, when you feel tired, when you wonder whether you're doing enough or whether you're becoming the person you hoped you would be. And on those days ga, I hope you remember that I see you. I see the person you are now, and I see the potential in the person you're still becoming.",

"You don't have to have everything figured out for me to be proud of you. You don't have to reach every goal, overcome every obstacle, or be at your best every single day. I'm proud of you baba nakoo for continuing to grow, for trying, for learning, for feeling deeply, and for continuing to move forward even when things aren't easy. I'm proud of the heart you carry and the person you are, even in the parts of yourself you might still be learning to understand.",

"I hope you never underestimate how strong you are palanggaa. And I don't mean that you always have to be brave, that you have to keep everything to yourself, or that you must face every battle without help. To me, strength isn't just about enduring things in silence. Sometimes, strength is admitting that you're hurting. Sometimes, it's allowing yourself to cry. Sometimes, it's asking for help, taking a breath, and trying again after a difficult day. Sometimes, it's simply continuing to be kind in a world that doesn't always return that kindness.",

"And I hope you know that your softness doesn't make you weak. Your big heart doesn't make you foolish. Your ability to empathize with others doesn't mean you should have to carry everyone's pain. You can be gentle and still have boundaries. You can be caring and still choose yourself. You can love people and still give yourself the rest you need. You deserve the same kindness you so freely give to others, and I hope you learn to offer that kindness to yourself, too babuu :> .",

"I want you to feel like you're at the top of the world. I want you to walk through life knowing that you are someone special, someone who deserves to be appreciated, respected, and loved with sincerity. I want you to recognize the beauty that exists within you, the strength that has carried you this far, and the wonderful things that make you who you are. And when you can't see those things for yourself, I hope I can be there to remind you.",

"I don't want to be someone who simply tells you that you're amazing and leaves you to figure out how to believe it. I want to show you through my actions. I want to celebrate your little victories with you, encourage you when you doubt yourself, listen when you need to let things out, and remind you that one difficult day doesn't erase all the progress you've made. I want to be someone who adds warmth to your life, someone who makes you feel supported rather than pressured, and someone who gives you room to grow without ever making you feel that you have to become someone else to be loved.",

"And more than anything, I want you to feel like you're the only one in my brown eyes. I want you to feel secure in the love I give you, not because I repeat the right words, but because my actions make those words believable. I want you to know that I see you, that I appreciate you, and that I don't take what we have for granted. In a world full of people, possibilities, and paths we could take, you are the person I want to keep building with. You are the person I want to keep learning about, the person I want to laugh with, the person I want to share my thoughts with, and the person whose hand I want to keep reaching for (ehe bugto na panty ani niya ba).",

"I know that loving each other doesn't mean we'll never have difficult days. We have our differences, our disagreements, our moments of frustration, and our own ways of seeing things. There will be times when we misunderstand each other, when emotions get the better of us, or when we struggle to find the right words. But when those days come, I want us to remember that we are on the same side. I want us to learn how to listen even when we're upset, to understand before we judge, to apologize when we've hurt each other, and to choose kindness even when it's difficult.",

"I don't want a love that only knows how to stay when everything feels easy. I want a love that continues to learn, one that grows more patient, more understanding, and more honest with time. I want us to become better not just for each other, but also for ourselves. I want to keep discovering new things about you my palanggaa, keep finding reasons to admire you, and keep creating memories with you that we'll someday look back on with smiles on our faces.",

"And I promise to keep making room for the little things. To keep appreciating the ordinary days, to keep finding joy in our time together, to keep making you laugh when I can, and to keep holding you close whenever you need comfort and I am able to give it. I want to keep sharing food with you, walking beside you, listening to your stories, and having those conversations that somehow make us lose track of time. I want more mornings, more embraces, more random kisses, more laughter, more adventures, and more of those simple moments that remind us why we love being together.",

"I also want to keep being someone you can be vulnerable with. Someone you can tell your worries to without feeling like a burden. Someone you can cry with when the world becomes too much. Someone you can be silly with, serious with, quiet with, and completely yourself with. I want you to feel that you don't have to carry everything alone. And even when I can't fix what's hurting you, I want to learn how to sit beside you, listen to you, and give you the comfort you need instead of pretending I always know the answers.",

"I can't promise that I'll always get everything right. I'm human, too, and there will be things I still need to learn. But I can promise that what we have matters to me, that your feelings matter to me, and that I want to keep growing into someone who loves you well. I want my love to be something you can feel safe with, something that gives you peace rather than doubt, and something that reminds you that you are cherished, baba.",

"And if there's one thing I wish I could place directly into your heart, it would be this. You are one of a kind to me. There is no one else who can be you, with your particular kind of softness, your warmth, your humor, your beautiful heart, and your dragon mode. There is no one else who can recreate the little world we've made together, because it is made from the moments only we have shared and the love only we can build between us.",

"I don't love you because I think you're perfect. I love you because you're you. I love the person you are today, and I look forward to meeting all the versions of you that time will bring. I want to see you grow into your dreams, discover new things about yourself, overcome the things that once frightened you, and become more and more comfortable in your own skin. And I hope that as you grow, you never feel that you have to leave your softness behind to become stronger.",

"I want to keep loving you through every season of your life. When you're happy, full of energy and horny, when you're quiet and lost in thought, when you're excited about something new, and when you're tired of everything and need a little rest. I want to know the person you are when the world is watching and the person you are when it's just us. I want to keep learning what makes you feel loved, what makes you feel safe, and what I can do to make this relationship a place where both of us can continue to grow.",

"Jiaiah, here is the promise I want to leave with you.",

"I want to love you for as long as I am given the chance to. I want to choose you in the days that feel magical and in the days that feel painfully ordinary. I want to keep making memories with you, to keep finding comfort in your embrace, and to keep building a life filled with the little things that mean so much to us. I want to keep meeting you where you are, even as we both change, grow, and discover more of ourselves.",

"They say forever is a long time. And maybe forever is just a word we use for something our minds cannot fully understand. Maybe time doesn't really promise us anything beyond the moments we have. But if forever doesn't exist, if there is no end to time because there is no forever to begin with, then let me love you for every moment that does exist. Let me love you in every day we're given, in every memory we make, in every ordinary day, in every embrace, and in every tomorrow that we get to share.",

"And if forever does exist in some way, then I hope it is long enough for me to keep discovering new reasons to love you, jirah.",

"Because no matter how many times I try to explain what you mean to me, I know there will always be something left unsaid. There will always be another little thing about you that makes me smile, another moment that makes me grateful, and another reason to look at you and think, It's still you. It's always been you.",

"Thank you for being my warmth in the cold, my comfort when life gets heavy, my partner in laughter and deep conversations, and the person who makes me feel like a little child who has finally found somewhere safe to rest. Thank you for letting me know the parts of you that not everyone gets to see. Thank you for the memories we've made, the love we've shared, and the little world that belongs to us, baba.",

"I hope that when you finish reading this letter, you feel even a little of what I feel whenever I think about you. I hope you feel loved beyond the words on these pages. I hope you feel appreciated for who you are, proud of how far you've come, and excited for all the beautiful things you have yet to become. I hope you remember that there is someone here who sees you as a blessing, who admires your heart, and who wants you to know just how much you matter.",

"And whenever you forget, whenever the world becomes too loud or you begin to doubt yourself, I hope you can return to these words and remember that you are loved. Not just for what you do, not just for the happiness you bring me, and not just for the moments when everything is easy, but for the person you are, in all your beautiful and imperfect humanity, baba.",

"You are my favorite person, my home, my warmth, my soft place to land, and one of the greatest blessings life has given me.",

"And if I could live through a thousand different versions of this life, through all the different roads and all the different possibilities, I would still hope to find my way to you. I would still hope to meet the girl who makes me laugh, the girl I can talk to about life, the girl who I like to tung tung sahurr, the girl who 1 2 3 with me, the girl who makes me horny 24/7, the girl in the mirror (unsa na zumba), the girl whose embrace makes the world feel a little less frightening, and the girl I want beside me when the day comes to an end.",

"Because if there's one thing I want you to be certain of, it's this.",

"You are not just someone I love. You are someone I will always be grateful that I got to love.",

"And as long as life keeps giving me moments to spend with you, I will keep choosing to fill those moments with love for you, baba.",

"I love you to the sun and front." ,
"Way lain sapa deay,"
    ],
    signature: "Kit Klien Sunday Choyan 123 ♡"
  }
];

let currentChapter = 0;

const chapterLabel = document.getElementById("chapter-label");
const chapterTitle = document.getElementById("chapter-title");
const chapterBody = document.getElementById("chapter-body");
const chapterSignature = document.getElementById("chapter-signature");
const chapterCount = document.getElementById("chapter-count");
const nextChapterButton = document.getElementById("next-chapter");

function renderChapter() {
  const chapter = chapters[currentChapter];

  chapterLabel.textContent = chapter.label;
  chapterTitle.textContent = chapter.title;
  chapterBody.replaceChildren();

  chapter.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    chapterBody.appendChild(p);
  });

  chapterSignature.textContent = chapter.signature;
  chapterCount.textContent =
    `${String(currentChapter + 1).padStart(2, "0")} / ${String(chapters.length).padStart(2, "0")}`;

  nextChapterButton.textContent =
    currentChapter === chapters.length - 1
      ? "Let's look at our memories →"
      : "Read the next part →";
}

renderChapter();

// Envelope animation
const envelope = document.getElementById("open-envelope");
const envelopeHint = document.getElementById("envelope-hint");
let envelopeTimer;

envelope.addEventListener("click", () => {
  if (envelope.disabled) return;

  envelope.disabled = true;
  envelope.classList.add("open");
  envelopeHint.textContent = "A little letter, just for you...";

  window.clearTimeout(envelopeTimer);

  envelopeTimer = window.setTimeout(() => {
    currentChapter = 0;
    renderChapter();
    showScreen("letter");

    envelope.classList.remove("open");
    envelopeHint.textContent = "Tap the envelope to open it.";
    envelope.disabled = false;
  }, 800);
});

// Letter chapters
nextChapterButton.addEventListener("click", () => {
  if (currentChapter < chapters.length - 1) {
    currentChapter++;
    renderChapter();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showScreen("album");
  }
});

// --------------------------------------------------
// PHOTO ALBUM
// Photos should be named photo-001 with their original .jpg, .jpeg, or .png extension
// --------------------------------------------------

const TOTAL_PHOTOS = 153;
const photoGrid = document.getElementById("photo-grid");

// Each photo may be JPG, JPEG, or PNG. The browser tries each extension.
const PHOTO_EXTENSIONS = ["jpg", "jpeg", "png"];

function loadPhotoWithFallback(img, index, onFailure) {
  const number = String(index + 1).padStart(3, "0");
  let extensionIndex = 0;

  img.onerror = () => {
    extensionIndex++;
    if (extensionIndex < PHOTO_EXTENSIONS.length) {
      img.src = `assets/photos/photo-${number}.${PHOTO_EXTENSIONS[extensionIndex]}`;
    } else if (onFailure) {
      onFailure();
    }
  };

  img.src = `assets/photos/photo-${number}.${PHOTO_EXTENSIONS[extensionIndex]}`;
}

// Organize all 153 photos into three scrapbook-style collections.
const collections = [
  {
    title: "Little moments",
    subtitle: "The little things that mean so much",
    start: 0,
    end: 51,
    style: "collection-blush"
  },
  {
    title: "Our memories",
    subtitle: "Pieces of our story, kept forever",
    start: 51,
    end: 102,
    style: "collection-gray"
  },
  {
    title: "My favorite person",
    subtitle: "A little reminder of how special you are",
    start: 102,
    end: 153,
    style: "collection-rose"
  }
];

collections.forEach((collection) => {
  const section = document.createElement("section");
  section.className = `photo-collection ${collection.style}`;

  const heading = document.createElement("div");
  heading.className = "collection-heading";

  const heart = document.createElement("span");
  heart.className = "collection-heart";
  heart.setAttribute("aria-hidden", "true");
  heart.textContent = "♡";

  const headingText = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = collection.title;

  const subtitle = document.createElement("p");
  subtitle.textContent = collection.subtitle;

  headingText.append(title, subtitle);

  const line = document.createElement("span");
  line.className = "collection-line";
  line.setAttribute("aria-hidden", "true");

  heading.append(heart, headingText, line);

  const grid = document.createElement("div");
  grid.className = "photo-grid collection-grid";

  for (let index = collection.start; index < collection.end; index++) {
    const number = index + 1;

    const tile = document.createElement("button");
    tile.className = "photo-tile flip-tile";
    tile.type = "button";
    tile.setAttribute(
      "aria-label",
      `View photo ${number} of ${TOTAL_PHOTOS}`
    );

    const img = document.createElement("img");
    img.alt = `Photo ${number}`;
    img.loading = "lazy";
    img.decoding = "async";

    const fallback = document.createElement("span");
    fallback.className = "photo-fallback";
    fallback.textContent = "♡";
    fallback.hidden = true;
    fallback.setAttribute("aria-hidden", "true");

    loadPhotoWithFallback(img, index, () => {
      img.hidden = true;
      fallback.hidden = false;
      // Keep the scrapbook layout clean if a file is missing.
    });

    // No numbered badge: the photos are presented as an album, not a gallery index.
    tile.append(img, fallback);
    tile.addEventListener("click", () => openPhoto(index, tile));
    grid.appendChild(tile);
  }

  section.append(heading, grid);
  photoGrid.appendChild(section);
});

// --------------------------------------------------
// FULL-SCREEN PHOTO VIEWER
// --------------------------------------------------

const viewer = document.getElementById("photo-viewer");
const viewerImage = document.getElementById("viewer-image");
const viewerPlaceholder = document.getElementById("viewer-placeholder");
const viewerCount = document.getElementById("viewer-count");
const viewerCaption = document.getElementById("viewer-caption");

const closeViewerButton = document.getElementById("close-viewer");
const previousPhotoButton = document.getElementById("previous-photo");
const nextPhotoButton = document.getElementById("next-photo");

let currentPhotoIndex = 0;
let previousFocus = null;
let touchStartX = 0;
let touchStartY = 0;

function updateViewer() {
  viewerImage.hidden = false;
  viewerPlaceholder.hidden = true;

  viewerImage.alt = `Photo ${currentPhotoIndex + 1} of ${TOTAL_PHOTOS}`;
  loadPhotoWithFallback(viewerImage, currentPhotoIndex, () => {
    if (viewer.hidden) return;
    viewerImage.hidden = true;
    viewerPlaceholder.hidden = false;
  });

  viewerCount.textContent = "";
  viewerCaption.textContent = "";

  previousPhotoButton.disabled = currentPhotoIndex === 0;
  nextPhotoButton.disabled = currentPhotoIndex === TOTAL_PHOTOS - 1;
}

function openPhoto(index, clickedElement) {
  currentPhotoIndex = index;
  previousFocus = clickedElement;

  updateViewer();
  viewer.hidden = false;
  viewer.classList.remove("is-opening");
  void viewer.offsetWidth;
  viewer.classList.add("is-opening");
  document.body.classList.add("viewer-open");
  document.body.style.overflow = "hidden";

  closeViewerButton.focus();
}

function closeViewer() {
  viewer.hidden = true;
  document.body.classList.remove("viewer-open");
  document.body.style.overflow = "";

  if (previousFocus && previousFocus.isConnected) {
    previousFocus.focus({ preventScroll: true });
  }
}

function movePhoto(direction) {
  const nextIndex = currentPhotoIndex + direction;

  // Do not wrap around at the beginning or end.
  if (nextIndex < 0 || nextIndex >= TOTAL_PHOTOS) return;

  currentPhotoIndex = nextIndex;
  updateViewer();
  viewer.classList.remove("is-opening");
  void viewer.offsetWidth;
  viewer.classList.add("is-opening");
}

// loadPhotoWithFallback handles alternate extensions for the viewer image.

closeViewerButton.addEventListener("click", closeViewer);

previousPhotoButton.addEventListener("click", () => movePhoto(-1));
nextPhotoButton.addEventListener("click", () => movePhoto(1));

// Close when tapping the dark background, but not the photo or controls.
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    closeViewer();
  }
});

// Keyboard navigation for desktop users.
document.addEventListener("keydown", (event) => {
  if (viewer.hidden) return;

  if (event.key === "Escape") {
    closeViewer();
  } else if (event.key === "ArrowLeft") {
    movePhoto(-1);
  } else if (event.key === "ArrowRight") {
    movePhoto(1);
  }
});

// Swipe support for mobile users.
const viewerImageWrap = document.querySelector(".viewer-image-wrap");

viewerImageWrap.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

viewerImageWrap.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - touchStartX;
  const deltaY = touch.clientY - touchStartY;

  // Only treat clearly horizontal gestures as photo swipes.
  if (Math.abs(deltaX) < 45) return;
  if (Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;

  movePhoto(deltaX < 0 ? 1 : -1);
}, { passive: true });

// --------------------------------------------------
// GIFT SURPRISE
// --------------------------------------------------

const giftButton = document.getElementById("gift-button");
const giftMessage = document.getElementById("gift-message");

giftButton.addEventListener("click", () => {
  const isOpen = giftButton.getAttribute("aria-expanded") === "true";

  giftButton.setAttribute("aria-expanded", String(!isOpen));
  giftMessage.hidden = isOpen;
  document.body.classList.toggle("gift-open", !isOpen);

  giftButton.querySelector("span:last-child").textContent = isOpen
    ? "Open your little gift"
    : "Your little reminder ♡";    
});

document.getElementById("finish-button").addEventListener("click", () => {
  showScreen("finale");
});

// --------------------------------------------------
// REPLAY THE EXPERIENCE
// --------------------------------------------------

document.getElementById("replay-button").addEventListener("click", () => {
  currentChapter = 0;
  renderChapter();


  giftMessage.hidden = true;
  document.body.classList.remove("gift-open");
  giftButton.setAttribute("aria-expanded", "false");
  giftButton.querySelector("span:last-child").textContent =
    "Open your little gift";

  closeViewer();
  showScreen("welcome");
});

// --------------------------------------------------
// BACKGROUND MUSIC
// Try autoplay first; browsers may require the visitor's first interaction.
// --------------------------------------------------

const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");
let autoplayGestureBound = false;

function syncMusicButton() {
  if (!music || !musicToggle) return;
  const playing = !music.paused;
  musicToggle.textContent = playing ? "♫ Music On" : "♫ Music Off";
  musicToggle.setAttribute("aria-pressed", String(playing));
}

async function tryStartMusic(event) {
  // Let the dedicated music button handle its own play/pause click.
  if (event?.target instanceof Element && event.target.closest("#music-toggle")) return;
  if (!music || !music.paused) return;
  try {
    await music.play();
    syncMusicButton();
    removeAutoplayGesture();
  } catch (_error) {
    // Audible autoplay is commonly blocked until a user gesture; retry once
    // from the next real interaction without interrupting the experience.
    syncMusicButton();
    bindAutoplayGesture();
  }
}

function removeAutoplayGesture() {
  if (!autoplayGestureBound) return;
  document.removeEventListener("pointerdown", tryStartMusic);
  document.removeEventListener("keydown", tryStartMusic);
  autoplayGestureBound = false;
}

function bindAutoplayGesture() {
  if (autoplayGestureBound || !music || !music.paused) return;
  autoplayGestureBound = true;
  document.addEventListener("pointerdown", tryStartMusic);
  document.addEventListener("keydown", tryStartMusic);
}

if (music && musicToggle) {
  musicToggle.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();
        syncMusicButton();
        removeAutoplayGesture();
      } catch (_error) {
        musicToggle.textContent = "♫ Tap to play music";
        bindAutoplayGesture();
      }
    } else {
      music.pause();
      syncMusicButton();
    }
  });

  music.addEventListener("pause", syncMusicButton);
  music.addEventListener("play", syncMusicButton);
  music.addEventListener("error", () => {
    musicToggle.textContent = "♫ Music unavailable";
    musicToggle.setAttribute("aria-pressed", "false");
  });

  // Calling play on load enables autoplay where browser policy allows it.
  if (document.readyState === "complete") {
    tryStartMusic();
  } else {
    window.addEventListener("load", tryStartMusic, { once: true });
  }
}

// Start at the welcome screen.
showScreen("welcome");
