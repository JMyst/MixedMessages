const randomMessages = { 
    msgStart : [ 
    'The answer to the meaning of life, and the very fabric of the universe is',
    'The only thing you need to live a fulfilled life is',
    'I am a',
    'In 50 years, we will have',
    'Hooray for',
    'A',
    'I do not like',
    'This reminds me of',
    'Want to hear a joke?',
    'My life can be summed up in one phrase:',
    'I fear',
    'Life would be incomplete without',
    'I live for the moments I get to see',
    'My favourite food is'
], 
    msgEnd : [
    ' is enough to give anyone nightmares',
    ' is disgraceful',
    ' is my favourite pass-time',
    ' is wrong on so many levels',
    ' should be a new sport',
    ' is the reason I get up in a morning',
    ' brings me tears of joy',
    ' should be legal',
    ' should be illegal',
    ' is absolutely fantastic',
    ' taste awful',
    ' are useless',
    ' is the latest fashion trend'
], 
    msgMiddle : [
    [' and ', ' do not mix'],
    [' and ', '? does not seem like a fight'],
    [' is the past, ', ' is the future'],
    [' taste awful to me, luckily I use ', ' as a substitute'],
    [' goes well in a ', ' recipe'],
    [' is the past, but ', ' is the future'],
    ' is a delicacy amongst ',
    ' is the reason we cannot have ',
    ' may pass, but I will always cherish ',
    ' is my second favourite food, after, ',
    ' is alright, but I prefer ',
    ' fear ',
    ' reminds me of',
    ' is almost as bad as ',
    ' look like an uglier ',
    ' look like a prettier ',
    ' might as well be ', 
    ' is the only thing that stands between me and ',
    ' is a known cure for ',
], 
    contextAdjectives : [ 
    ' massive ',
    ' supernatural ',
    ' disappointing ',
    ' strange ',
    ' diabolical ',
    ' amazing ',
    ' potato ',
    ' amazing ',
    ' descriptive ',
    ' uncouth ',
    ' pickled ',
    ' aquatic ',
    ' gargantuan ',
    ' potentially aggressive ',
    ' war-hardened ',
    ' scented ',
    ' ecstatic ',
    ' ludicrous ',
    ' sugar-coated ',
    ' jellyfish ',
    ' volcano ',
    ' man-eating ',
    ' unreliable ',
    ' deep-fried ',
    ' unsuspecting ',
    ' magical ',
    ' evil ',
    ' spectucular ',
    ' expensive ',
    ' battery-powered ',
    ' clueless ',
    ' smart ',
    ' divisive ',
    ' all-devouring ',
    ' extrememly inexpensive ',
    ' broken ',
    ' simply the best ',
    ' water-breating ',
    ' galvanized ',
    ' dairy-free ',
    ' bio-degradable ',
    ' sinister ',
    ' impeccable ',
    ' exploding ',
    ' dancing ',
    ' incessant ',
    ' mute ',
    ' toxic ',
    ' 50ft ',
    ' marooned ',
    ' exploding ',
    ' the endless torment of ',
    ' nuclear ',
    ' omnipotent ',
    ' creative ',
    ' radioactive ',
    ' precious ',
    ' mildly-annoying ',
    ' pervasive ',
    ' sophisticated ',
    ' insipid ',
    ' boring ',
    ' shiny ',
    ' gold-plated ',
    ' invisible ',
    ' life-threatening ',
    ' supreme ',
    ' upside down ',
    ' supersonic ',
    ' frozen ',
    ' arrogant ',
    ' suspicious ',
    ' glamorous ',
    ' conniving ',
    ' discontent ',
    ' irritatable ',
    ' infatuated ',
    ' interstellar ',
    ' towering ',
    ' novelty ',
    ' tender ',
    ' defective ',
    ' invincible ',
    ' god-like ',
    ' sensational ',
    ' creepy ',
    ' slippery ',
    ' prickly ',
    ' sleepy ',
    ' rotisserie ',
    ' oven-baked ',
    ' poached ',
    ' vintage ',
    ' endless '
], 
    contextNouns : [
    'dolphins',
    'sheep',
    'humans',
    'viruses',
    'raisins',
    'snowmen',
    'ducks',
    'dwarfs',
    'oranges',
    'ice cream',
    'saxophones',
    'fireballs',
    'salad dressing',
    'onions',
    'men',
    'women',
    'giraffes',
    'because',
    'worms',
    'unicorns',
    'battleships',
    'prawns',
    'chocololate cake',
    'toast',
    'eagles',
    'houses',
    'margerine',
    'flowers',
    'horses',
    'clowns',
    'sunshine',
    'music',
    'cartoons',
    'medicine',
    'phones',
    'man',
    'woman',
    'dragons',
    'eggs',
    'snowflakes',
    'eating',
    'money',
    'soup',
    'alcohol',
    'neighbours',
    'firearms',
    'rain',
    'partying',
    'bubbles',
    'lava',
    'pirates',
    'time-travellers',
    'people',
    'gingerbread',
    'the cookie monster',
    'bagels',
    'tornadoes',
    'tuna',
    'cheese',
    'boomerangs',
    'existence',
    'life',
    'ghosts',
    'robots',
    'mascots',
    'bees',
    'toothache',
    'sumo wrestlers',
    'bones',
    'icicles',
    'gnomes',
    'butterflies',
    'donuts',
    'experiments',
    'mountains',
    'cardboard',
    'jelly',
    'dinosaurs',
    'superheroes',
    'lemons',
    'melons',
    'anarchy',
    'armageddon',
    'peace',
    'feet',
    'pencils',
    'memories',
    'badgers',
    'mushrooms',
    'cars'
]};

function getRandomMessagesEvent(event) {
    let selectedMessages = {};
    let rngMsgs = randomMessages;
    selectedMessages.msgStart = rngMsgs.msgStart[Math.floor(Math.random() * rngMsgs.msgStart.length)];
    selectedMessages.msgEnd = rngMsgs.msgEnd[Math.floor(Math.random() * rngMsgs.msgEnd.length)];
    selectedMessages.msgMiddle = rngMsgs.msgMiddle[Math.floor(Math.random() * rngMsgs.msgMiddle.length)];
    selectedMessages.contextAdjective = rngMsgs.contextAdjectives[Math.floor(Math.random() * rngMsgs.contextAdjectives.length)];
    selectedMessages.contextNoun = rngMsgs.contextNouns[Math.floor(Math.random() * rngMsgs.contextNouns.length)];
    selectedMessages.contextNoun2 = rngMsgs.contextNouns[Math.floor(Math.random() * rngMsgs.contextNouns.length)];

    document.getElementById('rng-message').childNodes[0].nodeValue = composeMessage(selectedMessages);
    // .textContent is an element property that overwrites all markup within the tags, does not parse html, and returns all text within the element, this includes any children's text
    // .innerText behaves very similar to textContent, except it ignores <script> and <style> elements
    // .outerText behaves very similar to textContent, except it ignores <script> and <style> elements and removes the tags of the element it is affecting
    // .innerHTML is an element property that overwrites all markup within the tags, parse html, and returns all html markup within element, this includes its children's markup
    // .outerHTML is an element property that overwrites all markup within the tags, including the element's tags, parses html, and returns all html markup within element, including its own tags, this includes its children's markup
    // nodeValue is a node property, for elements nodeValue is null, nodeValue
}

function composeMessage(selectedMessages)
{
    let msg = '';
    const msgType = Math.floor(Math.random() * 3);
        console.log(msgType);
    switch(msgType)
    {

        case 0:
            msg += selectedMessages.msgStart;
            msg += selectedMessages.contextAdjective;
            msg += selectedMessages.contextNoun;
            console.log(msg, ' case 1');
            break;
        case 1:
            msg += selectedMessages.contextAdjective;
            msg += selectedMessages.contextNoun;         
            msg += selectedMessages.msgEnd;
            console.log(msg, ' case 2');
            break;           
        case 2:
            if(typeof(selectedMessages.msgMiddle) === 'string')
            {
                msg += selectedMessages.contextNoun;
                msg += selectedMessages.msgMiddle;
                msg += selectedMessages.contextNoun2;
                console.log(msg, ' case 2, 1');
            }
            else
            {
                msg += selectedMessages.contextNoun;
                msg += selectedMessages.msgMiddle[0];
                msg += selectedMessages.contextNoun2;
                msg += selectedMessages.msgMiddle[1];
                console.log(msg, ' case 2, 2');
                console.dir(selectedMessages);
            }
    }

    return msg;
}


$(document).ready(function(){
    let msgElement =  $('#rng-message');
    $('button[name*="rng-button"]').click(function(){
        msgElement.slideToggle('fast', getRandomMessagesEvent); // callback function to change message when first animation completes
        msgElement.slideToggle('fast');
    });   
});


const button = document.getElementsByName('rng-button');
