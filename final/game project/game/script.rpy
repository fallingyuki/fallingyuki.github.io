define b = Character ("Ben")
define a = Character ("Alex")
define g = Character ("Gray")
define l = Character ("Lily")
define s = Character ("Stella")

define gp = Character ("Grandpa")
define u = Character ("???")
define b_side = Character ("Baker")

label start:
    $ mc = ""
    $ mc = renpy.input("Please enter your name.")
    $ mc = mc.strip()
    if mc == "":
        $ mc = "Name"
    scene market
    mc "Excuse me sir, but how much for a loaf of bread?"
    show baker
    b_side "Hello miss. That would be $2. Hmm...I don't seem to recognize you. Are you new in town?"
    mc "Yes, I just moved into the old farmhouse. It used to belong to my grandpa, but I'm going to take it over now."
    b_side "Well it is nice to meet you. Have a nice day."
    scene path
    "As I walk back to the house, I feel a sense of nostalgia. Every summer I would come to visit grandpa on the farm. We would go into town to buy the things we needed, and walked back together along the dirt path."
    scene memory_path
    mc "I love visiting you Grandpa! It's always so fun! I get to meet so many people and play with the animals on the farm."
    gp "[mc], one day this farm is going to be yours."
    mc "Really? I'm so excited!"
    scene path
    "After I turned 10, I stopped coming to the farm every summer. It's been 15 years since then."
    "A sudden voice calls my name from the distance, but I don't recognize it. I don't know many people in town."
    show ben
    u "Hey [mc]! It's been so long! What are you doing here?"
    mc "Hi, I'm sorry but who are you? I just moved into the farmhouse over there. I'm taking over my grandpa's old farm."
    b "Wow it's been so long that you forgot about me? Ha ha! It's me, Ben! We used to play a lot together when we were kids."
    mc "Oh my gosh, Ben! It really has been a long time! How have you been?"
    b "I've been good. Have you seen everyone else yet?"
    "I knew exactly who he was talking about. A group of us kids used to always hang out together. We were the only kids in town and that made all of us closer."
    mc "I only just moved in the other day. I haven't met a lot of people yet. I haven't even unpacked all my things yet."
    b "Want to go meet everyone? We all hang out together at a café nearby."
    mc "Yeah sure! Let's go!"
    scene cafe_front
    "We walk for a bit before arriving in front of a small café."
    show ben
    b "This is a café that Stella owns. She opened it up just a few years ago. We all hang out here, so if you ever want to, then you can just stop by and see everyone."
    scene cafe_inside
    "We walk inside and I get hit with the strong scent of coffee."
    show ben
    b "Hey guys, look who I met just now. Do you guys remember [mc]?"
    show ben at left
    show alex at center
    show stella at right
    s "Hi [mc]! I'm Stella."
    a "Oh, hey [mc]! I'm Alex."
    hide ben
    hide alex
    hide stella
    show gray at left
    show lily at right
    g "Yo! [mc]! How've you been? It's me, Gray."
    l "Oh my god! [mc]! It's been so long! It's Lily."
    mc "What have all of you guys been doing around here?"
    show stella at left
    show gray at center
    show ben at right
    s "I mean I opened up my own café. I've been wanting to do it for a while now. It's been 3 years since I've opened up it."
    g "The rest of us have picked up our family businesses. I'm managing the general store."
    b "I've taken over my family's clinic."
    hide stella
    hide gray
    hide ben
    show lily at left
    show alex at right
    l "I'm over at the library."
    a "And I'm running my family's carpenter shop."
    "We spend some time talking and catching up. Before I remembered that I still have a lot of do."
    mc "I should probably head out now. I still have a lot of unpacking to do."
    scene house_livingroom
    mc "Time to get unpacking..."
    "Moments later."
    mc "Whew...Finally done! What to do now?"
    mc "I should head over and see..."
    scene black screen
    "This game is still under development. Thank you for playing the demo! Stay tuned for when the full game comes out!"

return
