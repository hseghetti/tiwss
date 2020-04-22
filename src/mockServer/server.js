import { Server, Response } from 'miragejs';
import searchResponse from './search-response';
/*
TODO: this should be dynamic with:
- local with real services
- local with mock
- production
*/

new Server({
    routes() {
        // this.namespace = 'api'; // TODO: Integrate it with the environment management

        this.get('http://localhost:8080/search', () => {
            return searchResponse;
        });

        this.get('http://localhost:8080/site', () => {
            return new Response(
                200,
                { 'Content-Type': 'text/plain' },
                `Jump to navigation The Corona Chronicles: A tale of non-domestic bliss – part seven
            Our columnist and bestselling novelist continues her series documenting the imaginary world of a family dealing with life in lockdown
            By            Allison Pearson
            20 April 2020 • 7:37pm
            The family had their first big lockdown row 
            The Corona Chronicles is published on Mondays and Fridays every week on Telegraph.co.uk. To read previous installments, click here
            Monday 20 April - Day 28 of Isolation
            8.47am
            We had our first big lockdown row last night. Amazing it hasn’t happened before, really but, because of the crisis, everyone’s been treating each other with a “No, please, after you!” kind of consideration that’s unheard of in our family.
            Apart from Robert, of course. Our Lord and Master has returned to live among us bringing his demanding City ways and luncheon requirements with him. While Dolores is furloughed, I am his de facto PA. The gruff orders I can cope with. It’s when he insists on “doing my bit in the kitchen” and uses three bowls and two pans to make a curry which feeds one that I get a teeny bit manslaughtery.
            Things are made more complicated by having a stranger in the house. Don’t get me wrong. Paolo, Chloe’s boyfriend, is lovely; so eager to fit in and be helpful, but his presence puts us on our best behaviour. Are there any studies into how long a family can sustain best behaviour? Fine if a guest is staying the weekend, not so easy when you’re under indefinite house arrest and might like to start howling and shrieking and making grossly unfair accusations instead of polite conversation about the marvellous zabaglione you had the last time you were in Florence. It feels like a kind of claustrophobia – our family pretending to be the Waltons for the benefit of this gentle Italian stranded far from his stricken homeland.    
            Then I found out about Harry and the unnatural harmony was well and truly shattered. I’ve only seen my son for about 10 hours since we started this wretched lockdown. He is rumoured to be living with us. Every night, the 16-year-old deigns to join us for dinner, then quickly disappears upstairs again. He has become increasingly distant and sarcastic, aggressive even.
            “Harry’s doing Houseparty all night,” Chloe said, casually, when we were planting some herbs by the back door.
            “What’s Houseparty?”
            “It’s an app. He’s getting pissed online with his mates. Seriously, Mum, wake up!”
            So, yesterday, just before midnight, I went into his room and there was Harry, sitting on the bed, dressed as if he were going out, raven-dark hair gelled into a mini-quiff. He was swigging from a bottle of red wine – one of the ones his father keeps under the stairs for special occasions – and chatting on his laptop to lots of mates I recognised from school. Posing in their squares on the screen, the girls looked like those prostitutes in the windows of Amsterdam brothels, all flicky hair, fake tan and teeny crop-tops.
            “Relax, nothing’s going on, Mum,” said Harry as I clumsily lunged for his father’s bottle of claret.
            “Sorry, guys, Mum’s going a bit mental,” he said gesturing at his dishevelled mother who was very much not dressed for a party. The faces in the gallery all fell about laughing.
            When Harry had closed Houseparty and we were alone, he lashed out at me in that way he does when he knows he’s in the wrong but is too humiliated to apologise.
            “What am I supposed to do, Mum?” he shouted, “There’s no hope for my generation, the Government’s locked us up even though none of this sh-- is our fault.”
            “Harry, please keep your voice down, Izzy’s asleep.”
            “I don’t care. The virus doesn’t even give us symptoms. I’ve probably had it already. Why am I stuck inside? I’ve been working like a dog because you and Dad said ‘good grades, so important, blah blah’. And now I don’t even get to take GCSES. Might as well not have bothered. The whole thing sucks.”  
            I confiscated his laptop and the wine bottle and said I wouldn’t be returning the computer until he was ready to tell me what was going on and re-engage with our family instead of some make-believe online life.
            Felt quite pleased with quiet dignity of my speech in omniscient, glowing manner of Michelle Obama until I got out of the room and realised I’d forgotten to confiscate Harry’s phone. Damn! Parenting teenagers in the age of social media is like Whac-A-Mole. You take away one device and another pops up.
            I’m not angry with my son, I’m just really concerned. We’re not supposed to admit it, but there’s a lot of truth in what Harry says; Covid kills the old not the young. My exam summer, when I was Harry’s age, is branded on my memory – dread, exhaustion, elation – almost 40 years later. Kids are bound to be resentful as they miss out on these precious milestones of their youth. What has this lockdown done to the bright, motivated boy I had in the days B.C.?
            Standing there on the dark, silent landing, I can hear Robert talking upstairs in the attic office. He sounds in a good mood, suddenly. Lots of mellow chuckling. Who’s he talking to? Can’t be his parents at this time of night. “Miss you, too,” I hear him say quite clearly, “we have to be patient.” Take long swig from wine bottle and hurry downstairs.        
            9.47am
            I really need to get on with my work today, but too busy running lockdown B&B and fielding texts and calls. Also finding it very hard to talk to clients while Izzy is doing Zoom tap-dancing lesson.
            Izzy’s a lot happier now she knows Dennis is holding his own in hospital. Ellen is not allowed to visit him; nor can she have any visitors herself. How cruel Covid is. I was walking past earlier and I saw Linda holding up Mila, her youngest, to kiss Nana at the window. Ellen is now added to my shopping list.  
            Apocalypse Anna asked me to join the neighbourhood Covid Volunteer Group and, in initial burst of national-emergency, we’re-all-in-this-together fervour, I agreed to buy groceries and deliver to multiple housebound neighbours. Now seem to spend half the week sourcing Battenburg slices and Mini Cheddars. Have these people never heard of vegetables?
            Stop it, Carrie!  Must squash down feelings of resentment and patronising Lady Bountiful attitude to other people’s food choices. Who was it who drank that half bottle Harry left of Robert’s claret till 2am, while eating bag of Twiglets and binge-watching *Fauda* – brilliant but extremely violent series about irreconcilable struggle between Israelis and Palestintians? I find it strangely soothing. Far better than celebrities crooning to the world from their “isolation” when you just know there are five staff members hiding behind the curtains.  
            7.17pm
            “Please join Zoom meeting in progress.” Oh, hell. Robert and I agreed to join yet another quiz with people we don’t really like. Trouble with lockdown is, you have no excuse not to take part. You can hardly say, “So sorry, we’re out.” Zoomhaustion, that’s what they call it.
            “Hi, Mum?” I look up from the quiz questions to see Harry standing in the doorway. He smiles that impish smile of his and gives me an ironic little wave. “I hope you’re not ignoring your family for a make-believe online life, Mum. Can I please get my laptop?”
            Well played, my boy. Checkmate.
            Read previous chapters of The Corona Chronicles at telegraph.co.uk/coronachronicles`
            );
        });
    }
});
