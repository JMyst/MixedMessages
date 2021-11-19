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
    ' tastes awful',
    ' are useless',
    ' is the latest fashion trend'
], 
    msgMiddle : [
    [' and', ' do not mix'],
    [' and ', '? does not seem like a fight'],
    ' is the reason we cannot have',
    [' tastes awful to me, luckily use', 'as a substitute'],
    ' fear',
    ' reminds me of',
    ' is almost as bad as',
    ' look like an uglier',
    ' look like a prettier'

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
    ' sinister '
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
    'salad',
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
    'soup'
]};

function getRandomMessages(objOfArrMessages) {
    let randMsgArr = [];
    let msgStart, msgEnd, msgMiddle, contextAdjective, contextNoun;
    
    for(let arr in objOfArrMessages.msgStart) {
        msgStart = objOfArrMessages[arr][Math.floor(Math.random() * arr.length)];
        console.log(msgStart);
    }
    for(let arr in objOfArrMessages.msgEnd) {
        msgEnd = objOfArrMessages[arr][Math.floor(Math.random() * arr.length)];
    }
    for(let arr in objOfArrMessages.msgMiddle) {
        msgMiddle = objOfArrMessages[arr][Math.floor(Math.random() * arr.length)];
    }
    for(let arr in objOfArrMessages.contextAdjectives) {
        contextAdjective = objOfArrMessages[arr][Math.floor(Math.random() * arr.length)];
    }
    for(let arr in objOfArrMessages.contextNouns) {
        contextNoun = objOfArrMessages[arr][Math.floor(Math.random() * arr.length)];
    }
    randMsgArr.push(msgStart, msgEnd, msgMiddle, contextAdjective, contextNoun);
    return randMsgArr;
}

function composeMessage(randomMessages)
{
    let randMsg;
    // const msgType = Math.floor(Math.random() * 3);

    for(let msg in randomMessages)
    randMsg += msg;

    console.log(randMsg);
}

composeMessage(getRandomMessages(randomMessages));