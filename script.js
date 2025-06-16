// Playlistnya njing
const playlist = [
{
title: "I Don't Love You",
artist: "My Chemical Romance",
cover: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
audio: "audio/I Don't Love You.mp3",
lyrics: [
{ text: "Well, when you go", time: 26.10 },
{ text: "Don't ever think I'll make you try to stay", time: 31.15 },
{ text: "And maybe when you get back", time: 37.64 },
{ text: "I'll be off to find another way", time: 40.65 },
{ text: "And after all this time that you still owe", time: 48.27 },
{ text: "You're still the good-for-nothing, I don't know", time: 53.97 },
{ text: "So take your gloves and get out", time: 60.24 },
{ text: "Better get out", time: 63.57 },
{ text: "While you can", time: 66.17 },
{ text: "When you go", time: 73.29 },
{ text: "And would you even turn to say", time: 77.24 },
{ text: "I don't love you", time: 83.53 },
{ text: "Like I did", time: 86.48 },
{ text: "Yesterday", time: 88.86 },
{ text: "Sometimes I cry so hard from pleading", time: 93.92 },
{ text: "So sick and tired of all the needless beating", time: 99.77 },
{ text: "But baby when they knock you", time: 105.52 },
{ text: "Down and out", time: 108.26 },
{ text: "It's where you oughta stay", time: 110.50 },
{ text: "And after all the blood that you still owe", time: 116.17 },
{ text: "Another dollar's just another blow", time: 121.73 },
{ text: "So fix your eyes and get up", time: 128.06 },
{ text: "Better get up", time: 131.46 },
{ text: "While you can", time: 134.01 },
{ text: "Whoa, whoa", time: 136.59 },
{ text: "When you go", time: 141.14 },
{ text: "And would you even turn to say", time: 145.13 },
{ text: "I don't love you", time: 151.57 },
{ text: "Like I did", time: 154.22 },
{ text: "Yesterday", time: 156.63 },
{ text: "Well come on, come on", time: 160.64 },
{ text: "When you go", time: 186.33 },
{ text: "Would you have the guts to say", time: 190.59 },
{ text: "I don't love you", time: 196.59 },
{ text: "Like I loved you yesterday", time: 199.49 },
{ text: "I don't love you", time: 207.86 },
{ text: "Like I loved you", time: 210.86 },
{ text: "Yesterday", time: 213.23 },
{ text: "I don't love you", time: 219.24 },
{ text: "Like I loved you", time: 221.54 },
{ text: "Yesterday", time: 224.42 }
]
},
{
title: "Disenchanted",
artist: "My Chemical Romance",
cover: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
audio: "audio/Disenchanted.mp3",
lyrics: [
{ text: "Well, I was there on the day", time: 20.76 },
{ text: "They sold the cause for the queen", time: 23.69 },
{ text: "And when the lights all went out", time: 26.42 },
{ text: "We watched our lives on the screen", time: 29.28 },
{ text: "I hate the ending myself", time: 31.98 },
{ text: "But it started with an alright scene", time: 34.96 },
{ text: "It was the roar of the crowd", time: 43.03 },
{ text: "That gave me heartache to sing", time: 45.93 },
{ text: "It was a lie when they smiled", time: 48.44 },
{ text: "And said, \"You won't feel a thing\"", time: 51.17 },
{ text: "And as we ran from the cops", time: 53.95 },
{ text: "We laughed so hard it would sting", time: 57.49 },
{ text: "If I'm so wrong (so wrong, so wrong)", time: 66.68 },
{ text: "How can you listen all night long? (night long, night long)", time: 71.23 },
{ text: "Now, will it matter after I'm gone?", time: 77.57 },
{ text: "Because you never learned a goddamn thing", time: 81.71 },
{ text: "You're just a sad song with nothing to say", time: 87.27 },
{ text: "About a life-long wait for a hospital stay", time: 92.78 },
{ text: "And if you think that I'm wrong", time: 98.21 },
{ text: "This never meant nothing to you", time: 101.77 },
{ text: "I spent my high school career", time: 109.40 },
{ text: "Spit on and shoved to agree", time: 112.15 },
{ text: "So I could watch all my heroes sell a car on TV", time: 114.84 },
{ text: "Bring out the old guillotine", time: 120.25 },
{ text: "We'll show 'em what we all mean", time: 123.67 },
{ text: "If I'm so wrong (so wrong, so wrong)", time: 132.87 },
{ text: "How can you listen all night long? (night long, night long)", time: 137.14 },
{ text: "Now, will it matter long after I'm gone?", time: 143.87 },
{ text: "Because you never learned a goddamn thing", time: 148.07 },
{ text: "You're just a sad song with nothing to say", time: 153.49 },
{ text: "About a life-long wait for a hospital stay", time: 158.94 },
{ text: "And if you think that I'm wrong", time: 164.53 },
{ text: "This never meant nothing to you", time: 168.08 },
{ text: "So go, go away", time: 175.96 },
{ text: "Just go, run away", time: 181.12 },
{ text: "But where did you run to?", time: 186.07 },
{ text: "And where did you hide?", time: 188.72 },
{ text: "Go find another way", time: 190.96 },
{ text: "Price you pay", time: 195.00 },
{ text: "You're just a sad song with nothing to say", time: 219.97 },
{ text: "About a life-long wait for a hospital stay", time: 225.33 },
{ text: "And if you think that I'm wrong", time: 230.76 },
{ text: "This never meant nothing to you", time: 234.66 },
{ text: "Come on!", time: 239.41 },
{ text: "You're just a sad song with nothing to say", time: 241.79 },
{ text: "About a life-long wait for a hospital stay", time: 247.23 },
{ text: "And if you think that I'm wrong", time: 252.72 },
{ text: "This never meant nothing to you", time: 256.17 },
{ text: "At all, at all", time: 262.23 },
{ text: "At all, at all", time: 273.13 }
]
},
{
title: "The World Is Ugly",
artist: "My Chemical Romance",
cover: "https://i.scdn.co/image/ab67616d0000b273a67cf0d53d5f2170077e8ef5",
audio: "audio/The World Is Ugly.mp3",
lyrics: [
{ text: "These are the eyes and the lies of the taken", time: 46.46 },
{ text: "These are their hearts, but their hearts don't beat like ours", time: 51.45 },
{ text: "They burn 'cause they are all afraid", time: 58.41 },
{ text: "For every one of us", time: 63.17 },
{ text: "There's an army of them", time: 68.02 },
{ text: "But you'll never fight alone", time: 73.49 },
{ text: "'Cause I wanted you to know", time: 78.43 },
{ text: "That the world is ugly", time: 83.12 },
{ text: "But you're beautiful to me", time: 88.27 },
{ text: "Well, are you thinking of me now?", time: 93.09 },
{ text: "(Now)", time: 99.90 },
{ text: "These are the nights and the lights that we fade in", time: 101.41 },
{ text: "These are the words, but the words aren't coming out", time: 106.32 },
{ text: "They burn 'cause they are hard to say", time: 113.22 },
{ text: "For every failing sun", time: 118.20 },
{ text: "There's a morning after", time: 123.19 },
{ text: "Though I'm empty, when you go", time: 128.46 },
{ text: "I just wanted you to know", time: 133.36 },
{ text: "That the world is ugly", time: 138.25 },
{ text: "But you're beautiful to me", time: 143.31 },
{ text: "Are you thinking of me", time: 148.47 },
{ text: "Like I'm thinking of you?", time: 153.21 },
{ text: "I would say I'm sorry though", time: 158.22 },
{ text: "Though I really need to go", time: 163.24 },
{ text: "I just wanted you to know", time: 168.34 },
{ text: "I wanted you to know", time: 173.61 },
{ text: "I wanted you to know", time: 178.55 },
{ text: "I'm thinking of you", time: 183.48 },
{ text: "Every night, every day", time: 186.43 },
{ text: "These are the lies and the lives of the taken", time: 191.46 },
{ text: "These are their hearts, but their hearts don't beat like ours", time: 196.55 },
{ text: "They burn 'cause they are all afraid", time: 203.29 },
{ text: "But mine beats twice as hard", time: 208.22 },
{ text: "'Cause the world is ugly", time: 213.26 },
{ text: "But you're beautiful to me", time: 218.37 },
{ text: "Are you thinking of me", time: 223.25 },
{ text: "Like I'm thinking of you?", time: 228.36 },
{ text: "I would say I'm sorry though", time: 233.30 },
{ text: "Though I really need to go", time: 238.37 },
{ text: "And I just wanted you to know", time: 243.13 },
{ text: "That the world is ugly", time: 248.40 },
{ text: "(I just wanted you to know)", time: 250.87 },
{ text: "But you're beautiful to me", time: 253.45 },
{ text: "(I just wanted you to know)", time: 255.92 },
{ text: "Are you thinking of me?", time: 258.30 },
{ text: "Stop your crying, helpless feeling", time: 261.05 },
{ text: "Dry your eyes and start believing", time: 266.12 },
{ text: "There's one thing", time: 271.17 },
{ text: "They'll never take from you", time: 273.11 },
{ text: "One day, like this", time: 280.36 },
{ text: "We'll never be the same", time: 282.59 },
{ text: "Never, forever", time: 284.59 },
{ text: "Like ghosts in the snow", time: 285.67 },
{ text: "Like ghosts in the snow", time: 287.51 }
]
},
{
title: "The Cut That Always Bleeds",
artist: "Conan Gray",
cover: "https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43",
audio: "audio/The Cut That Always Bleeds.mp3",
lyrics: [
{ text: "I don't love you anymore", time: 2.96 },
{ text: "A pretty line that I adore", time: 6.03 },
{ text: "Five words that I've heard before", time: 10.04 },
{ text: "'Cause you keep me on a rope", time: 16.84 },
{ text: "And tied a noose around my throat", time: 20.32 },
{ text: "You're gone, then back at my door", time: 24.17 },
{ text: "'Cause if you're gonna leave, better leave, better do it fast", time: 30.78 },
{ text: "Can't live a little longer sitting on your lap", time: 35.30 },
{ text: "'Cause you know what you're doin' when you're comin' back", time: 39.05 },
{ text: "And I don't wanna have another heart attack", time: 42.70 },
{ text: "Oh, I can't be your lover on a leash", time: 46.17 },
{ text: "Every other week, when you please", time: 55.06 },
{ text: "Oh, I can't be the kiss that you don't need", time: 60.07 },
{ text: "The lie between your teeth", time: 69.17 },
{ text: "The cut that always bleeds", time: 72.53 },
{ text: "(Ah-ah-ah)", time: 76.30 },
{ text: "The cut that always bleeds", time: 80.03 },
{ text: "(Ah-ah-ah)", time: 83.70 },
{ text: "Say you love somebody new", time: 88.12 },
{ text: "Then beat my heart to black and blue", time: 91.23 },
{ text: "Then they leave, and it's me you come back to (Ah-ah)", time: 95.24 },
{ text: "To say you loved me all along", time: 102.34 },
{ text: "And kiss the bruises 'til they're gone", time: 105.31 },
{ text: "Bittersweet, 'cause I can't breathe inside your arms", time: 109.26 },
{ text: "'Cause if you're gonna leave, better leave, better do it fast", time: 116.08 },
{ text: "Can't live another minute bleedin' from my back", time: 120.26 },
{ text: "'Cause I don't have another one for you to stab", time: 123.99 },
{ text: "And I don't wanna have another heart attack", time: 127.27 },
{ text: "Oh, I can't be your lover on a leash", time: 130.65 },
{ text: "Every other week, when you please", time: 139.68 },
{ text: "Oh, I can't be the kiss that you don't need", time: 144.44 },
{ text: "The lie between your teeth", time: 153.52 },
{ text: "The cut that always bleeds", time: 157.12 },
{ text: "(Ah-ah-ah)", time: 160.69 },
{ text: "The cut that always bleeds", time: 164.17 },
{ text: "(Ah-ah-ah)", time: 168.14 },
{ text: "(Ooh-ooh-ooh) But even though you're killing me, yeah", time: 172.56 },
{ text: "(Ooh-ooh-ooh) I need you like the air I breathe", time: 182.35 },
{ text: "(Ooh-ooh-ooh) I need, I need you more than me", time: 186.54 },
{ text: "(Ooh-ooh-ooh) I need you more than anything", time: 190.20 },
{ text: "(Ooh-ooh-ooh) Please, please", time: 194.06 },
{ text: "'Cause I could be your lover on a leash", time: 200.61 },
{ text: "Every other week, when you please", time: 209.67 },
{ text: "Oh, I could be anything you need", time: 214.43 },
{ text: "As long as you don't leave", time: 223.48 },
{ text: "The cut that always", time: 227.11 }
]
},
{
title: "Memories",
artist: "Conan Gray",
cover: "https://i.scdn.co/image/ab67616d0000b27360a89b781c62ffe2136e4396",
audio: "audio/Memories.mp3",
lyrics:[
{ text: "One, two", time: 0.67 },
{ text: "It's been a couple months", time: 2.33 },
{ text: "That's just about enough time", time: 5.56 },
{ text: "For me to stop crying when I look at all the pictures", time: 9.67 },
{ text: "Now I kinda smile, I haven't felt that in a while", time: 13.61 },
{ text: "It's late, I hear the door", time: 19.29 },
{ text: "Bell ringing, and it's pouring", time: 22.33 },
{ text: "I open up that door, see your brown eyes at the entrance", time: 26.72 },
{ text: "You just wanna talk, and I can't turn away a wet dog", time: 30.57 },
{ text: "But please, don't ruin this for me", time: 35.92 },
{ text: "Please, don't make it harder than it already is", time: 42.13 },
{ text: "I'm trying to get over this", time: 48.44 },
{ text: "I wish that you would stay in my memories", time: 56.13 },
{ text: "But you show up today just to ruin things", time: 60.49 },
{ text: "I wanna put you in the past 'cause I'm traumatized", time: 64.40 },
{ text: "But you're not letting me do that, 'cause tonight", time: 68.79 },
{ text: "You're all drunk in my kitchen, curled in the fetal position", time: 72.26 },
{ text: "Too busy playing the victim to be listening to me when I say", time: 76.26 },
{ text: '"I wish that you would stay in my memories"', time: 82.53 },
{ text: "In my memories, stay in my memories", time: 86.44 },
{ text: "Now I can't say, \"Goodbye\"", time: 94.34 },
{ text: "If you'll stay here the whole night", time: 97.52 },
{ text: "You see, it's hard to find an end to something that you keep beginning", time: 101.17 },
{ text: "Over, and over again", time: 105.48 },
{ text: "I promise that the ending always stays the same", time: 107.20 },
{ text: "So there's no good reason in make-believing", time: 110.44 },
{ text: "That we could ever exist again", time: 114.80 },
{ text: "I can't be your friend, can't be your lover", time: 118.67 },
{ text: "Can't be the reason we hold back each other from falling in love", time: 120.96 },
{ text: "With somebody other than me", time: 124.97 },
{ text: "I wish that you would stay in my memories", time: 128.68 },
{ text: "But you show up today just to ruin things", time: 132.94 },
{ text: "I wanna put you in the past 'cause I'm traumatized", time: 136.80 },
{ text: "But you're not letting me do that, 'cause tonight", time: 141.13 },
{ text: "You're all drunk in my kitchen, curled in the fetal position", time: 144.50 },
{ text: "Too busy playing the victim to be listening to me when I say", time: 148.63 },
{ text: '"I wish that you would stay in my memories"', time: 154.63 },
{ text: "In my memories, stay in my memories", time: 158.74 },
{ text: "Since you came", time: 164.54 },
{ text: "I guess I'll let you stay", time: 168.51 },
{ text: "For as long as it takes", time: 172.06 },
{ text: "To grab your books and your coat and that one good cologne", time: 175.98 },
{ text: "That you bought when we were fighting", time: 179.96 },
{ text: "'Cause it's still on my clothes, everything that I own", time: 184.09 },
{ text: "And it makes me feel like dying", time: 187.97 },
{ text: "I was barely just surviving", time: 192.05 },
{ text: "I wish that you would stay in my memories", time: 195.98 },
{ text: "But you show up today just to ruin things", time: 200.28 },
{ text: "I wanna put you in the past 'cause I'm traumatized", time: 204.12 },
{ text: "But you're not letting me do that, 'cause tonight", time: 208.22 },
{ text: "You're all drunk in my kitchen, curled in the fetal position", time: 211.78 },
{ text: "Too busy playing the victim to be listening to me when I say", time: 215.47 },
{ text: '"I wish that you would stay in my memories"', time: 221.14 },
{ text: "In my memories, stay in my memories", time: 225.26 }
]
},
{
title: "All I Want",
artist: "Olivia Rodrigo",
cover: "https://i.scdn.co/image/ab67616d0000b2736d38bbfd2631c232763e3ddf",
audio: "audio/All I Want.mp3",
lyrics: [
{ text: "I found a guy, told me I was a star", time: 12.56 },
{ text: "He held the door held my hand in the dark", time: 18.02 },
{ text: "And he's perfect on paper", time: 25.25 },
{ text: "But he's lying to my face", time: 28.23 },
{ text: "Does he think that I'm the kinda girl", time: 31.01 },
{ text: "Who needs to be saved?", time: 34.60 },
{ text: "And there's one more boy, he's from my past", time: 43.00 },
{ text: "We fell in love, but it didn't last", time: 49.10 },
{ text: "'Cause the second I figured it out", time: 54.41 },
{ text: "He pushes me away", time: 57.33 },
{ text: "And I won't fight for love", time: 60.20 },
{ text: "If you won't meet me halfway", time: 63.01 },
{ text: "And I say that I'm through", time: 66.66 },
{ text: "But this song's still for you", time: 68.90 },
{ text: "All I want is love that lasts", time: 74.01 },
{ text: "Is all I want too much to ask?", time: 77.03 },
{ text: "Is it something wrong with me?", time: 80.04 },
{ text: "All I want is a good guy", time: 86.02 },
{ text: "Are my expectations far too high?", time: 89.01 },
{ text: "Try my best, but what can I say?", time: 92.68 },
{ text: "All I have is myself at the end of the day", time: 94.00 },
{ text: "But shouldn't that be enough for me?", time: 100.05 },
{ text: "Ooh-ooh-ooh-ooh-ooh-ooh", time: 106.40 },
{ text: "And I miss the days", time: 108.55 },
{ text: "When I was young and naive", time: 112.95 },
{ text: "I thought the perfect guy would come and find me", time: 118.50 },
{ text: "Now happy ever after, it don't come so easily", time: 126.80 },
{ text: "All I want is love that lasts", time: 129.95 },
{ text: "Is all I want too much to ask?", time: 133.13 },
{ text: "Is it something wrong with me? Oh-ooh", time: 138.80 },
{ text: "All I want is a good guy", time: 141.43 },
{ text: "Are my expectations far too high?", time: 144.98 },
{ text: "Try my best, but what can I say?", time: 147.40 },
{ text: "All I have is myself at the end of the day", time: 152.75 },
{ text: "And all I want is for that to be okay", time: 154.80 }
]
},
{
title: "Mr. Loverman",
artist: "Ricky Montgomery",
cover: "https://i.scdn.co/image/ab67616d0000b27367ee332af483acd134fd6fd0",
audio: "audio/Mr. Loverman.mp3",
lyrics: [
{ text: "I'm headed straight for the floor", time: 0.16 },
{ text: "The alcohol served its tour", time: 5.76 },
{ text: "And it's headed straight for my skin", time: 11.22 },
{ text: "Leaving me daft and dim", time: 17.19 },
{ text: "I've got this shake in my legs", time: 22.83 },
{ text: "Shaking the thoughts from my head", time: 28.43 },
{ text: "But who put these waves in the door?", time: 33.67 },
{ text: "I crack and out I pour", time: 39.52 },
{ text: "I'm Mr. Loverman", time: 45.04 },
{ text: "And I miss my lover, man", time: 50.44 },
{ text: "I'm Mr. Loverman", time: 56.13 },
{ text: "Oh, and I miss my lover", time: 60.49 },
{ text: "The ways in which you talk to me", time: 67.19 },
{ text: "Have me wishin' I were gone", time: 71.80 },
{ text: "The ways that you say my name", time: 77.86 },
{ text: "Have me runnin' on and on", time: 82.77 },
{ text: "Oh, I'm cramping up", time: 89.83 },
{ text: "I'm cramping up", time: 92.74 },
{ text: "But you're cracking up", time: 100.94 },
{ text: "You're cracking up", time: 103.83 },
{ text: "I'm Mr. Loverman", time: 111.58 },
{ text: "And I miss my loverman", time: 116.69 },
{ text: "I'm Mr. Loverman", time: 122.50 },
{ text: "Oh, and I miss my lover", time: 126.94 },
{ text: "I've shattered now, I'm spilling out", time: 134.31 },
{ text: "Upon this linoleum ground (Mr. Loverman)", time: 140.18 },
{ text: "I'm reeling in my brain again", time: 145.47 },
{ text: "Before it can get back to you (Mr. Loverman)", time: 151.08 },
{ text: "Oh what am I supposed to do without you?", time: 155.68 },
{ text: "I'm Mr. Loverman", time: 166.83 },
{ text: "And I miss my lover, man (I miss my lover)", time: 171.91 },
{ text: "I'm Mr. Loverman (oh-oh)", time: 177.93 },
{ text: "Oh, and I miss my lover (Mr. Loverman)", time: 182.21 },
{ text: "I'm Mr. Loverman (oh-oh)", time: 188.82 },
{ text: "And I miss my loverman", time: 194.33 },
{ text: "I'm Mr. Loverman", time: 199.95 },
{ text: "And I miss my lover", time: 205.24 }
]
},
{
title: "Line Without a Hook",
artist: "Ricky Montgomery",
cover: "https://i.scdn.co/image/ab67616d0000b27367ee332af483acd134fd6fd0",
audio: "audio/Line Without a Hook.mp3",
lyrics: [
{ text: "I don't really give a damn about the way you touch me", time: 0.54 },
{ text: "When we're alone", time: 2.49 },
{ text: "You can hold my hand if no one's home", time: 5.55 },
{ text: "Do you like it when I'm away?", time: 9.55 },
{ text: "If I went and hurt my body", time: 12.71 },
{ text: "Baby, would you love me the same?", time: 14.19 },
{ text: "I can feel all my bones coming back, and I'm craving motion", time: 16.23 },
{ text: "Mama never really learned how to live by herself", time: 20.59 },
{ text: "It's a curse, and it's growing", time: 24.35 },
{ text: "You're a pond and I'm an ocean, oh", time: 28.03 },
{ text: "All my emotions feel like explosions when you are around", time: 32.31 },
{ text: "And I've found a way to kill the sound, oh", time: 40.72 },
{ text: "Oh, baby, I am a wreck when I'm without you", time: 47.29 },
{ text: "I need you here to stay", time: 52.88 },
{ text: "I broke all my bones that day I found you", time: 55.86 },
{ text: "Crying at the lake", time: 60.14 },
{ text: "Was it something I said to make you feel like you're a burden?", time: 62.72 },
{ text: "Oh, and if I could take it all back", time: 69.55 },
{ text: "I swear that I would pull you from the tide", time: 75.21 },
{ text: "Oh, whoa, whoa, whoa!", time: 83.89 },
{ text: "I said no (I said no), I said no (I said no)", time: 86.96 },
{ text: "Listen close, it's a no", time: 89.19 },
{ text: "The wind is a-pounding on my back", time: 93.85 },
{ text: "And I've found hope in a heart attack", time: 96.38 },
{ text: "Oh, at last, it is past", time: 100.23 },
{ text: "Now I've got it, and you can't have it", time: 103.55 },
{ text: "Baby, I am a wreck when I'm without you", time: 108.06 },
{ text: "I need you here to stay", time: 114.32 },
{ text: "I broke all my bones that day I found you", time: 116.65 },
{ text: "Crying at the lake", time: 121.26 },
{ text: "Was it something I said to make you feel like you're a burden?", time: 124.03 },
{ text: "Oh, and if I could take it all back", time: 130.98 },
{ text: "I swear that I would pull you from the tide", time: 137.24 },
{ text: "Darling, when I'm fast asleep", time: 147.10 },
{ text: "I've seen this person watching me", time: 151.13 },
{ text: 'Saying, "Is it worth it? Is it worth it?', time: 154.74 },
{ text: 'Tell me, is it worth it?"', time: 158.48 },
{ text: "'Cause there is something and there is nothing", time: 170.84 },
{ text: "There is nothing in between", time: 175.36 },
{ text: "And in my eyes, there is a tiny dancer watching over me", time: 180.13 },
{ text: 'He\'s singing, "She\'s a, she\'s a lady, and I am just a boy"', time: 186.93 },
{ text: 'He\'s singing, "She\'s a, she\'s a lady, and I am just a line without a-"', time: 194.05 },
{ text: "Oh, baby, I am a wreck when I'm without you", time: 202.65 },
{ text: "I need you here to stay", time: 207.88 },
{ text: "Broke all my bones that day I found you", time: 210.82 },
{ text: "Crying at the lake", time: 215.61 },
{ text: "Oh, was it something I said to make you feel like you're a burden?", time: 218.32 },
{ text: "Oh, and if I could take it all back", time: 225.14 },
{ text: "I swear that I would pull you from the tide", time: 231.66 }
]
},
{
title: "Dynasty",
artist: "MIIA",
cover: "https://i.scdn.co/image/ab67616d0000b273838a93692501ac2ba0e13a68",
audio: "audio/Dynasty.mp3",
lyrics:  [
{ text: "Some days", time: 31.23 },
{ text: "It's hard to see", time: 33.65 },
{ text: "If I was a fool", time: 38.50 },
{ text: "Or you a thief", time: 41.01 },
{ text: "Made it through the maze", time: 45.94 },
{ text: "To found my one in a million", time: 48.20 },
{ text: "And now you're just a page torn from the story I'm living", time: 53.64 },
{ text: "And all I gave you is gone", time: 61.42 },
{ text: "Tumbled like it was stone", time: 68.98 },
{ text: "Thought we built a dynasty that Heaven couldn't shake", time: 77.42 },
{ text: "Thought we built a dynasty like nothing ever made", time: 81.53 },
{ text: "Thought we built a dynasty forever couldn't break up", time: 85.22 },
{ text: "The scar, I can't reverse", time: 93.33 },
{ text: "And the more it heals, the worse it hurts", time: 100.31 },
{ text: "Gave you every piece of me", time: 108.04 },
{ text: "No wonder it's missing", time: 111.08 },
{ text: "Don't know how to be so close to someone so distant", time: 116.10 },
{ text: "And all I gave you is gone", time: 123.48 },
{ text: "Tumbled like it was stone", time: 130.88 },
{ text: "Thought we built a dynasty that Heaven couldn't shake", time: 139.65 },
{ text: "Thought we built a dynasty like nothing ever made", time: 143.34 },
{ text: "Thought we built a dynasty forever couldn't break up", time: 147.19 },
{ text: "It all fell down, it all fell down", time: 154.33 },
{ text: "It all fell, it all fell down, it all fell down", time: 162.01 },
{ text: "It all fell, it all fell down, it all fell down, eh", time: 170.29 },
{ text: "It all fell down, it all fell down, it all fell down", time: 178.35 },
{ text: "And all I gave you is gone", time: 185.32 },
{ text: "Tumbled like it was stone", time: 193.02 },
{ text: "Thought we built a dynasty that Heaven couldn't shake", time: 201.34 },
{ text: "Thought we built a dynasty like nothing ever made", time: 205.38 },
{ text: "Thought we built a dynasty forever couldn't break up", time: 209.14 },
{ text: "It all fell, it all fell down, it all fell down, eh", time: 216.78 },
{ text: "It all fell down, it all fell down, it all fell down", time: 224.74 },
{ text: "(And all I gave you is gone) it all fell down, it all fell down, it all fell down", time: 232.04 },
{ text: "Thought we built a dynasty forever couldn't break up", time: 240.29 }
]
},
{
title: "Where We Are",
artist: "One Direction",
cover: "https://i0.wp.com/www.lyricsify.com/image/6506121dc849a74b0e11c1ea8cc38cd000936203",
audio: "audio/Where We Are.mp3",
lyrics: [
{ text: "Remember when we would stay out to late", time: 3.00 },
{ text: "We were young, having fun, made mistakes", time: 7.50 },
{ text: "Did we ever know?", time: 10.56 },
{ text: "Did we ever know?", time: 12.58 },
{ text: "Did we ever know? Yeah...", time: 14.56 },
{ text: "All the things we just think out the same", time: 19.01 },
{ text: "Never wrong, always right, not afraid", time: 23.02 },
{ text: "Did we ever know?", time: 26.23 },
{ text: "Did we ever know?", time: 28.20 },
{ text: "Did we ever know?", time: 30.02 },
{ text: "Is it all inside of my head?", time: 34.02 },
{ text: "Maybe you still think I don't care", time: 37.19 },
{ text: "But all I need is you", time: 41.53 },
{ text: "Yeah, you know it's true", time: 44.51 },
{ text: "Yeah, you know it's true", time: 46.23 },
{ text: "Forget about where we are", time: 48.08 },
{ text: "And let go, we're so close", time: 52.03 },
{ text: "If you don't know where to start", time: 56.00 },
{ text: "Just hold on and don't run", time: 59.58 },
{ text: "No...", time: 64.02 },
{ text: "We're looking back", time: 65.31 },
{ text: "We're messing around", time: 67.56 },
{ text: "But that was then", time: 69.57 },
{ text: "And this is now", time: 71.50 },
{ text: "All we need is enough love", time: 72.49 },
{ text: "To hold us", time: 77.01 },
{ text: "Where we are", time: 79.01 },
{ text: "Summer days, rushing by you and me", time: 82.58 },
{ text: "Makes it harder to see underneath", time: 86.02 },
{ text: "Did we ever know?", time: 89.03 },
{ text: "Did we ever know?", time: 91.58 },
{ text: "Did we ever know?", time: 93.02 },
{ text: "Is it all inside of my head?", time: 97.01 },
{ text: "Maybe you still think I don't care", time: 100.56 },
{ text: "But all I need is you", time: 105.04 },
{ text: "Yeah, you know it's true", time: 107.52 },
{ text: "Yeah, you know it's true", time: 109.43 },
{ text: "Forget about where we are", time: 111.57 },
{ text: "And let go, we're so close", time: 115.22 },
{ text: "If you don't know where to start", time: 119.04 },
{ text: "Just hold on and don't run", time: 123.01 },
{ text: "No...", time: 127.21 },
{ text: "We're looking back", time: 129.01 },
{ text: "We're messing around", time: 131.02 },
{ text: "But that was then", time: 133.01 },
{ text: "And this is now", time: 135.02 },
{ text: "All we need is enough love", time: 136.04 },
{ text: "To hold us", time: 140.02 },
{ text: "Where we are", time: 142.58 },
{ text: "But that was then", time: 148.26 },
{ text: "And this is now", time: 150.42 },
{ text: "All we need is enough love", time: 151.04 },
{ text: "To hold us", time: 155.58 },
{ text: "Where we are...", time: 158.02 },
{ text: "With close eyes and open mind", time: 167.01 },
{ text: "(We can be there)", time: 171.53 },
{ text: "(We can be there)", time: 173.01 },
{ text: "But this sign", time: 175.04 },
{ text: "Let's cross the line", time: 176.59 },
{ text: "(Can you see it?)", time: 178.58 },
{ text: "(Can you see it?)", time: 180.52 },
{ text: "Forget about where we are", time: 182.21 },
{ text: "And let go, we're so close", time: 186.01 },
{ text: "If you don't know where to start", time: 190.02 },
{ text: "Just hold on and don't run", time: 194.01 },
{ text: "No...", time: 198.59 },
{ text: "We're looking back", time: 200.02 },
{ text: "We're messing around", time: 202.13 },
{ text: "But that was then", time: 204.06 },
{ text: "And this is now", time: 206.02 },
{ text: "All we need is enough love", time: 207.16 },
{ text: "To hold us", time: 211.42 },
{ text: "Where we are", time: 213.51 }
]
},
];

// ambil elemen dari DOM
const lirikBox = document.getElementById('lyricsWrapper')
const barIsi = document.getElementById('progress')
const barLuar = document.getElementById('progressBar')
const btnPlay = document.getElementById('playBtn')
const btnPrev = document.getElementById('prevBtn')
const btnNext = document.getElementById('nextBtn')
const btnShuffle = document.getElementById('shuffleBtn')
const btnRepeat = document.getElementById('repeatBtn')
const teksWaktu = document.getElementById('currentTime')
const teksDurasi = document.getElementById('duration')
const audio = document.getElementById('bgMusic')
const judulLagu = document.getElementById('songTitle')
const infoLagu = document.getElementById('songInfo')
const imgCover = document.getElementById('coverImage')
const imgAlbum = document.getElementById('albumCover')
const daftarLagu = document.getElementById('playlist')
const btnUrutAcak = document.getElementById('playlistShuffleBtn')
const btnUrutNormal = document.getElementById('playlistOrderBtn')

let lagiMain = false
let indeksLirik = 0
let lirikTerakhir = -1
let seretBar = false
let indeksTrack = 0
let modeAcak = false
let modeUlang = false
let lirikLagu = []

function tampilPlaylist() {
daftarLagu.innerHTML = ''
playlist.forEach((lagu, i) => {
const item = document.createElement('li')
item.className = 'playlist-item'
if (i === indeksTrack) item.classList.add('active')
item.innerHTML = `
<i class="fas fa-play play-icon"></i>
<div class="song-info">
<div class="song-title">${lagu.title}</div>
<div class="song-artist">${lagu.artist}</div>
</div>
<div class="song-duration">SatzzDev.</div>
`
item.addEventListener('click', () => {
gantiTrack(i)
if (!lagiMain) putarPause()
})
daftarLagu.appendChild(item)
})
}

function gantiTrack(i) {
indeksTrack = i
const lagu = playlist[i]
judulLagu.textContent = lagu.title
infoLagu.textContent = lagu.artist
imgCover.src = lagu.cover
audio.src = lagu.audio
lirikLagu = lagu.lyrics
isiLirik()
tampilPlaylist()
barIsi.style.width = '0%'
teksWaktu.textContent = '0:00'
lirikTerakhir = -1
indeksLirik = 0
setTimeout(() => aktifkanLirik(0), 100)
imgAlbum.classList.remove('playing', 'paused')
imgAlbum.classList.add(lagiMain ? 'playing' : 'paused')

// simpen indeks ke localStorage
localStorage.setItem('indeksTrack', indeksTrack)
}

function isiLirik() {
lirikBox.innerHTML = ''
lirikLagu.forEach(item => {
const baris = document.createElement('div')
baris.className = 'lyric-line'
baris.textContent = item.text
baris.dataset.time = item.time
lirikBox.appendChild(baris)
})
}

function formatWaktu(s) {
const m = Math.floor(s / 60)
const d = Math.floor(s % 60)
return `${m}:${d < 10 ? '0' : ''}${d}`
}

function cariLirik(sek) {
for (let i = lirikLagu.length - 1; i >= 0; i--) {
if (sek >= lirikLagu[i].time) return i
}
return 0
}

function aktifkanLirik(i) {
if (i === lirikTerakhir) return
const baris = document.querySelectorAll('.lyric-line')
if (!baris.length) return
baris.forEach(x => x.classList.remove('active'))
if (baris[i]) {
baris[i].classList.add('active')
const kontainer = document.querySelector('.lyrics-container')
const tinggiKontainer = kontainer.offsetHeight
const aktif = baris[i]
const tinggiAktif = aktif.offsetHeight
const posisi = aktif.offsetTop
const offset = (tinggiKontainer / 2) - (posisi + tinggiAktif / 2)
lirikBox.style.transform = `translateY(${offset}px)`
lirikTerakhir = i
}
}

function updateBar() {
if (seretBar) return
const sekarang = audio.currentTime
const persen = (sekarang / audio.duration) * 100
barIsi.style.width = `${persen}%`
teksWaktu.textContent = formatWaktu(sekarang)
if (lirikLagu.length > 0) {
indeksLirik = cariLirik(sekarang)
aktifkanLirik(indeksLirik)
}

// simpen waktu ke localStorage
localStorage.setItem('currentTime', sekarang)
}

function ubahBar(e) {
const lebar = barLuar.clientWidth
const klikX = e.offsetX
const total = audio.duration
const waktuBaru = (klikX / lebar) * total
audio.currentTime = waktuBaru
indeksLirik = cariLirik(waktuBaru)
aktifkanLirik(indeksLirik)
}

function putarPause() {
if (lagiMain) {
audio.pause()
btnPlay.innerHTML = '<i class="fas fa-play"></i>'
btnPlay.title = 'Putar'
imgAlbum.classList.remove('playing')
imgAlbum.classList.add('paused')
} else {
audio.play().catch(e => console.error('gagal play:', e))
btnPlay.innerHTML = '<i class="fas fa-pause"></i>'
btnPlay.title = 'Jeda'
imgAlbum.classList.remove('paused')
imgAlbum.classList.add('playing')
}
lagiMain = !lagiMain
}

function laguLanjut() {
if (modeAcak) {
let baru
do {
baru = Math.floor(Math.random() * playlist.length)
} while (baru === indeksTrack && playlist.length > 1)
gantiTrack(baru)
} else {
const next = (indeksTrack + 1) % playlist.length
gantiTrack(next)
}
if (lagiMain) audio.play()
}

function laguSebelum() {
if (audio.currentTime > 3) {
audio.currentTime = 0
aktifkanLirik(0)
return
}
const prev = (indeksTrack - 1 + playlist.length) % playlist.length
gantiTrack(prev)
if (lagiMain) audio.play()
}

function toggleAcak() {
modeAcak = !modeAcak
btnShuffle.classList.toggle('active', modeAcak)
btnUrutAcak.classList.toggle('active', modeAcak)
btnUrutNormal.classList.toggle('active', !modeAcak)
}

function toggleUlang() {
modeUlang = !modeUlang
btnRepeat.classList.toggle('active', modeUlang)
}

const zonaPartikel = document.getElementById('particles')
function buatPartikel() {
const bintik = document.createElement('div')
bintik.classList.add('particle')
bintik.style.left = Math.random() * 100 + 'vw'
bintik.style.top = '100vh'
bintik.style.animationDuration = Math.random() * 10 + 10 + 's'
bintik.style.opacity = Math.random() * 0.5 + 0.3
bintik.style.width = Math.random() * 6 + 4 + 'px'
bintik.style.height = bintik.style.width
zonaPartikel.appendChild(bintik)
setTimeout(() => bintik.remove(), 15000)
}

btnPlay.addEventListener('click', putarPause)
btnPrev.addEventListener('click', laguSebelum)
btnNext.addEventListener('click', laguLanjut)
btnShuffle.addEventListener('click', toggleAcak)
btnRepeat.addEventListener('click', toggleUlang)
btnUrutAcak.addEventListener('click', toggleAcak)
btnUrutNormal.addEventListener('click', () => {
modeAcak = false
btnShuffle.classList.remove('active')
btnUrutAcak.classList.remove('active')
btnUrutNormal.classList.add('active')
})
audio.addEventListener('timeupdate', updateBar)
barLuar.addEventListener('click', ubahBar)
barLuar.addEventListener('mousedown', e => {
seretBar = true
ubahBar(e)
})
document.addEventListener('mousemove', e => {
if (seretBar) {
const rect = barLuar.getBoundingClientRect()
const klikX = e.clientX - rect.left
const lebar = rect.width
const durasi = audio.duration
const waktuBaru = Math.max(0, Math.min((klikX / lebar) * durasi, durasi))
audio.currentTime = waktuBaru
indeksLirik = cariLirik(waktuBaru)
aktifkanLirik(indeksLirik)
}
})
document.addEventListener('mouseup', () => seretBar = false)

audio.addEventListener('loadedmetadata', () => {
teksDurasi.textContent = formatWaktu(audio.duration)
})

audio.addEventListener('ended', () => {
if (modeUlang) {
audio.currentTime = 0
audio.play()
} else {
laguLanjut()
}
})

setInterval(buatPartikel, 300)

tampilPlaylist()

const simpenTrack = parseInt(localStorage.getItem('indeksTrack'))
const simpenTime = parseFloat(localStorage.getItem('currentTime'))

if (!isNaN(simpenTrack) && playlist[simpenTrack]) {
gantiTrack(simpenTrack)
audio.addEventListener('loadedmetadata', () => {
if (!isNaN(simpenTime) && simpenTime < audio.duration) {
audio.currentTime = simpenTime
updateBar()
}
})
} else {
gantiTrack(0)
}
