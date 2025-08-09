// Naruto Shippuden Trivia App
const { useState, useEffect, useRef } = React;

// Comprehensive Naruto Shippuden trivia questions with 100 questions across four difficulty levels
const triviaQuestions = {
  easy: {
    characters: [
      {
        id: 1,
        question: "What is the name of Naruto's best friend and rival?",
        options: ["Sasuke Uchiha", "Shikamaru Nara", "Rock Lee", "Neji Hyuga"],
        correctAnswer: 0,
        fact: "Sasuke Uchiha is Naruto's best friend and rival. Their bond is central to the entire series, representing both friendship and rivalry.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 2,
        question: "Who is the pink-haired member of Team 7?",
        options: ["Hinata Hyuga", "Sakura Haruno", "Ino Yamanaka", "Tenten"],
        correctAnswer: 1,
        fact: "Sakura Haruno is the medical ninja of Team 7. She becomes one of the strongest kunoichi and surpasses her mentor Tsunade.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 3,
        question: "What is the name of Naruto's sensei in Team 7?",
        options: ["Jiraiya", "Kakashi Hatake", "Iruka Umino", "Asuma Sarutobi"],
        correctAnswer: 1,
        fact: "Kakashi Hatake is the leader of Team 7 and known as the Copy Ninja for his ability to copy over 1,000 jutsu with his Sharingan.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 4,
        question: "Who is the Third Hokage of Konoha?",
        options: [
          "Minato Namikaze",
          "Hiruzen Sarutobi",
          "Tsunade Senju",
          "Hashirama Senju",
        ],
        correctAnswer: 1,
        fact: "Hiruzen Sarutobi was the Third Hokage, known as 'The Professor' for his mastery of all ninja techniques in Konoha.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 5,
        question:
          "What is the name of the Nine-Tailed Fox sealed inside Naruto?",
        options: ["Shukaku", "Kurama", "Matatabi", "Son Goku"],
        correctAnswer: 1,
        fact: "Kurama, the Nine-Tailed Fox, was sealed inside Naruto by his father Minato. Over time, they became friends and partners.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 6,
        question: "Who is Naruto's father?",
        options: [
          "Jiraiya",
          "Hiruzen Sarutobi",
          "Minato Namikaze",
          "Kakashi Hatake",
        ],
        correctAnswer: 2,
        fact: "Minato Namikaze, the Fourth Hokage, is Naruto's father. He sacrificed his life to seal the Nine-Tails into Naruto.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 7,
        question: "What village is Gaara from?",
        options: ["Konohagakure", "Sunagakure", "Kirigakure", "Kumogakure"],
        correctAnswer: 1,
        fact: "Gaara is from Sunagakure (Village Hidden in the Sand) and later becomes the Fifth Kazekage.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 244,
        question: "Who is known as the 'Pervy Sage'?",
        options: ["Orochimaru", "Jiraiya", "Tsunade", "Kakashi"],
        correctAnswer: 1,
        fact: "Jiraiya is called the 'Pervy Sage' by Naruto due to his habit of writing adult novels and his perverted tendencies.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 245,
        question: "What is the name of Naruto's mother?",
        options: [
          "Tsunade",
          "Kushina Uzumaki",
          "Mikoto Uchiha",
          "Hinata Hyuga",
        ],
        correctAnswer: 1,
        fact: "Kushina Uzumaki was Naruto's mother and the previous jinchuriki of the Nine-Tails before Naruto.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 246,
        question: "Who is the lazy genius of Team 10?",
        options: [
          "Choji Akimichi",
          "Ino Yamanaka",
          "Shikamaru Nara",
          "Asuma Sarutobi",
        ],
        correctAnswer: 2,
        fact: "Shikamaru Nara is known for his incredible intelligence and strategic thinking, despite his lazy personality.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 247,
        question: "What is the name of the dog that fights alongside Kiba?",
        options: ["Akamaru", "Pakkun", "Shiba", "Kuromaru"],
        correctAnswer: 0,
        fact: "Akamaru is Kiba's loyal companion and fighting partner from the Inuzuka clan's ninken (ninja dog) tradition.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 264,
        question: "Who is the Fifth Hokage?",
        options: ["Jiraiya", "Tsunade", "Orochimaru", "Kakashi"],
        correctAnswer: 1,
        fact: "Tsunade Senju becomes the Fifth Hokage after being convinced by Naruto to return and help the village.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 265,
        question: "What is the name of Team 10's sensei?",
        options: ["Kakashi", "Kurenai", "Asuma", "Guy"],
        correctAnswer: 2,
        fact: "Asuma Sarutobi is the sensei of Team 10, consisting of Shikamaru, Ino, and Choji.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 266,
        question: "Who is known as the 'Copy Cat Ninja'?",
        options: ["Kakashi", "Sasuke", "Itachi", "Obito"],
        correctAnswer: 0,
        fact: "Kakashi Hatake is known as the Copy Cat Ninja because he can copy over 1,000 jutsu with his Sharingan.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 267,
        question: "What is Hinata's last name?",
        options: ["Uzumaki", "Uchiha", "Hyuga", "Nara"],
        correctAnswer: 2,
        fact: "Hinata Hyuga belongs to the prestigious Hyuga clan, known for their Byakugan and Gentle Fist fighting style.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 268,
        question: "Who is the leader of Team 8?",
        options: ["Kurenai", "Asuma", "Kakashi", "Guy"],
        correctAnswer: 0,
        fact: "Kurenai Yuhi leads Team 8, which consists of Hinata Hyuga, Kiba Inuzuka, and Shino Aburame.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 269,
        question: "What is Ino's family jutsu specialty?",
        options: [
          "Shadow techniques",
          "Mind techniques",
          "Expansion techniques",
          "Bug techniques",
        ],
        correctAnswer: 1,
        fact: "The Yamanaka clan specializes in mind-related jutsu, allowing them to control and communicate through minds.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 270,
        question: "Who is Choji's best friend?",
        options: ["Naruto", "Sasuke", "Shikamaru", "Kiba"],
        correctAnswer: 2,
        fact: "Choji and Shikamaru have been best friends since childhood and are both members of Team 10.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 271,
        question: "What is Tenten's weapon specialty?",
        options: ["Swords", "Throwing weapons", "Clubs", "Kunai only"],
        correctAnswer: 1,
        fact: "Tenten specializes in various throwing weapons and is skilled in weapon summoning techniques.",
        category: "Characters",
        difficulty: "easy",
      },
      {
        id: 272,
        question: "Who taught Naruto the Summoning Jutsu?",
        options: ["Kakashi", "Iruka", "Jiraiya", "Hiruzen"],
        correctAnswer: 2,
        fact: "Jiraiya taught Naruto how to summon toads, starting with learning to control his chakra properly.",
        category: "Characters",
        difficulty: "easy",
      },
    ],
    jutsu: [
      {
        id: 8,
        question: "What is Naruto's signature jutsu?",
        options: [
          "Rasengan",
          "Shadow Clone Jutsu",
          "Chidori",
          "Fireball Jutsu",
        ],
        correctAnswer: 1,
        fact: "The Shadow Clone Jutsu is Naruto's signature technique that he learned from the Scroll of Seals on his first day at the Ninja Academy.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 9,
        question: "What jutsu does Sasuke use that sounds like birds chirping?",
        options: ["Rasengan", "Chidori", "Lightning Blade", "Thunder Strike"],
        correctAnswer: 1,
        fact: "Chidori is an A-rank lightning technique created by Kakashi Hatake. It creates a sound similar to a thousand birds chirping.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 10,
        question: "What is the basic clone technique called?",
        options: [
          "Shadow Clone",
          "Clone Jutsu",
          "Multi-Shadow Clone",
          "Body Double",
        ],
        correctAnswer: 1,
        fact: "Clone Jutsu is one of the basic three techniques taught at the Ninja Academy, along with Transformation and Substitution jutsu.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 11,
        question: "What technique allows ninja to walk on water?",
        options: [
          "Water Walking",
          "Chakra Control",
          "Surface Walking",
          "Water Style",
        ],
        correctAnswer: 1,
        fact: "Chakra Control allows ninja to focus chakra to their feet, enabling them to walk on water and up vertical surfaces.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 12,
        question: "What is Rock Lee's signature fighting style?",
        options: ["Ninjutsu", "Genjutsu", "Taijutsu", "Medical Ninjutsu"],
        correctAnswer: 2,
        fact: "Rock Lee specializes in Taijutsu (hand-to-hand combat) and cannot use ninjutsu or genjutsu, making him unique among ninja.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 248,
        question: "What element is Sasuke's fireball jutsu?",
        options: ["Water", "Fire", "Lightning", "Earth"],
        correctAnswer: 1,
        fact: "Sasuke's Fireball Jutsu (Katon: Gokakyu no Jutsu) is a Fire Release technique he learned from his father.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 249,
        question:
          "What jutsu allows ninjas to replace themselves with objects?",
        options: [
          "Clone Jutsu",
          "Transformation Jutsu",
          "Substitution Jutsu",
          "Body Flicker",
        ],
        correctAnswer: 2,
        fact: "Substitution Jutsu is one of the basic three techniques that allows ninjas to quickly replace themselves with nearby objects.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 250,
        question: "What is Naruto's ultimate technique called?",
        options: ["Shadow Clone", "Rasengan", "Chidori", "Fireball"],
        correctAnswer: 1,
        fact: "Rasengan is Naruto's signature technique, taught to him by Jiraiya and originally created by his father Minato.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 273,
        question: "What type of jutsu is the Byakugan?",
        options: ["Ninjutsu", "Genjutsu", "Taijutsu", "Dojutsu"],
        correctAnswer: 3,
        fact: "Byakugan is a dojutsu (eye technique) that provides 360-degree vision and the ability to see chakra networks.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 274,
        question: "What jutsu allows Shikamaru to control shadows?",
        options: [
          "Shadow Clone",
          "Shadow Bind",
          "Shadow Possession",
          "Shadow Strike",
        ],
        correctAnswer: 2,
        fact: "Shadow Possession Jutsu is the signature technique of the Nara clan, allowing control of opponents through shadows.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 275,
        question: "What element does Choji's expansion jutsu use?",
        options: ["Earth", "Yang", "Yin", "None"],
        correctAnswer: 3,
        fact: "Choji's Multi-Size Technique doesn't use elemental chakra but rather body manipulation through chakra control.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 276,
        question: "What is Sakura's healing jutsu called?",
        options: [
          "Medical Ninjutsu",
          "Healing Palm",
          "Mystical Palm",
          "Recovery Jutsu",
        ],
        correctAnswer: 2,
        fact: "Mystical Palm Technique is a basic medical ninjutsu that Sakura learned from Tsunade for healing injuries.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 277,
        question: "What jutsu does Hinata use to attack chakra points?",
        options: [
          "Gentle Fist",
          "Eight Trigrams",
          "Byakugan Strike",
          "Palm Strike",
        ],
        correctAnswer: 0,
        fact: "Gentle Fist is the fighting style of the Hyuga clan that targets the opponent's chakra network.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 278,
        question: "What is the basic academy technique for disguise?",
        options: [
          "Clone Jutsu",
          "Transformation Jutsu",
          "Substitution Jutsu",
          "Camouflage Jutsu",
        ],
        correctAnswer: 1,
        fact: "Transformation Jutsu allows ninja to change their appearance and is one of the three basic academy techniques.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 279,
        question: "What type of chakra does Naruto have an affinity for?",
        options: ["Fire", "Wind", "Water", "Lightning"],
        correctAnswer: 1,
        fact: "Naruto has a wind chakra nature, which he uses to enhance his Rasengan into the Rasenshuriken.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 280,
        question: "What does the Summoning Jutsu require besides chakra?",
        options: ["Hand signs only", "Blood", "Special scroll", "Ninja tool"],
        correctAnswer: 1,
        fact: "Summoning Jutsu requires the user's blood as a contract medium to summon their animal partner.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 281,
        question: "What is the walking on water technique called?",
        options: [
          "Water Walking",
          "Surface Walking",
          "Chakra Control",
          "Liquid Walking",
        ],
        correctAnswer: 2,
        fact: "It's a chakra control exercise that teaches ninja to focus chakra to their feet to walk on various surfaces.",
        category: "Jutsu",
        difficulty: "easy",
      },
      {
        id: 282,
        question:
          "What jutsu creates temporary copies that disappear when hit?",
        options: [
          "Shadow Clone",
          "Clone Jutsu",
          "Multi-Shadow Clone",
          "Body Double",
        ],
        correctAnswer: 1,
        fact: "Basic Clone Jutsu creates illusory copies that have no physical form and disappear when touched.",
        category: "Jutsu",
        difficulty: "easy",
      },
    ],
    organizations: [
      {
        id: 13,
        question: "Which village is known as the Village Hidden in the Leaves?",
        options: ["Konohagakure", "Sunagakure", "Kirigakure", "Kumogakure"],
        correctAnswer: 0,
        fact: "Konohagakure is the hidden village of the Land of Fire and was founded by Hashirama Senju and Madara Uchiha.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 14,
        question: "What is the symbol on Naruto's forehead protector?",
        options: ["A spiral", "A leaf", "A flame", "A star"],
        correctAnswer: 1,
        fact: "The leaf symbol represents Konohagakure, the Village Hidden in the Leaves, where Naruto was born and raised.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 15,
        question: "Which village is known for its desert location?",
        options: ["Konohagakure", "Sunagakure", "Kirigakure", "Iwagakure"],
        correctAnswer: 1,
        fact: "Sunagakure (Village Hidden in the Sand) is located in the desert and is known for its harsh environment and wind-based jutsu.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 251,
        question: "What rank comes after Genin?",
        options: ["Jonin", "Chunin", "Kage", "ANBU"],
        correctAnswer: 1,
        fact: "Chunin is the next rank after Genin, achieved by passing the Chunin Exams and demonstrating leadership abilities.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 252,
        question: "What is the name of Team 8's sensei?",
        options: [
          "Kakashi Hatake",
          "Asuma Sarutobi",
          "Kurenai Yuhi",
          "Guy Sensei",
        ],
        correctAnswer: 2,
        fact: "Kurenai Yuhi is the sensei of Team 8, which consists of Hinata Hyuga, Kiba Inuzuka, and Shino Aburame.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 253,
        question: "Which team is known as Team Guy?",
        options: ["Team 7", "Team 8", "Team 9", "Team 10"],
        correctAnswer: 2,
        fact: "Team 9 (Team Guy) consists of Rock Lee, Neji Hyuga, and Tenten, led by Might Guy.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 283,
        question: "What village is known for its mist?",
        options: ["Konohagakure", "Kirigakure", "Sunagakure", "Kumogakure"],
        correctAnswer: 1,
        fact: "Kirigakure (Village Hidden in the Mist) is located in the Water Country and known for its bloody graduation exams.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 284,
        question: "What is the highest ninja rank in a village?",
        options: ["Jonin", "ANBU", "Kage", "Elder"],
        correctAnswer: 2,
        fact: "Kage is the highest rank, with each major village having their own: Hokage, Kazekage, Mizukage, Raikage, and Tsuchikage.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 285,
        question: "Which team has the most members?",
        options: ["Team 7", "Team 8", "Team 9", "All teams have 3"],
        correctAnswer: 3,
        fact: "All genin teams consist of 3 members plus 1 jonin sensei, following the traditional 4-man cell structure.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 286,
        question: "What organization protects the Hokage directly?",
        options: ["Jonin", "ANBU", "Chunin", "Police Force"],
        correctAnswer: 1,
        fact: "ANBU (Ansatsu Senjutsu Tokushu Butai) are elite ninja who handle special missions and protect the Hokage.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 287,
        question: "What is the name of the ninja academy?",
        options: [
          "Ninja Academy",
          "Shinobi School",
          "Konoha Academy",
          "Hidden Leaf Academy",
        ],
        correctAnswer: 0,
        fact: "The Ninja Academy is where young children learn basic ninja skills before becoming genin.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 288,
        question: "Which village is associated with lightning?",
        options: ["Konohagakure", "Kumogakure", "Iwagakure", "Sunagakure"],
        correctAnswer: 1,
        fact: "Kumogakure (Village Hidden in the Clouds) is known for its lightning-based techniques and mountainous location.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 289,
        question: "What does 'genin' mean?",
        options: [
          "Low ninja",
          "Young ninja",
          "Student ninja",
          "Beginning ninja",
        ],
        correctAnswer: 0,
        fact: "Genin literally means 'low ninja' and is the lowest rank of ninja after graduating from the academy.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 290,
        question: "Which village uses forehead protectors with a spiral?",
        options: ["Uzushiogakure", "Konohagakure", "Sunagakure", "Kirigakure"],
        correctAnswer: 0,
        fact: "Uzushiogakure (Village Hidden in the Whirlpools) used spiral symbols, and the Uzumaki clan originated from there.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 291,
        question: "What rank comes before Kage?",
        options: ["Chunin", "Jonin", "ANBU", "Elite Jonin"],
        correctAnswer: 1,
        fact: "Jonin is typically the rank before Kage, though some Kage may come from ANBU or other special positions.",
        category: "Organizations",
        difficulty: "easy",
      },
      {
        id: 292,
        question: "What is Team 7's original mission rank specialty?",
        options: ["A-rank", "B-rank", "C-rank", "D-rank"],
        correctAnswer: 3,
        fact: "New genin teams like Team 7 typically start with D-rank missions like finding lost cats or helping with chores.",
        category: "Organizations",
        difficulty: "easy",
      },
    ],
    history: [
      {
        id: 16,
        question: "What exam do ninja take to advance from Genin to Chunin?",
        options: [
          "Jonin Exams",
          "Chunin Exams",
          "Hokage Trials",
          "Ninja Assessment",
        ],
        correctAnswer: 1,
        fact: "The Chunin Exams are held twice a year and test ninja in written knowledge, survival skills, and combat abilities.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 17,
        question: "What is the highest rank a ninja can achieve in a village?",
        options: ["Jonin", "Anbu", "Kage", "Sannin"],
        correctAnswer: 2,
        fact: "Kage is the highest rank, with each major village having their own Kage (Hokage, Kazekage, Mizukage, Raikage, Tsuchikage).",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 18,
        question:
          "What are the three basic ninja techniques taught at the academy?",
        options: [
          "Clone, Transform, Fireball",
          "Clone, Transform, Substitution",
          "Shadow Clone, Rasengan, Chidori",
          "Walk on Water, Tree Climbing, Running",
        ],
        correctAnswer: 1,
        fact: "The three basic techniques are Clone Jutsu, Transformation Jutsu, and Substitution Jutsu - essential skills for all ninja.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 19,
        question: "What do ninja use to perform jutsu?",
        options: ["Chakra", "Ki", "Mana", "Energy"],
        correctAnswer: 0,
        fact: "Chakra is the energy source that ninja use to perform jutsu, created by combining physical and spiritual energy.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 20,
        question: "What team number is Naruto, Sasuke, and Sakura part of?",
        options: ["Team 7", "Team 8", "Team 9", "Team 10"],
        correctAnswer: 0,
        fact: "Team 7 consists of Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno, led by Kakashi Hatake.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 254,
        question: "What happened on the night Naruto was born?",
        options: [
          "Uchiha Massacre",
          "Nine-Tails Attack",
          "Sand Invasion",
          "Chunin Exams",
        ],
        correctAnswer: 1,
        fact: "The Nine-Tails attacked Konoha on the night Naruto was born, leading to his parents' sacrifice to seal it inside him.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 255,
        question: "Who was Naruto's first teacher at the Academy?",
        options: ["Kakashi", "Iruka", "Jiraiya", "Hiruzen"],
        correctAnswer: 1,
        fact: "Iruka Umino was Naruto's academy teacher and became like a father figure, being the first to truly acknowledge Naruto.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 256,
        question: "What test must genin pass to become chunin?",
        options: ["Jonin Exam", "Chunin Exams", "Hokage Test", "Village Trial"],
        correctAnswer: 1,
        fact: "The Chunin Exams test young ninja in three phases: written exam, survival challenge, and tournament battles.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 293,
        question: "Why does Naruto want to become Hokage?",
        options: ["For power", "For recognition", "For money", "For fun"],
        correctAnswer: 1,
        fact: "Naruto wants to become Hokage so that everyone will acknowledge him and he won't be alone anymore.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 294,
        question: "What mission led to Sasuke leaving the village?",
        options: [
          "Rescue mission",
          "Orochimaru's offer",
          "Sound Four arrival",
          "Chunin Exams",
        ],
        correctAnswer: 2,
        fact: "The Sound Four came to retrieve Sasuke, leading to his decision to leave Konoha to gain power from Orochimaru.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 295,
        question: "Who was Naruto's rival in the academy?",
        options: ["Sasuke", "Kiba", "Shikamaru", "Neji"],
        correctAnswer: 0,
        fact: "Sasuke was Naruto's main rival and the top student in their academy class, which motivated Naruto to work harder.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 296,
        question: "What did Naruto fail three times at the academy?",
        options: [
          "Written test",
          "Physical test",
          "Clone Jutsu",
          "Transformation",
        ],
        correctAnswer: 2,
        fact: "Naruto failed to graduate because he couldn't perform the basic Clone Jutsu due to his large chakra reserves.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 297,
        question: "Who gave Naruto his first acknowledgment?",
        options: ["Hiruzen", "Iruka", "Kakashi", "Jiraiya"],
        correctAnswer: 1,
        fact: "Iruka was the first person to truly acknowledge Naruto when he protected him from Mizuki and treated him to ramen.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 298,
        question: "What was Naruto's first major mission outside the village?",
        options: [
          "Wave Country",
          "Sand Village",
          "Forest of Death",
          "Sound Village",
        ],
        correctAnswer: 0,
        fact: "The mission to the Wave Country (Land of Waves) was Team 7's first C-rank mission outside the village.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 299,
        question: "Who was the bridge builder Team 7 protected?",
        options: ["Tazuna", "Inari", "Gato", "Zabuza"],
        correctAnswer: 0,
        fact: "Tazuna was the bridge builder from the Land of Waves who hired Team 7 to protect him while building his bridge.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 300,
        question: "What was the first jutsu Naruto successfully learned?",
        options: ["Rasengan", "Shadow Clone", "Transformation", "Substitution"],
        correctAnswer: 1,
        fact: "Shadow Clone Jutsu was the first technique Naruto mastered, learning it from the Scroll of Seals.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 301,
        question: "Who taught Naruto about the Nine-Tails inside him?",
        options: ["Iruka", "Kakashi", "Jiraiya", "Hiruzen"],
        correctAnswer: 2,
        fact: "Jiraiya was the one who explained to Naruto about the Nine-Tails sealed inside him and began training him to control it.",
        category: "History",
        difficulty: "easy",
      },
      {
        id: 302,
        question: "What was the name of the first villain Team 7 fought?",
        options: ["Orochimaru", "Zabuza", "Gaara", "Haku"],
        correctAnswer: 1,
        fact: "Zabuza Momochi, the Demon of the Mist, was the first major villain that Team 7 encountered in the Land of Waves.",
        category: "History",
        difficulty: "easy",
      },
    ],
  },
  medium: {
    characters: [
      {
        id: 21,
        question: "Who is the Fourth Hokage of Konohagakure?",
        options: [
          "Hiruzen Sarutobi",
          "Minato Namikaze",
          "Tsunade Senju",
          "Kakashi Hatake",
        ],
        correctAnswer: 1,
        fact: "Minato Namikaze, also known as the Yellow Flash, was the Fourth Hokage and Naruto's father.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 22,
        question: "Who is known as the Copy Ninja?",
        options: [
          "Kakashi Hatake",
          "Itachi Uchiha",
          "Sasuke Uchiha",
          "Shisui Uchiha",
        ],
        correctAnswer: 0,
        fact: "Kakashi Hatake earned the nickname 'Copy Ninja Kakashi' because his Sharingan allows him to copy over 1,000 jutsu.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 23,
        question: "What is Jiraiya known as?",
        options: [
          "The Toad Sage",
          "The Snake Sannin",
          "The Slug Princess",
          "The Demon of the Mist",
        ],
        correctAnswer: 0,
        fact: "Jiraiya is known as the Toad Sage and is one of the Legendary Sannin, along with Tsunade and Orochimaru.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 24,
        question: "Who is the leader of the Akatsuki organization?",
        options: [
          "Itachi Uchiha",
          "Pain/Nagato",
          "Tobi/Obito",
          "Madara Uchiha",
        ],
        correctAnswer: 1,
        fact: "Pain (Nagato) leads the Akatsuki organization, though he is later revealed to be manipulated by Tobi/Obito.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 25,
        question: "What is Shikamaru's IQ?",
        options: ["150", "180", "200", "Over 200"],
        correctAnswer: 3,
        fact: "Shikamaru Nara has an IQ of over 200, making him one of the smartest characters in the series.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 26,
        question: "Who killed the Third Hokage?",
        options: ["Itachi Uchiha", "Orochimaru", "Pain", "Kabuto"],
        correctAnswer: 1,
        fact: "Orochimaru killed the Third Hokage Hiruzen Sarutobi during his invasion of Konoha, using the Reaper Death Seal.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 27,
        question: "What is Hinata's special eye technique called?",
        options: ["Sharingan", "Rinnegan", "Byakugan", "Tenseigan"],
        correctAnswer: 2,
        fact: "The Byakugan is the Hyuga clan's dojutsu, providing 360-degree vision and the ability to see chakra networks.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 303,
        question: "What is Orochimaru's curse mark called?",
        options: ["Heaven Curse Mark", "Cursed Seal", "Dark Mark", "Evil Seal"],
        correctAnswer: 1,
        fact: "The Cursed Seal gives the bearer increased power but comes with the risk of being consumed by Orochimaru's influence.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 304,
        question: "Who is the jinchuriki of the One-Tail?",
        options: ["Naruto", "Gaara", "Killer Bee", "Yugito"],
        correctAnswer: 1,
        fact: "Gaara was the jinchuriki of Shukaku, the One-Tailed Beast, which was later extracted by the Akatsuki.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 305,
        question: "What is Sasuke's older brother's name?",
        options: ["Madara", "Itachi", "Obito", "Shisui"],
        correctAnswer: 1,
        fact: "Itachi Uchiha is Sasuke's older brother who massacred their clan but spared Sasuke.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 306,
        question: "Who is known as the 'Slug Princess'?",
        options: ["Sakura", "Tsunade", "Shizune", "Kushina"],
        correctAnswer: 1,
        fact: "Tsunade is called the Slug Princess because of her summoning contract with slugs and her legendary strength.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 307,
        question: "What is the name of Kakashi's father?",
        options: [
          "White Fang",
          "Sakumo Hatake",
          "Silver Wolf",
          "Gray Lightning",
        ],
        correctAnswer: 1,
        fact: "Sakumo Hatake, known as the White Fang of Konoha, was Kakashi's father who committed suicide after a failed mission.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 308,
        question: "Who taught Sasuke the Chidori?",
        options: ["Itachi", "Kakashi", "Orochimaru", "Madara"],
        correctAnswer: 1,
        fact: "Kakashi taught Sasuke the Chidori during their training for the Chunin Exams finals.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 309,
        question: "What is Neji's relationship to Hinata?",
        options: ["Brother", "Cousin", "Uncle", "Friend"],
        correctAnswer: 1,
        fact: "Neji is Hinata's cousin from the branch family of the Hyuga clan, while Hinata is from the main family.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 310,
        question: "Who is the Eight-Tails jinchuriki?",
        options: ["Naruto", "Gaara", "Killer Bee", "Han"],
        correctAnswer: 2,
        fact: "Killer Bee from Kumogakure is the jinchuriki of the Eight-Tails (Gyuki) and has perfect control over his tailed beast.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 311,
        question: "What is Deidara's explosive art medium?",
        options: ["Gunpowder", "Clay", "Paper", "Metal"],
        correctAnswer: 1,
        fact: "Deidara uses clay infused with explosive chakra to create his artistic explosive sculptures.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 312,
        question: "Who is the leader of the Sound Four?",
        options: ["Sakon", "Tayuya", "Kimimaro", "Jirobo"],
        correctAnswer: 2,
        fact: "Kimimaro is technically the strongest and leader figure of the Sound Five, though he's often not counted with the Sound Four.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 313,
        question: "What is Hidan's special ability?",
        options: [
          "Immortality",
          "Super strength",
          "Mind reading",
          "Teleportation",
        ],
        correctAnswer: 0,
        fact: "Hidan is immortal due to his worship of Jashin, allowing him to survive normally fatal injuries.",
        category: "Characters",
        difficulty: "medium",
      },
      {
        id: 314,
        question: "Who is known as the 'God of Shinobi'?",
        options: ["Hiruzen", "Hashirama", "Minato", "Jiraiya"],
        correctAnswer: 1,
        fact: "Hashirama Senju, the First Hokage, was known as the God of Shinobi for his incredible power and Wood Release abilities.",
        category: "Characters",
        difficulty: "medium",
      },
    ],
    jutsu: [
      {
        id: 28,
        question: "What is the name of Sakura's signature healing jutsu?",
        options: [
          "Medical Ninjutsu",
          "Byakugō no In",
          "Chakra Scalpel",
          "Healing Touch",
        ],
        correctAnswer: 1,
        fact: "Byakugō no In (Strength of a Hundred Seal) stores chakra in a seal on the forehead, allowing powerful healing and enhanced strength.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 29,
        question:
          "What is the name of the technique that creates a perfect sphere of rotating chakra?",
        options: ["Rasengan", "Chidori", "Spiral Sphere", "Chakra Ball"],
        correctAnswer: 0,
        fact: "Rasengan was created by the Fourth Hokage and perfected by Naruto. It's an A-rank technique that forms a perfect sphere of rotating chakra.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 30,
        question: "What is Gaara's ultimate defense technique called?",
        options: [
          "Sand Shield",
          "Absolute Defense",
          "Sand Armor",
          "Ultimate Defense",
        ],
        correctAnswer: 1,
        fact: "Gaara's Absolute Defense automatically protects him using sand, even while he sleeps, controlled by his mother's spirit.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 31,
        question: "What technique does Neji use to attack chakra points?",
        options: [
          "Eight Trigrams Sixty-Four Palms",
          "Gentle Fist",
          "Byakugan Strike",
          "Chakra Point Attack",
        ],
        correctAnswer: 0,
        fact: "Eight Trigrams Sixty-Four Palms is a Gentle Fist technique that strikes 64 chakra points to disable an opponent's chakra network.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 32,
        question: "What is Choji's expansion technique called?",
        options: [
          "Giant Mode",
          "Expansion Jutsu",
          "Multi-Size Technique",
          "Body Enlargement",
        ],
        correctAnswer: 2,
        fact: "Multi-Size Technique allows members of the Akimichi clan to expand parts or all of their body for increased strength and reach.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 33,
        question:
          "What forbidden jutsu allows the user to take over another's body?",
        options: [
          "Mind Transfer",
          "Body Switch",
          "Soul Possession",
          "Mind Body Switch",
        ],
        correctAnswer: 3,
        fact: "Mind Body Switch Technique allows the Yamanaka clan to project their spirit into another person's body to control them.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 34,
        question: "What is the name of Kakashi's space-time ninjutsu?",
        options: ["Kamui", "Teleportation", "Dimensional Rift", "Space Warp"],
        correctAnswer: 0,
        fact: "Kamui is Kakashi's Mangekyo Sharingan ability that can transport objects to and from a pocket dimension.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 315,
        question: "What is the name of Sasuke's fire technique?",
        options: [
          "Fireball Jutsu",
          "Fire Dragon",
          "Phoenix Fire",
          "Grand Fireball",
        ],
        correctAnswer: 0,
        fact: "Great Fireball Jutsu (Katon: Gokakyu no Jutsu) is a signature technique of the Uchiha clan that Sasuke mastered.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 316,
        question: "What technique allows Ino to control minds?",
        options: [
          "Mind Transfer",
          "Body Switch",
          "Mind Control",
          "Mental Domination",
        ],
        correctAnswer: 0,
        fact: "Mind Transfer Jutsu allows Ino to project her consciousness into another person's body to control them.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 317,
        question: "What is Tsunade's strength enhancement technique?",
        options: [
          "Super Strength",
          "Chakra Enhanced Strength",
          "Power Boost",
          "Muscle Enhancement",
        ],
        correctAnswer: 1,
        fact: "Tsunade uses precise chakra control to enhance her physical strength to superhuman levels.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 318,
        question: "What is the name of Jiraiya's hair technique?",
        options: [
          "Hair Needle",
          "Wild Lion's Mane",
          "Hair Prison",
          "Needle Jizo",
        ],
        correctAnswer: 3,
        fact: "Needle Jizo hardens Jiraiya's hair into sharp spikes that can be used for both offense and defense.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 319,
        question: "What element is Kakashi's Lightning Blade?",
        options: ["Lightning", "Wind", "Fire", "Water"],
        correctAnswer: 0,
        fact: "Lightning Blade (Raikiri) is an enhanced version of Chidori that uses lightning chakra nature.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 320,
        question: "What jutsu creates wood constructs?",
        options: [
          "Earth Release",
          "Wood Release",
          "Nature Manipulation",
          "Plant Growth",
        ],
        correctAnswer: 1,
        fact: "Wood Release is a kekkei genkai that combines earth and water chakra to create and control wood.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 321,
        question: "What is Orochimaru's signature summoning?",
        options: ["Snakes", "Spiders", "Lizards", "Salamanders"],
        correctAnswer: 0,
        fact: "Orochimaru has a summoning contract with snakes, particularly the giant snake Manda.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 322,
        question: "What technique allows rapid movement?",
        options: ["Body Flicker", "Teleportation", "Speed Boost", "Flash Step"],
        correctAnswer: 0,
        fact: "Body Flicker Technique allows ninja to move at extremely high speeds, appearing to teleport short distances.",
        category: "Jutsu",
        difficulty: "medium",
      },
      {
        id: 323,
        question: "What is Haku's kekkei genkai?",
        options: [
          "Ice Release",
          "Crystal Release",
          "Snow Release",
          "Frost Release",
        ],
        correctAnswer: 0,
        fact: "Ice Release combines wind and water chakra natures to create and manipulate ice.",
        category: "Jutsu",
        difficulty: "medium",
      },
    ],
    organizations: [
      {
        id: 35,
        question:
          "What is the name of the organization that Itachi Uchiha was a part of?",
        options: ["Akatsuki", "Taka", "Root", "Anbu"],
        correctAnswer: 0,
        fact: "Akatsuki was a criminal organization of S-rank missing-nin. Itachi joined to protect Konoha from within while working as a double agent.",
        category: "Organizations",
        difficulty: "medium",
      },
      {
        id: 36,
        question: "What does Akatsuki mean in Japanese?",
        options: ["Dawn", "Dusk", "Shadow", "Storm"],
        correctAnswer: 0,
        fact: "Akatsuki means 'dawn' in Japanese, symbolizing their goal to bring a new dawn to the ninja world through their methods.",
        category: "Organizations",
        difficulty: "medium",
      },
      {
        id: 37,
        question: "What organization does Danzo lead?",
        options: ["Anbu", "Root", "Foundation", "Black Ops"],
        correctAnswer: 1,
        fact: "Root is a secret organization within Konoha led by Danzo, operating in the shadows to protect the village through any means necessary.",
        category: "Organizations",
        difficulty: "medium",
      },
      {
        id: 38,
        question: "What is the name of Orochimaru's hidden village?",
        options: ["Otogakure", "Hidden Sound", "Oto Village", "Sound Village"],
        correctAnswer: 0,
        fact: "Otogakure (Hidden Sound Village) was established by Orochimaru to conduct his experiments and train his followers.",
        category: "Organizations",
        difficulty: "medium",
      },
      {
        id: 39,
        question: "What team does Sasuke form after leaving Orochimaru?",
        options: ["Team Hawk", "Team Taka", "Team Snake", "Team Hebi"],
        correctAnswer: 1,
        fact: "Team Taka (Hawk) was formed by Sasuke with Suigetsu, Karin, and Jugo to help him capture Itachi and later target Konoha.",
        category: "Organizations",
        difficulty: "medium",
      },
    ],
    history: [
      {
        id: 40,
        question: "Who founded Konohagakure along with Hashirama Senju?",
        options: [
          "Tobirama Senju",
          "Madara Uchiha",
          "Hiruzen Sarutobi",
          "Minato Namikaze",
        ],
        correctAnswer: 1,
        fact: "Madara Uchiha and Hashirama Senju founded Konohagakure together, ending the warring clans period and establishing the first hidden village.",
        category: "History",
        difficulty: "medium",
      },
      {
        id: 41,
        question: "What war occurred before the start of the series?",
        options: [
          "First Shinobi War",
          "Second Shinobi War",
          "Third Shinobi War",
          "Fourth Shinobi War",
        ],
        correctAnswer: 2,
        fact: "The Third Shinobi World War occurred before the series began, where many young ninja like Kakashi, Obito, and Rin fought and suffered losses.",
        category: "History",
        difficulty: "medium",
      },
      {
        id: 42,
        question: "What event led to Naruto becoming a jinchuriki?",
        options: [
          "Nine-Tails Attack",
          "Uchiha Massacre",
          "Konoha Invasion",
          "Pain's Assault",
        ],
        correctAnswer: 0,
        fact: "The Nine-Tails attack on Konoha led to Minato sealing the beast inside his newborn son Naruto to save the village.",
        category: "History",
        difficulty: "medium",
      },
      {
        id: 257,
        question:
          "What was the name of the war that happened before the series?",
        options: [
          "First Shinobi War",
          "Second Shinobi War",
          "Third Shinobi War",
          "Fourth Shinobi War",
        ],
        correctAnswer: 2,
        fact: "The Third Shinobi World War was a major conflict that shaped many characters' backstories, including Kakashi, Obito, and Rin.",
        category: "History",
        difficulty: "medium",
      },
      {
        id: 258,
        question: "Who was responsible for the Uchiha massacre?",
        options: [
          "Orochimaru",
          "Itachi Uchiha",
          "Madara Uchiha",
          "Danzo Shimura",
        ],
        correctAnswer: 1,
        fact: "Itachi Uchiha carried out the Uchiha massacre on orders from Konoha's leadership to prevent a coup, though he spared Sasuke.",
        category: "History",
        difficulty: "medium",
      },
    ],
  },
  hard: {
    characters: [
      {
        id: 43,
        question: "Which Hokage is known as the God of Shinobi?",
        options: [
          "Hashirama Senju",
          "Tobirama Senju",
          "Hiruzen Sarutobi",
          "Minato Namikaze",
        ],
        correctAnswer: 0,
        fact: "Hashirama Senju, the First Hokage, was known as the God of Shinobi for his incredible Wood Release abilities and strength.",
        category: "Characters",
        difficulty: "hard",
      },
      {
        id: 44,
        question: "Who was the real leader behind the Akatsuki organization?",
        options: ["Pain", "Madara Uchiha", "Obito Uchiha", "Black Zetsu"],
        correctAnswer: 3,
        fact: "Black Zetsu was the true mastermind, manipulating events for centuries to revive Kaguya Otsutsuki, using even Madara as a pawn.",
        category: "Characters",
        difficulty: "hard",
      },
      {
        id: 45,
        question:
          "What is the real name of the masked man who called himself Madara?",
        options: [
          "Obito Uchiha",
          "Shisui Uchiha",
          "Izuna Uchiha",
          "Fugaku Uchiha",
        ],
        correctAnswer: 0,
        fact: "Obito Uchiha survived the boulder incident and was manipulated by Madara, later taking on his identity to further the Eye of the Moon Plan.",
        category: "Characters",
        difficulty: "hard",
      },
      {
        id: 46,
        question: "Who is known as the 'Yellow Flash of Konoha'?",
        options: [
          "Kakashi Hatake",
          "Minato Namikaze",
          "Tobirama Senju",
          "Shisui Uchiha",
        ],
        correctAnswer: 1,
        fact: "Minato Namikaze earned this nickname for his incredible speed using the Flying Thunder God Technique, making him feared across nations.",
        category: "Characters",
        difficulty: "hard",
      },
      {
        id: 47,
        question:
          "What is Kaguya Otsutsuki's relationship to the Sage of Six Paths?",
        options: ["His teacher", "His mother", "His sister", "His daughter"],
        correctAnswer: 1,
        fact: "Kaguya Otsutsuki is the mother of Hagoromo (Sage of Six Paths) and Hamura, and the origin of all chakra in the ninja world.",
        category: "Characters",
        difficulty: "hard",
      },
      {
        id: 48,
        question:
          "Who was Kakashi's teammate that was supposedly killed in the Third War?",
        options: [
          "Obito Uchiha",
          "Rin Nohara",
          "Minato Namikaze",
          "Guy Sensei",
        ],
        correctAnswer: 0,
        fact: "Obito Uchiha was Kakashi's teammate who was believed killed when crushed by rocks, but actually survived and became the masked man.",
        category: "Characters",
        difficulty: "hard",
      },
      {
        id: 49,
        question: "What is Orochimaru's ultimate goal?",
        options: [
          "Destroy Konoha",
          "Become Hokage",
          "Learn all jutsu",
          "Immortality",
        ],
        correctAnswer: 2,
        fact: "Orochimaru's ultimate goal is to learn every jutsu in existence and understand all the secrets of the ninja world, seeking immortality to achieve this.",
        category: "Characters",
        difficulty: "hard",
      },
    ],
    jutsu: [
      {
        id: 50,
        question:
          "What is the strongest technique in Naruto's arsenal besides Sage Mode?",
        options: [
          "Rasengan",
          "Rasenshuriken",
          "Tailed Beast Bomb",
          "Wind Release: Rasengan",
        ],
        correctAnswer: 1,
        fact: "Wind Release: Rasenshuriken is Naruto's ultimate technique, combining Wind chakra with Rasengan to create a technique that cuts at the cellular level.",
        category: "Jutsu",
        difficulty: "hard",
      },
      {
        id: 51,
        question: "What forbidden jutsu can bring people back from the dead?",
        options: [
          "Edo Tensei",
          "Resurrection Technique",
          "Soul Revival",
          "Death Reversal",
        ],
        correctAnswer: 0,
        fact: "Edo Tensei (Impure World Reincarnation) brings the dead back as immortal puppets. It was created by Tobirama but perfected by Orochimaru and Kabuto.",
        category: "Jutsu",
        difficulty: "hard",
      },
      {
        id: 52,
        question: "What technique allows the user to control shadows?",
        options: [
          "Shadow Clone",
          "Shadow Bind",
          "Shadow Possession",
          "Shadow Mimicry",
        ],
        correctAnswer: 2,
        fact: "Shadow Possession Technique is the signature jutsu of the Nara clan, allowing them to control opponents by connecting their shadows.",
        category: "Jutsu",
        difficulty: "hard",
      },
      {
        id: 53,
        question:
          "What is the most powerful Sharingan technique Itachi possesses?",
        options: ["Amaterasu", "Tsukuyomi", "Susanoo", "Izanami"],
        correctAnswer: 2,
        fact: "Susanoo is considered the ultimate Sharingan technique, creating a massive spiritual warrior that acts as both offense and defense.",
        category: "Jutsu",
        difficulty: "hard",
      },
      {
        id: 54,
        question: "What technique can alter reality for a brief moment?",
        options: ["Izanami", "Izanagi", "Genjutsu", "Reality Warp"],
        correctAnswer: 1,
        fact: "Izanagi is a powerful genjutsu that can turn illusion into reality for a short time, but costs the user their eyesight in one eye.",
        category: "Jutsu",
        difficulty: "hard",
      },
      {
        id: 55,
        question: "What is the name of Madara's perfect Susanoo technique?",
        options: [
          "Perfect Susanoo",
          "Complete Body Susanoo",
          "Majestic Attire: Susanoo",
          "Ultimate Susanoo",
        ],
        correctAnswer: 1,
        fact: "Complete Body Susanoo is Madara's perfect form of Susanoo, rivaling the size of a Tailed Beast and capable of splitting mountains.",
        category: "Jutsu",
        difficulty: "hard",
      },
    ],
    organizations: [
      {
        id: 56,
        question: "What is the true purpose of the Akatsuki organization?",
        options: [
          "Collect Tailed Beasts",
          "Eye of the Moon Plan",
          "Destroy Hidden Villages",
          "World Domination",
        ],
        correctAnswer: 1,
        fact: "The Eye of the Moon Plan was Akatsuki's true goal: to cast an infinite genjutsu on the world using the Ten-Tails' power.",
        category: "Organizations",
        difficulty: "hard",
      },
      {
        id: 57,
        question: "Who was the original founder of the Akatsuki?",
        options: ["Pain", "Madara", "Yahiko", "Obito"],
        correctAnswer: 2,
        fact: "Yahiko originally founded Akatsuki as a peaceful organization to bring peace to the Rain Country before his death changed everything.",
        category: "Organizations",
        difficulty: "hard",
      },
      {
        id: 58,
        question: "What organization did Sasuke create to hunt Tailed Beasts?",
        options: ["Team Hawk", "Team Taka", "Team Snake", "Team Hebi"],
        correctAnswer: 1,
        fact: "Team Taka was formed by Sasuke specifically to capture the Eight-Tails after he defeated Orochimaru and absorbed his power.",
        category: "Organizations",
        difficulty: "hard",
      },
      {
        id: 59,
        question: "What is the name of Danzo's secret organization?",
        options: ["ANBU", "Root", "Foundation", "Shadow"],
        correctAnswer: 1,
        fact: "Root is Danzo's secret organization that operates in the shadows of Konoha, training emotionless ninja for the village's protection.",
        category: "Organizations",
        difficulty: "hard",
      },
      {
        id: 60,
        question: "Who leads the Sound Four?",
        options: ["Orochimaru", "Kimimaro", "Tayuya", "Sakon"],
        correctAnswer: 1,
        fact: "Kimimaro leads the Sound Four as Orochimaru's most loyal follower, though he's technically the Sound Five when he's included.",
        category: "Organizations",
        difficulty: "hard",
      },
    ],
    history: [
      {
        id: 61,
        question: "What event led to the creation of the Hidden Villages?",
        options: [
          "First Shinobi War",
          "Warring States Period",
          "Senju-Uchiha Alliance",
          "Sage of Six Paths' Death",
        ],
        correctAnswer: 2,
        fact: "The alliance between the Senju and Uchiha clans ended the Warring States Period and led to the creation of Konohagakure, the first Hidden Village.",
        category: "History",
        difficulty: "hard",
      },
      {
        id: 62,
        question: "Who was responsible for the Uchiha Clan Massacre?",
        options: [
          "Danzo",
          "Itachi alone",
          "Itachi and Obito",
          "The Third Hokage",
        ],
        correctAnswer: 2,
        fact: "Itachi carried out the massacre with help from Obito (masked as Madara), following orders from Konoha's leadership to prevent a coup.",
        category: "History",
        difficulty: "hard",
      },
      {
        id: 63,
        question:
          "What was the real reason behind the Fourth Shinobi World War?",
        options: [
          "Revenge against villages",
          "Collecting Tailed Beasts",
          "Infinite Tsukuyomi",
          "Reviving Kaguya",
        ],
        correctAnswer: 2,
        fact: "The war was started to complete the Eye of the Moon Plan and cast Infinite Tsukuyomi, though it ultimately served to revive Kaguya.",
        category: "History",
        difficulty: "hard",
      },
      {
        id: 64,
        question: "Who killed the Fourth Hokage Minato Namikaze?",
        options: [
          "Nine-Tails",
          "Obito Uchiha",
          "Orochimaru",
          "Reaper Death Seal",
        ],
        correctAnswer: 3,
        fact: "Minato died from using the Reaper Death Seal to seal half of the Nine-Tails into Naruto, sacrificing his life to save the village.",
        category: "History",
        difficulty: "hard",
      },
      {
        id: 65,
        question: "What triggered the Third Shinobi World War?",
        options: [
          "Kidnapping of Kushina",
          "Death of the Third Kazekage",
          "Border disputes",
          "Economic collapse",
        ],
        correctAnswer: 1,
        fact: "The disappearance and death of the Third Kazekage (killed by Sasori) destabilized the ninja world and triggered the Third Shinobi World War.",
        category: "History",
        difficulty: "hard",
      },
      {
        id: 259,
        question: "What was the real cause of the Uchiha clan planning a coup?",
        options: [
          "Power hunger",
          "Discrimination and isolation",
          "Revenge for Madara",
          "Orochimaru's influence",
        ],
        correctAnswer: 1,
        fact: "The Uchiha were isolated and discriminated against by Konoha's leadership, who suspected them of controlling the Nine-Tails attack.",
        category: "History",
        difficulty: "hard",
      },
      {
        id: 260,
        question:
          "Who was the masked man that helped Itachi with the massacre?",
        options: ["Madara Uchiha", "Obito Uchiha", "Tobi", "Black Zetsu"],
        correctAnswer: 1,
        fact: "Obito Uchiha, operating under the identity of Tobi/Madara, helped Itachi carry out the Uchiha massacre.",
        category: "History",
        difficulty: "hard",
      },
    ],
  },
  expert: {
    characters: [
      {
        id: 79,
        question: "What is the name of Kaguya's dimension with the lava pits?",
        options: [
          "Lava Dimension",
          "Molten Core",
          "Burning Ash Dimension",
          "Volcanic Realm",
        ],
        correctAnswer: 2,
        fact: "The Burning Ash Dimension is one of Kaguya's six dimensions, filled with volcanic ash and extreme heat that can incinerate anything.",
        category: "Characters",
        difficulty: "expert",
      },
      {
        id: 80,
        question: "Who is the creator of the Curse Mark technique?",
        options: ["Orochimaru", "Jugo", "Kimimaro", "Sound Four"],
        correctAnswer: 1,
        fact: "Jugo is the original source of the Curse Mark. His clan naturally produces enzymes that transform their bodies, which Orochimaru replicated.",
        category: "Characters",
        difficulty: "expert",
      },
      {
        id: 81,
        question: "What is the name of Kakuzu's heart-stealing technique?",
        options: [
          "Earth Grudge Fear",
          "Heart Capture",
          "Soul Steal",
          "Life Drain",
        ],
        correctAnswer: 0,
        fact: "Earth Grudge Fear allows Kakuzu to steal hearts from his victims and use them to extend his life and gain additional elemental affinities.",
        category: "Characters",
        difficulty: "expert",
      },
      {
        id: 82,
        question: "Who was the previous jinchuriki of the Two-Tails?",
        options: ["Yugito Nii", "Matatabi", "Blue Cat", "Cloud Ninja"],
        correctAnswer: 0,
        fact: "Yugito Nii from Kumogakure was the Two-Tails jinchuriki before being captured by Hidan and Kakuzu of the Akatsuki.",
        category: "Characters",
        difficulty: "expert",
      },
      {
        id: 83,
        question: "What clan does Haku belong to?",
        options: ["Yuki Clan", "Ice Clan", "Mist Clan", "Frost Clan"],
        correctAnswer: 0,
        fact: "Haku belongs to the Yuki clan, which possesses the Ice Release kekkei genkai. The clan was persecuted and nearly wiped out in the Mist Village.",
        category: "Characters",
        difficulty: "expert",
      },
      {
        id: 84,
        question: "Who taught Nagato how to use the Rinnegan?",
        options: ["Jiraiya", "Madara Uchiha", "Obito Uchiha", "Black Zetsu"],
        correctAnswer: 2,
        fact: "Obito Uchiha, disguised as Madara, taught Nagato how to use the Rinnegan's abilities and manipulated him into forming the Akatsuki.",
        category: "Characters",
        difficulty: "expert",
      },
      {
        id: 85,
        question: "What is the name of the Sage of Six Paths' brother?",
        options: [
          "Hamura Otsutsuki",
          "Indra Otsutsuki",
          "Asura Otsutsuki",
          "Toneri Otsutsuki",
        ],
        correctAnswer: 0,
        fact: "Hamura Otsutsuki is the brother of Hagoromo (Sage of Six Paths) and ancestor of the Hyuga clan and moon inhabitants.",
        category: "Characters",
        difficulty: "expert",
      },
    ],
    jutsu: [
      {
        id: 86,
        question: "What technique allows Kaguya to switch between dimensions?",
        options: [
          "Dimensional Portal",
          "Yomotsu Hirasaka",
          "Space-Time Migration",
          "Reality Shift",
        ],
        correctAnswer: 1,
        fact: "Yomotsu Hirasaka allows Kaguya to open portals between her six dimensions and transport herself or others instantly.",
        category: "Jutsu",
        difficulty: "expert",
      },
      {
        id: 87,
        question: "What is the name of Might Guy's ultimate technique?",
        options: [
          "Eight Gates Released Formation",
          "Night Guy",
          "Evening Elephant",
          "Sekizo",
        ],
        correctAnswer: 1,
        fact: "Night Guy is Guy's ultimate technique using the eighth gate. It's so powerful that it nearly killed Madara in his Six Paths form.",
        category: "Jutsu",
        difficulty: "expert",
      },
      {
        id: 88,
        question: "What technique can trap someone in an endless loop?",
        options: ["Izanagi", "Izanami", "Infinite Loop", "Eternal Genjutsu"],
        correctAnswer: 1,
        fact: "Izanami traps the target in an endless loop of events until they accept their fate and change their ways. It costs the user their eyesight.",
        category: "Jutsu",
        difficulty: "expert",
      },
      {
        id: 89,
        question:
          "What is the highest level of Lightning Release Sasuke achieves?",
        options: ["Chidori", "Lightning Blade", "Kirin", "Black Chidori"],
        correctAnswer: 2,
        fact: "Kirin is Sasuke's ultimate Lightning Release technique that uses natural lightning from storm clouds, making it nearly impossible to dodge.",
        category: "Jutsu",
        difficulty: "expert",
      },
      {
        id: 90,
        question: "What technique did Tobirama create to mark enemies?",
        options: [
          "Flying Thunder God",
          "Teleportation Mark",
          "Space-Time Marker",
          "Hiraishin",
        ],
        correctAnswer: 0,
        fact: "Flying Thunder God Technique was created by Tobirama, allowing instant teleportation to marked locations. Minato later perfected it.",
        category: "Jutsu",
        difficulty: "expert",
      },
      {
        id: 91,
        question:
          "What is the name of Hashirama's ultimate Wood Release technique?",
        options: [
          "Wood Dragon",
          "Sage Art: Wood Release: True Several Thousand Hands",
          "Wood Golem",
          "Forest Creation",
        ],
        correctAnswer: 1,
        fact: "Sage Art: Wood Release: True Several Thousand Hands creates a massive wooden statue with countless hands, capable of fighting Tailed Beasts.",
        category: "Jutsu",
        difficulty: "expert",
      },
    ],
    organizations: [
      {
        id: 92,
        question:
          "What was the original goal of the Akatsuki before it became criminal?",
        options: [
          "World conquest",
          "Peace in Rain Country",
          "Destroy hidden villages",
          "Collect tailed beasts",
        ],
        correctAnswer: 1,
        fact: "Originally, Akatsuki was founded by Yahiko to bring peace to the Rain Country and end the cycle of war through understanding.",
        category: "Organizations",
        difficulty: "expert",
      },
      {
        id: 93,
        question: "Who was the leader of Root before Danzo?",
        options: [
          "Hiruzen Sarutobi",
          "Danzo founded it",
          "Tobirama Senju",
          "Unknown predecessor",
        ],
        correctAnswer: 1,
        fact: "Danzo Shimura founded Root as a secret branch of ANBU, believing the village needed darker methods to protect itself.",
        category: "Organizations",
        difficulty: "expert",
      },
      {
        id: 94,
        question:
          "What organization did Orochimaru belong to before creating his village?",
        options: ["Akatsuki", "Root", "ANBU", "Sound Four"],
        correctAnswer: 0,
        fact: "Orochimaru was originally a member of the Akatsuki before leaving the organization and creating Otogakure (Hidden Sound Village).",
        category: "Organizations",
        difficulty: "expert",
      },
    ],
    history: [
      {
        id: 95,
        question: "What triggered the Fourth Shinobi World War?",
        options: [
          "Sasuke's revenge",
          "Akatsuki's plan",
          "Tobi's declaration",
          "Tailed beast capture",
        ],
        correctAnswer: 2,
        fact: "Tobi (Obito) declared war on the Five Great Nations when they refused to hand over the remaining tailed beasts for the Eye of the Moon Plan.",
        category: "History",
        difficulty: "expert",
      },
      {
        id: 96,
        question:
          "Who was the first person to awaken the Rinnegan in recorded history?",
        options: [
          "Sage of Six Paths",
          "Madara Uchiha",
          "Nagato Uzumaki",
          "Sasuke Uchiha",
        ],
        correctAnswer: 0,
        fact: "The Sage of Six Paths (Hagoromo Otsutsuki) was the first to awaken the Rinnegan, inherited from his mother Kaguya's power.",
        category: "History",
        difficulty: "expert",
      },
      {
        id: 97,
        question: "What was the name of the tree that Kaguya merged with?",
        options: ["Divine Tree", "God Tree", "Shinju", "World Tree"],
        correctAnswer: 2,
        fact: "The Shinju (Divine Tree) was the source of all chakra. Kaguya ate its fruit and later merged with it to become the Ten-Tails.",
        category: "History",
        difficulty: "expert",
      },
      {
        id: 98,
        question: "Who was the first Hokage's wife?",
        options: [
          "Mito Uzumaki",
          "Kushina Uzumaki",
          "Tsunade Senju",
          "Unknown",
        ],
        correctAnswer: 0,
        fact: "Mito Uzumaki was Hashirama's wife and the first jinchuriki of the Nine-Tails. She was from the Uzumaki clan of Uzushiogakure.",
        category: "History",
        difficulty: "expert",
      },
      {
        id: 99,
        question: "What was the original name of the Ten-Tails?",
        options: ["Juubi", "Shinju", "Divine Beast", "Datara"],
        correctAnswer: 1,
        fact: "The Ten-Tails was originally the Shinju (Divine Tree) that Kaguya merged with after eating the chakra fruit.",
        category: "History",
        difficulty: "expert",
      },
      {
        id: 100,
        question:
          "Who was the only person to naturally awaken the Rinnegan without external help?",
        options: [
          "Madara Uchiha",
          "Sasuke Uchiha",
          "Nagato Uzumaki",
          "Sage of Six Paths",
        ],
        correctAnswer: 0,
        fact: "Madara Uchiha was the only person to naturally awaken the Rinnegan by combining Senju and Uchiha chakra, fulfilling the requirements.",
        category: "History",
        difficulty: "expert",
      },
      {
        id: 261,
        question:
          "What is the true identity of the masked man who controlled the Nine-Tails?",
        options: ["Madara Uchiha", "Obito Uchiha", "Tobi", "Zetsu"],
        correctAnswer: 1,
        fact: "Obito Uchiha, thought dead from the Third Shinobi War, was saved by Madara and later controlled the Nine-Tails to attack Konoha.",
        category: "History",
        difficulty: "expert",
      },
      {
        id: 262,
        question: "Who created the Akatsuki organization originally?",
        options: ["Pain", "Madara", "Yahiko", "Obito"],
        correctAnswer: 2,
        fact: "Yahiko created the original Akatsuki as a peaceful organization to end wars, before Pain took control after Yahiko's death.",
        category: "History",
        difficulty: "expert",
      },
      {
        id: 263,
        question: "What was Kaguya's ultimate plan?",
        options: [
          "Destroy the world",
          "Infinite Tsukuyomi",
          "Collect chakra",
          "Rule as goddess",
        ],
        correctAnswer: 1,
        fact: "Kaguya planned to use Infinite Tsukuyomi to trap everyone in a dream world and harvest their chakra to create an army for her war against other Otsutsuki.",
        category: "History",
        difficulty: "expert",
      },
    ],
  },
};

// Local Storage utilities
const GameStorage = {
  setHighScore: (difficulty, category, score) => {
    const key = `naruto-trivia-${difficulty}-${category}`;
    const currentScore = localStorage.getItem(key);
    if (!currentScore || score > parseInt(currentScore)) {
      localStorage.setItem(key, score.toString());
      return true; // New high score
    }
    return false;
  },

  getHighScore: (difficulty, category) => {
    const key = `naruto-trivia-${difficulty}-${category}`;
    return parseInt(localStorage.getItem(key)) || 0;
  },

  getAllHighScores: () => {
    const scores = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("naruto-trivia-")) {
        const parts = key.replace("naruto-trivia-", "").split("-");
        if (parts.length === 2) {
          const [difficulty, category] = parts;
          if (!scores[difficulty]) scores[difficulty] = {};
          scores[difficulty][category] = parseInt(localStorage.getItem(key));
        }
      }
    }
    return scores;
  },

  saveGamePreferences: (preferences) => {
    localStorage.setItem(
      "naruto-trivia-preferences",
      JSON.stringify(preferences)
    );
  },

  getGamePreferences: () => {
    const prefs = localStorage.getItem("naruto-trivia-preferences");
    return prefs
      ? JSON.parse(prefs)
      : {
          difficulty: "easy",
          category: "all",
          reducedMotion: false,
        };
  },
};

// Question utility functions
const QuestionUtils = {
  getQuestionsByDifficultyAndCategory: (difficulty, category) => {
    if (category === "all") {
      const allCategories = Object.keys(triviaQuestions[difficulty]);
      return allCategories.flatMap((cat) => triviaQuestions[difficulty][cat]);
    }
    return triviaQuestions[difficulty][category] || [];
  },

  shuffleQuestions: (questions) => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  getDifficultyMultiplier: (difficulty) => {
    switch (difficulty) {
      case "easy":
        return 1;
      case "medium":
        return 1.5;
      case "hard":
        return 2;
      case "expert":
        return 2.5;
      default:
        return 1;
    }
  },
};

// Help Modal Component
function HelpModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Focus the close button when modal opens
      closeButtonRef.current?.focus();

      // Trap focus within modal
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        } else if (e.key === "Tab") {
          const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements?.[0];
          const lastElement = focusableElements?.[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-modal-title"
    >
      <div
        className="modal-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="help-modal-title" className="modal-title">
            🥷 How to Play Naruto Trivia
          </h2>
          <button
            ref={closeButtonRef}
            className="modal-close"
            onClick={onClose}
            aria-label="Close help modal"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="help-section">
            <h3>🎯 Game Basics</h3>
            <ul>
              <li>
                Choose your difficulty level: Easy, Medium, Hard, or Expert
              </li>
              <li>Select a category or play with mixed questions</li>
              <li>Answer multiple-choice questions about Naruto Shippuden</li>
              <li>Learn interesting facts after each correct answer</li>
            </ul>
          </div>

          <div className="help-section">
            <h3>⚡ Scoring System</h3>
            <ul>
              <li>
                <strong>Easy:</strong> 10 points per correct answer
              </li>
              <li>
                <strong>Medium:</strong> 15 points per correct answer (1.5x
                multiplier)
              </li>
              <li>
                <strong>Hard:</strong> 20 points per correct answer (2x
                multiplier)
              </li>
              <li>
                <strong>Expert:</strong> 25 points per correct answer (2.5x
                multiplier)
              </li>
              <li>Build up answer streaks for bonus recognition</li>
            </ul>
          </div>

          <div className="help-section">
            <h3>🍃 Categories</h3>
            <ul>
              <li>
                <strong>Characters:</strong> Heroes, villains, and important
                figures
              </li>
              <li>
                <strong>Jutsu:</strong> Techniques, abilities, and special
                powers
              </li>
              <li>
                <strong>Story Arcs:</strong> Major events, organizations, and
                plot points
              </li>
              <li>
                <strong>All:</strong> Mixed questions from all categories
              </li>
            </ul>
          </div>

          <div className="help-section">
            <h3>♿ Accessibility Features</h3>
            <ul>
              <li>Full keyboard navigation support</li>
              <li>Screen reader friendly with ARIA labels</li>
              <li>High contrast mode support</li>
              <li>Reduced motion options respected</li>
              <li>Focus indicators for better visibility</li>
            </ul>
          </div>

          <div className="help-section">
            <h3>🎮 Keyboard Controls</h3>
            <ul>
              <li>
                <kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> - Navigate between
                elements
              </li>
              <li>
                <kbd>Space</kbd> / <kbd>Enter</kbd> - Select answers and buttons
              </li>
              <li>
                <kbd>Escape</kbd> - Close modals
              </li>
              <li>Arrow keys - Navigate between answer options</li>
            </ul>
          </div>
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-primary"
            onClick={onClose}
            aria-label="Close help modal and return to game"
          >
            Got It! 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log error to console in development
    console.error("Naruto Trivia Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <div className="error-content">
            <h2 className="error-title">🚫 Ninja Technique Failed!</h2>
            <p className="error-message">
              Something went wrong with the trivia game. Even the best ninjas
              encounter unexpected obstacles!
            </p>
            <div className="error-actions">
              <button
                className="btn btn-primary"
                onClick={() => window.location.reload()}
                aria-label="Reload the game"
              >
                🔄 Try Again
              </button>
              <button
                className="btn btn-secondary"
                onClick={() =>
                  this.setState({
                    hasError: false,
                    error: null,
                    errorInfo: null,
                  })
                }
                aria-label="Reset error state"
              >
                🏠 Back to Menu
              </button>
            </div>
            {process.env.NODE_ENV === "development" && (
              <details className="error-details">
                <summary>Error Details (Development)</summary>
                <pre>{this.state.error && this.state.error.toString()}</pre>
                <pre>{this.state.errorInfo.componentStack}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
function LoadingSpinner({ size = "medium", text = "Loading..." }) {
  const sizeClasses = {
    small: "loading-spinner-small",
    medium: "loading-spinner-medium",
    large: "loading-spinner-large",
  };

  return (
    <div
      className={`loading-spinner ${sizeClasses[size]}`}
      role="status"
      aria-live="polite"
    >
      <div className="spinner-ninja-star" aria-hidden="true"></div>
      <span className="loading-text">{text}</span>
    </div>
  );
}

// Social Sharing Component
function SocialShare({ score, difficulty, category, totalQuestions }) {
  const percentage = Math.round(
    (score /
      (totalQuestions *
        10 *
        QuestionUtils.getDifficultyMultiplier(difficulty))) *
      100
  );
  const shareText = `I just scored ${score} points (${percentage}%) on the Naruto Shippuden ${difficulty.toUpperCase()} ${category} trivia! 🥷 Think you can beat me?`;
  const shareUrl = window.location.href;

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert("Share text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="social-share" role="region" aria-label="Share your score">
      <h3 className="share-title">Share Your Score! 🎉</h3>
      <div className="share-buttons">
        <button
          className="share-btn twitter"
          onClick={shareOnTwitter}
          aria-label="Share score on Twitter"
        >
          <span aria-hidden="true">🐦</span> Twitter
        </button>
        <button
          className="share-btn facebook"
          onClick={shareOnFacebook}
          aria-label="Share score on Facebook"
        >
          <span aria-hidden="true">📘</span> Facebook
        </button>
        <button
          className="share-btn copy"
          onClick={copyToClipboard}
          aria-label="Copy share text to clipboard"
        >
          <span aria-hidden="true">📋</span> Copy
        </button>
      </div>
    </div>
  );
}

// Game Setup Component for difficulty and category selection
function GameSetup({ onStartGame }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showHelp, setShowHelp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const preferences = GameStorage.getGamePreferences();
  const titleRef = useRef(null);

  useEffect(() => {
    setSelectedDifficulty(preferences.difficulty);
    setSelectedCategory(preferences.category);

    // Focus the title for screen readers
    titleRef.current?.focus();
  }, []);

  const handleStartGame = async () => {
    setIsLoading(true);

    try {
      // Simulate brief loading for better UX
      await new Promise((resolve) => setTimeout(resolve, 800));

      const gamePreferences = {
        difficulty: selectedDifficulty,
        category: selectedCategory,
        reducedMotion: preferences.reducedMotion,
      };
      GameStorage.saveGamePreferences(gamePreferences);
      onStartGame(selectedDifficulty, selectedCategory);
    } catch (error) {
      console.error("Error starting game:", error);
      setIsLoading(false);
    }
  };

  const handleKeyNavigation = (e, options, currentIndex, setFunction) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % options.length;
      setFunction(options[nextIndex]);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + options.length) % options.length;
      setFunction(options[prevIndex]);
    }
  };

  const difficultyInfo = {
    easy: {
      emoji: "🥋",
      description: "Basic ninja knowledge - Perfect for beginners",
      points: "1x points",
    },
    medium: {
      emoji: "⚡",
      description: "Intermediate shinobi skills - More challenging",
      points: "1.5x points",
    },
    hard: {
      emoji: "🔥",
      description: "Advanced ninja mastery - Expert level",
      points: "2x points",
    },
    expert: {
      emoji: "💀",
      description: "True ninja legend - Ultimate challenge",
      points: "2.5x points",
    },
  };

  const categoryInfo = {
    all: { emoji: "🌟", description: "Mixed questions from all categories" },
    characters: {
      emoji: "👥",
      description: "Heroes, villains, and everyone in between",
    },
    jutsu: { emoji: "💥", description: "Techniques and special abilities" },
    organizations: {
      emoji: "🏛️",
      description: "Groups, clans, and ninja organizations",
    },
    history: {
      emoji: "📖",
      description: "Major story events and ninja world history",
    },
  };

  const difficultyKeys = Object.keys(difficultyInfo);
  const categoryKeys = Object.keys(categoryInfo);
  const currentDifficultyIndex = difficultyKeys.indexOf(selectedDifficulty);
  const currentCategoryIndex = categoryKeys.indexOf(selectedCategory);

  if (isLoading) {
    return (
      <div className="game-setup loading-state">
        <div className="setup-content">
          <LoadingSpinner
            size="large"
            text="Preparing your ninja challenge..."
          />
        </div>
      </div>
    );
  }

  return (
    <div className="game-setup" role="main">
      <div className="setup-content">
        <div className="setup-header">
          <h2
            ref={titleRef}
            className="setup-title"
            tabIndex="-1"
            id="setup-main-title"
          >
            Choose Your Ninja Path
          </h2>
          <button
            className="help-button"
            onClick={() => setShowHelp(true)}
            aria-label="Open help and instructions"
            title="Get help and learn how to play"
          >
            <span aria-hidden="true">❓</span>
            <span className="help-text">Help</span>
          </button>
        </div>

        <div
          className="difficulty-selection"
          role="radiogroup"
          aria-labelledby="difficulty-label"
        >
          <h3 id="difficulty-label" className="selection-title">
            <span aria-hidden="true">⚡</span> Difficulty Level
          </h3>
          <div
            className="option-grid"
            onKeyDown={(e) =>
              handleKeyNavigation(
                e,
                difficultyKeys,
                currentDifficultyIndex,
                setSelectedDifficulty
              )
            }
          >
            {Object.entries(difficultyInfo).map(([level, info]) => (
              <button
                key={level}
                className={`option-card ${
                  selectedDifficulty === level ? "selected" : ""
                }`}
                onClick={() => setSelectedDifficulty(level)}
                role="radio"
                aria-checked={selectedDifficulty === level}
                aria-describedby={`${level}-description`}
                tabIndex={selectedDifficulty === level ? 0 : -1}
              >
                <div className="option-emoji" aria-hidden="true">
                  {info.emoji}
                </div>
                <div className="option-name">
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </div>
                <div className="option-description" id={`${level}-description`}>
                  {info.description}
                </div>
                <div className="option-points">{info.points}</div>
              </button>
            ))}
          </div>
        </div>

        <div
          className="category-selection"
          role="radiogroup"
          aria-labelledby="category-label"
        >
          <h3 id="category-label" className="selection-title">
            <span aria-hidden="true">📚</span> Question Category
          </h3>
          <div
            className="option-grid"
            onKeyDown={(e) =>
              handleKeyNavigation(
                e,
                categoryKeys,
                currentCategoryIndex,
                setSelectedCategory
              )
            }
          >
            {Object.entries(categoryInfo).map(([category, info]) => (
              <button
                key={category}
                className={`option-card ${
                  selectedCategory === category ? "selected" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
                role="radio"
                aria-checked={selectedCategory === category}
                aria-describedby={`${category}-description`}
                tabIndex={selectedCategory === category ? 0 : -1}
              >
                <div className="option-emoji" aria-hidden="true">
                  {info.emoji}
                </div>
                <div className="option-name">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
                <div
                  className="option-description"
                  id={`${category}-description`}
                >
                  {info.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div
          className="high-score-display"
          role="region"
          aria-label="Your current high score for selected options"
        >
          <h4 className="high-score-title">Your Best Score:</h4>
          <div className="high-score-value" aria-live="polite">
            {GameStorage.getHighScore(selectedDifficulty, selectedCategory)}{" "}
            points
          </div>
          <div className="high-score-subtitle">
            {selectedDifficulty.charAt(0).toUpperCase() +
              selectedDifficulty.slice(1)}{" "}
            •{" "}
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
          </div>
        </div>

        <button
          className="start-game-btn"
          onClick={handleStartGame}
          aria-label={`Start ${selectedDifficulty} level ${selectedCategory} trivia game`}
          disabled={isLoading}
        >
          <span aria-hidden="true">🚀</span> Start Game
        </button>
      </div>

      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
}

// Question Component with enhanced accessibility and keyboard navigation
function QuestionComponent({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  showResult,
  onAnswerSelect,
  questionRef,
  difficulty,
}) {
  const [focusedAnswerIndex, setFocusedAnswerIndex] = useState(0);
  const [shouldFocusAnswer, setShouldFocusAnswer] = useState(false);
  const answerRefs = useRef([]);
  const progressPercentage =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  useEffect(() => {
    // Focus the question when it changes
    if (questionRef.current) {
      questionRef.current.focus();
    }

    // Reset focused answer index
    setFocusedAnswerIndex(0);
    setShouldFocusAnswer(false);

    // Clear answer refs
    answerRefs.current = [];
  }, [currentQuestionIndex]);

  const handleKeyDown = (e) => {
    if (showResult) return;

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        setShouldFocusAnswer(true);
        setFocusedAnswerIndex((prev) => (prev + 1) % question.options.length);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        setShouldFocusAnswer(true);
        setFocusedAnswerIndex(
          (prev) =>
            (prev - 1 + question.options.length) % question.options.length
        );
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (!showResult) {
          onAnswerSelect(focusedAnswerIndex);
        }
        break;
      case "1":
      case "2":
      case "3":
      case "4":
        e.preventDefault();
        const numberIndex = parseInt(e.key) - 1;
        if (numberIndex < question.options.length) {
          setShouldFocusAnswer(true);
          setFocusedAnswerIndex(numberIndex);
          onAnswerSelect(numberIndex);
        }
        break;
    }
  };

  useEffect(() => {
    // Only focus the answer option when user is actively navigating with keyboard
    if (shouldFocusAnswer && answerRefs.current[focusedAnswerIndex]) {
      answerRefs.current[focusedAnswerIndex].focus();
    }
  }, [focusedAnswerIndex, shouldFocusAnswer]);

  return (
    <div className="question-section" onKeyDown={handleKeyDown}>
      <div className="question-header">
        <div className="question-number" role="status" aria-live="polite">
          Question {currentQuestionIndex + 1} of {totalQuestions} •{" "}
          {difficulty.toUpperCase()}
        </div>

        <div
          className="progress-container"
          role="progressbar"
          aria-label="Quiz progress"
        >
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
            aria-valuenow={currentQuestionIndex + 1}
            aria-valuemin="1"
            aria-valuemax={totalQuestions}
          ></div>
          <div className="progress-text" aria-live="polite">
            {Math.round(progressPercentage)}% Complete
          </div>
        </div>
      </div>

      <h2
        className="question-text"
        ref={questionRef}
        tabIndex="-1"
        id="current-question"
      >
        {question.question}
      </h2>

      <div className="keyboard-hint" aria-hidden="true">
        Use arrow keys to navigate, Enter/Space to select, or press 1-4 for
        quick selection
      </div>

      <div
        className="answers-container"
        role="radiogroup"
        aria-labelledby="current-question"
        aria-describedby="keyboard-instructions"
      >
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isFocused = focusedAnswerIndex === index;
          const isCorrect = showResult && index === question.correctAnswer;
          const isIncorrect =
            showResult &&
            selectedAnswer === index &&
            index !== question.correctAnswer;

          return (
            <button
              key={index}
              ref={(el) => (answerRefs.current[index] = el)}
              className={`answer-option ${isSelected ? "selected" : ""} ${
                isFocused ? "focused" : ""
              } ${isCorrect ? "correct" : ""} ${
                isIncorrect ? "incorrect" : ""
              } ${showResult ? "disabled" : ""}`}
              onClick={() => {
                setShouldFocusAnswer(false);
                setFocusedAnswerIndex(index);
                onAnswerSelect(index);
              }}
              disabled={showResult}
              role="radio"
              aria-checked={isSelected}
              aria-describedby={`answer-${index}-feedback`}
              tabIndex={isFocused ? 0 : -1}
            >
              <span className="answer-number" aria-hidden="true">
                {index + 1}
              </span>
              <span className="answer-text">{option}</span>
              <span className="answer-icon" aria-hidden="true">
                {showResult && isSelected && isCorrect && "✓"}
                {showResult && isSelected && isIncorrect && "✗"}
              </span>
              <div
                id={`answer-${index}-feedback`}
                className="sr-only"
                aria-live="polite"
              >
                {showResult && isCorrect && "Correct answer"}
                {showResult && isIncorrect && "Incorrect answer"}
              </div>
            </button>
          );
        })}
      </div>

      <div id="keyboard-instructions" className="sr-only">
        Use arrow keys to navigate between answers, press Enter or Space to
        select, or press numbers 1 through 4 for quick selection
      </div>
    </div>
  );
}

// Enhanced Score Display Component
function ScoreDisplay({
  score,
  currentQuestionIndex,
  totalQuestions,
  streak,
  difficulty,
}) {
  return (
    <div
      className="score-display"
      role="status"
      aria-live="polite"
      aria-label="Game status"
    >
      <div className="score-info">
        <div className="score-item">
          <div className="score-label">Score</div>
          <div className="score-value">{score}</div>
          <div className="score-multiplier">
            ×{QuestionUtils.getDifficultyMultiplier(difficulty)}
          </div>
        </div>
        <div className="score-item">
          <div className="score-label">Progress</div>
          <div className="score-value">
            {currentQuestionIndex + 1}/{totalQuestions}
          </div>
        </div>
        <div className="score-item">
          <div className="score-label">Streak</div>
          <div className="score-value">{streak}</div>
        </div>
      </div>
    </div>
  );
}

// Fact Display Component
function FactDisplay({ fact, visible, factRef }) {
  if (!visible) return null;

  return (
    <div
      className="fact-display"
      ref={factRef}
      tabIndex="-1"
      role="complementary"
      aria-label="Educational fact about the correct answer"
      aria-live="assertive"
    >
      <div className="fact-title" aria-hidden="true">
        🍃 Ninja Fact!
      </div>
      <div className="fact-text">{fact}</div>
    </div>
  );
}

// Main App Component with enhanced features and error handling
function App() {
  // Game State
  const [gamePhase, setGamePhase] = useState("hero"); // 'hero', 'setup', 'playing', 'completed'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [streak, setStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("all");
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const [error, setError] = useState(null);
  const [showHelp, setShowHelp] = useState(false);

  // Refs for accessibility and focus management
  const questionRef = useRef(null);
  const factRef = useRef(null);
  const heroRef = useRef(null);
  const resultsRef = useRef(null);

  // Initialize game with error handling
  useEffect(() => {
    const initializeGame = async () => {
      try {
        // Simulate loading time for better UX
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Check localStorage availability
        if (!window.localStorage) {
          throw new Error(
            "Local storage is not available. Some features may not work properly."
          );
        }

        setLoading(false);
        hideLoadingScreen();
      } catch (err) {
        console.error("Game initialization error:", err);
        setError(
          "Failed to initialize the game. Please refresh and try again."
        );
        setLoading(false);
        hideLoadingScreen();
      }
    };

    initializeGame();
  }, []);

  const hideLoadingScreen = () => {
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
      loadingScreen.classList.add("hidden");
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 500);
    }
  };

  // Setup game with selected difficulty and category
  const handleSetupGame = async (selectedDifficulty, selectedCategory) => {
    try {
      setDifficulty(selectedDifficulty);
      setCategory(selectedCategory);

      const gameQuestions = QuestionUtils.getQuestionsByDifficultyAndCategory(
        selectedDifficulty,
        selectedCategory
      );

      if (gameQuestions.length === 0) {
        throw new Error(
          `No questions found for ${selectedDifficulty} ${selectedCategory}. Please try a different combination.`
        );
      }

      const shuffledQuestions = QuestionUtils.shuffleQuestions(gameQuestions);

      setQuestions(shuffledQuestions);
      setGamePhase("playing");
      resetGameState();

      // Focus management - focus the first question
      setTimeout(() => {
        if (questionRef.current) {
          questionRef.current.focus();
        }
      }, 100);
    } catch (err) {
      console.error("Game setup error:", err);
      setError(err.message);
    }
  };

  const resetGameState = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setShowFact(false);
    setStreak(0);
    setCorrectAnswers(0);
    setIsNewHighScore(false);
    setError(null);
  };

  // Handle answer selection with enhanced scoring and error handling
  const handleAnswerSelect = (answerIndex) => {
    try {
      if (selectedAnswer !== null || showResult) return;

      setSelectedAnswer(answerIndex);
      setShowResult(true);

      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = answerIndex === currentQuestion.correctAnswer;

      if (isCorrect) {
        const points = Math.round(
          10 * QuestionUtils.getDifficultyMultiplier(difficulty)
        );
        setScore((prev) => prev + points);
        setCorrectAnswers((prev) => prev + 1);
        setStreak((prev) => prev + 1);
        setShowFact(true);

        // Trigger score animation
        const scoreDisplay = document.querySelector(".score-display");
        if (scoreDisplay) {
          scoreDisplay.classList.add("score-increased");
          setTimeout(
            () => scoreDisplay.classList.remove("score-increased"),
            800
          );
        }

        // Focus the fact display for screen readers
        setTimeout(() => {
          if (factRef.current) {
            factRef.current.focus();
          }
        }, 500);
      } else {
        setStreak(0);
      }

      // Auto-advance after a delay for better UX
      setTimeout(() => {
        const nextButton = document.querySelector(".btn-primary");
        if (nextButton) {
          nextButton.focus();
        }
      }, 1000);
    } catch (err) {
      console.error("Answer selection error:", err);
      setError("Error processing your answer. Please try again.");
    }
  };

  // Handle next question with transition and focus management
  const handleNextQuestion = () => {
    try {
      const questionSection = document.querySelector(".question-section");
      if (questionSection) {
        questionSection.style.opacity = "0";
        questionSection.style.transform = "translateY(20px)";
      }

      setTimeout(() => {
        setSelectedAnswer(null);
        setShowResult(false);
        setShowFact(false);

        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);

          // Focus management for next question
          setTimeout(() => {
            if (questionRef.current) {
              questionRef.current.focus();
            }
          }, 100);
        } else {
          // Game completed - check for high score
          try {
            const newHighScore = GameStorage.setHighScore(
              difficulty,
              category,
              score
            );
            setIsNewHighScore(newHighScore);
            setGamePhase("completed");

            // Focus the results
            setTimeout(() => {
              if (resultsRef.current) {
                resultsRef.current.focus();
              }
            }, 100);
          } catch (err) {
            console.error("High score save error:", err);
            setGamePhase("completed");
          }
        }

        if (questionSection) {
          questionSection.style.opacity = "";
          questionSection.style.transform = "";
        }
      }, 200);
    } catch (err) {
      console.error("Next question error:", err);
      setError("Error loading next question. Please try refreshing the page.");
    }
  };

  // Game phase handlers
  const handleStartFromHero = () => {
    setGamePhase("setup");
    setError(null);
  };

  const handleRestartGame = () => {
    setGamePhase("setup");
    resetGameState();
  };

  const handleStartOver = () => {
    resetGameState();
    setGamePhase("playing");

    // Regenerate questions with same settings
    try {
      const availableQuestions =
        QuestionUtils.getQuestionsByDifficultyAndCategory(difficulty, category);
      if (availableQuestions.length === 0) {
        setError(
          "No questions available for the selected difficulty and category."
        );
        setGamePhase("setup");
        return;
      }
      const shuffledQuestions =
        QuestionUtils.shuffleQuestions(availableQuestions);
      setQuestions(shuffledQuestions);
    } catch (err) {
      console.error("Error starting new game:", err);
      setError("Error starting new game. Please try again.");
      setGamePhase("setup");
    }
  };

  const handleBackToHome = () => {
    resetGameState();
    setGamePhase("hero");
  };

  const getScoreMessage = () => {
    const percentage = (correctAnswers / questions.length) * 100;
    if (percentage >= 90)
      return "Outstanding! You have the ability of a Jonin! 🥷 A true ninja master!";
    if (percentage >= 80)
      return "Excellent! You have the ability of a Chunin! ⚡ Great knowledge of the ninja world!";
    if (percentage >= 70)
      return "Good job! You have the ability of a Genin! 🍃 Keep training to advance!";
    if (percentage >= 60)
      return "Not bad! You're still an Academy Student! 💪 More training needed!";
    return "Keep studying! Every ninja starts at the Academy! 📚 Practice makes perfect!";
  };

  const getStreakMessage = () => {
    if (streak >= 5) return "🔥 Amazing streak! You're on fire!";
    if (streak >= 3) return "⚡ Great streak! Keep it up!";
    if (streak >= 2) return "🍃 Nice streak!";
    return "";
  };

  // Error state
  if (error) {
    return (
      <div className="error-screen" role="alert">
        <div className="error-content">
          <h2 className="error-title">🚫 Something Went Wrong</h2>
          <p className="error-message">{error}</p>
          <div className="error-actions">
            <button
              className="btn btn-primary"
              onClick={() => window.location.reload()}
              aria-label="Reload the page"
            >
              🔄 Reload Page
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setError(null);
                setGamePhase("hero");
                resetGameState();
              }}
              aria-label="Return to main menu"
            >
              🏠 Main Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return null;
  }

  // Hero Section
  if (gamePhase === "hero") {
    return (
      <div className="hero-section" role="main">
        <a href="#hero-content" className="skip-link">
          Skip to main content
        </a>

        <div className="hero-ninja-star" aria-hidden="true"></div>
        <div className="hero-ninja-star" aria-hidden="true"></div>
        <div className="hero-ninja-star" aria-hidden="true"></div>
        <div className="hero-ninja-star" aria-hidden="true"></div>

        <div className="hero-content" id="hero-content">
          <h1 ref={heroRef} className="hero-title" tabIndex="-1">
            Naruto Shippuden Trivia Challenge
          </h1>
          <p className="hero-subtitle">
            Test your knowledge of the ninja world! Answer questions about your
            favorite characters, jutsu, villages, and epic battles. Are you
            ready to become a trivia master?
          </p>
          <div className="hero-buttons">
            <button
              className="hero-start-btn"
              onClick={handleStartFromHero}
              aria-label="Start the Naruto Shippuden trivia challenge"
            >
              <span aria-hidden="true">🥷</span> Begin Your Journey
            </button>
            <button
              className="hero-help-btn"
              onClick={() => setShowHelp(true)}
              aria-label="Open help and instructions"
            >
              <span aria-hidden="true">❓</span> How to Play
            </button>
          </div>
        </div>

        <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
      </div>
    );
  }

  // Game Setup Phase
  if (gamePhase === "setup") {
    return <GameSetup onStartGame={handleSetupGame} />;
  }

  // Game Completed - Results screen
  if (gamePhase === "completed") {
    return (
      <div className="app" role="main">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <header className="header">
          <h1>Mission Complete!</h1>
          <p>
            {difficulty.toUpperCase()} •{" "}
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </p>
        </header>

        <main className="main-content" id="main-content">
          <div className="game-container">
            <div className="results-section">
              {isNewHighScore && (
                <div
                  className="new-high-score"
                  role="alert"
                  aria-live="assertive"
                >
                  🎉 NEW HIGH SCORE! 🎉
                </div>
              )}

              <h2 ref={resultsRef} className="results-title" tabIndex="-1">
                Your Final Score
              </h2>
              <div className="final-score" role="status" aria-live="polite">
                {score} Points
              </div>
              <p className="score-message">{getScoreMessage()}</p>

              <div className="character-stats">
                <div
                  className="stat-card"
                  role="region"
                  aria-label="Correct answers statistic"
                >
                  <div className="stat-icon" aria-hidden="true">
                    🎯
                  </div>
                  <div className="stat-value">
                    {correctAnswers}/{questions.length}
                  </div>
                  <div className="stat-label">Correct Answers</div>
                </div>
                <div
                  className="stat-card"
                  role="region"
                  aria-label="Accuracy percentage"
                >
                  <div className="stat-icon" aria-hidden="true">
                    📊
                  </div>
                  <div className="stat-value">
                    {Math.round((correctAnswers / questions.length) * 100)}%
                  </div>
                  <div className="stat-label">Accuracy</div>
                </div>
                <div
                  className="stat-card"
                  role="region"
                  aria-label="Best answer streak"
                >
                  <div className="stat-icon" aria-hidden="true">
                    ⚡
                  </div>
                  <div className="stat-value">{streak}</div>
                  <div className="stat-label">Best Streak</div>
                </div>
              </div>

              <SocialShare
                score={score}
                difficulty={difficulty}
                category={category}
                totalQuestions={questions.length}
              />

              <div className="action-buttons">
                <button
                  className="btn btn-primary"
                  onClick={handleStartOver}
                  aria-label="Start a new game with the same settings"
                >
                  <span aria-hidden="true">🔄</span> Start Over
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleRestartGame}
                  aria-label="Play again with different settings"
                >
                  <span aria-hidden="true">🥷</span> Play Again
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleBackToHome}
                  aria-label="Go back to home screen"
                >
                  <span aria-hidden="true">🏠</span> Back to Home
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowHelp(true)}
                  aria-label="View help and instructions"
                >
                  <span aria-hidden="true">❓</span> Help
                </button>
              </div>
            </div>
          </div>
        </main>

        <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
      </div>
    );
  }

  // Main game interface
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="error-screen" role="alert">
        <div className="error-content">
          <h2 className="error-title">🚫 No Questions Available</h2>
          <p className="error-message">
            No questions found for the selected difficulty and category
            combination.
          </p>
          <div className="error-actions">
            <button
              className="btn btn-primary"
              onClick={handleRestartGame}
              aria-label="Choose different settings"
            >
              🔄 Try Different Settings
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app" role="main">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="header">
        <div className="header-content">
          <h1>Naruto Shippuden Trivia</h1>
          <p>
            {difficulty.toUpperCase()} •{" "}
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </p>
        </div>
        <div className="header-actions">
          <button
            className="header-btn header-btn-prominent"
            onClick={handleStartOver}
            aria-label="Start over with same settings"
            title="Start Over - New game with same difficulty"
          >
            <span className="btn-icon" aria-hidden="true">
              🔄
            </span>
            <span className="btn-text">Start Over</span>
          </button>
          <button
            className="header-btn header-btn-prominent"
            onClick={handleBackToHome}
            aria-label="Go back to home screen"
            title="Back to Home - Return to main menu"
          >
            <span className="btn-icon" aria-hidden="true">
              🏠
            </span>
            <span className="btn-text">Home</span>
          </button>
          <button
            className="header-help-btn"
            onClick={() => setShowHelp(true)}
            aria-label="Open help and instructions"
            title="Get help"
          >
            <span aria-hidden="true">❓</span>
          </button>
        </div>
      </header>

      <main className="main-content" id="main-content">
        <div className="game-container">
          <ScoreDisplay
            score={score}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            streak={streak}
            difficulty={difficulty}
          />

          <QuestionComponent
            question={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            onAnswerSelect={handleAnswerSelect}
            questionRef={questionRef}
            difficulty={difficulty}
          />

          {showResult && (
            <div
              aria-live="assertive"
              aria-atomic="true"
              className="sr-only"
              role="status"
            >
              {selectedAnswer === currentQuestion.correctAnswer
                ? `Correct! ${
                    currentQuestion.options[currentQuestion.correctAnswer]
                  } is the right answer. You earned ${Math.round(
                    10 * QuestionUtils.getDifficultyMultiplier(difficulty)
                  )} points.`
                : `Incorrect. The correct answer was ${
                    currentQuestion.options[currentQuestion.correctAnswer]
                  }.`}
            </div>
          )}

          <FactDisplay
            fact={currentQuestion.fact}
            visible={showFact}
            factRef={factRef}
          />

          {getStreakMessage() && (
            <div
              className="fact-display streak-display"
              style={{
                background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
              }}
              role="status"
              aria-live="polite"
            >
              <div className="fact-title" aria-hidden="true">
                🔥 Streak Alert!
              </div>
              <div className="fact-text">{getStreakMessage()}</div>
            </div>
          )}

          {showResult && (
            <div className="action-buttons">
              <button
                className="btn btn-primary"
                onClick={handleNextQuestion}
                aria-label={`Continue to ${
                  currentQuestionIndex === questions.length - 1
                    ? "see results"
                    : "next question"
                }`}
              >
                {currentQuestionIndex === questions.length - 1
                  ? "🏁 See Results"
                  : "➡️ Next Question"}
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Naruto Shippuden Trivia - Test your ninja knowledge!</p>
      </footer>

      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
}

// Render the app with Error Boundary
ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);
