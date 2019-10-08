alert("Imagine waking up in the middle of a park, you get yourself home and discover everyone thinks you died last night!")

var yesno = confirm("Do you try to retrace your steps from last night?")

    if (yesno === true){
        var next= confirm("You actually don't remember where you've been the last 24hours, so you check your phone to see if there is anything that will help you remember.")
        if(next==true){
            var then = prompt("Who is your partner in crime?" + " My Mom, Best Friend, Neighbor")
        
                if(then.toLowerCase() === "my mom"){
                    var food= alert("You call and ask What did you last feed me?"+" She replies with: You just had some pasta then got an alergic reaction out-of-nowhere so you decided to drive yourself to the pharmacy for Benadryl, I insisted on taking you to the ER but when I returned from fetching my purse you were already gone.")
                }

                if(then.toLowerCase() === "best friend"){ 
                    var park = alert ("You message them asking Where did we go last night?"+" Your Best Friend responds:" + " Where have you been! We went to grab some street tacos and then checked out the Halloween store across the street. You freaked out over something in the outdoor decorations and ran out. I thought you were faking it so I didn't follow you right away. When you didnt come back inside, I went to look for you. I couldn't find you anywhere!")}

                if (then.toLowerCase() ==='neighbor'){
                    var car = alert ("You text them asking What did we do last night?"+"They call you back : Don't you remember? You texted me last night to go to Downtown with you, said you needed to vent! After a couple of minutes I called you back to ask what time we were leaving, but it went straight to voicemail. I never could get a hold of you for the rest of the night.")}
        


        
        
        }//prompt closing
    } else { 
        var lost = confirm("You realize your wallet is missing, so you check your bank account through your phone.")
             if(lost===true) {
                var whaaat= prompt( "What did you eat for lunch?" + "Pizza, Tacos, Chips")
                if(lost.toLowerCase()=== 'pizza'){
                    var en= alert(
                        "You went to have pizza after a long night out. The boxes were still in the back seat of your car when you woke up in the park the next morning.")
                    }
                    if (lost.toLowerCase()==='tacos'){
                        var nd= alert( 
                            "You got street tacos with your bestfriend and when to the Halloween store. There someone snagged your bag so you ran after them. According to the surveillance videos you ran towards the park.")
                    }
                    if (lost.toLowerCase()==='chips'){
                        var exit= alert(
                            "You had Chips and Salsa but for some reason the total was $50. You don't remember if you devoured  it all alone or had an accomplice.")
                    }

                } else {
                 var no= alert("  You're head hurts, you decide to forget all-about-it  for now and just sleep it off. Hopefully when you wake up everything will come back to you!") 
        } 
    

    }